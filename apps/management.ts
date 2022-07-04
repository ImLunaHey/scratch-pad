import { html } from 'common-tags';
import { App, Route, internals } from 'zara';

@App()
export class Management {
    @Route({
        path: '/'
    })
    public home() {
        const appData = Object.fromEntries([...internals.apps.keys()].map(name => [name, internals.routes.get(name)?.map(route => `http://localhost:${internals.ports.get(name)}${route}`)]));
        return html`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>App Management</title>
                </head>
                <body>
                    <h1>Apps</h1>
                    <pre>${JSON.stringify(appData, null, 2)}</pre>
                </body>
            </html>
        `;
    }
}
