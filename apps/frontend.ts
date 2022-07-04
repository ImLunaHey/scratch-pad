import { html } from 'common-tags';
import { App, Route } from 'zara';

@App()
export class Frontend {
    @Route({
        path: '/'
    })
    public home() {
        return html`
            <html>
                <head>
                    <title>My personal website</title>
                </head>
                <body>
                    <h1>Welcome</h1>
                    <div>This is a piece of text.</div>
                </body>
            </html>
        `;
    }
}
