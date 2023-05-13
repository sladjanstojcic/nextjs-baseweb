import { styletron } from '@/helpers/styletron';
import {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import { Server } from 'styletron-engine-atomic';
import { sheetT as StylesheetT } from 'styletron-engine-atomic/lib/server/server';
import { Provider as StyletronProvider } from 'styletron-react';

interface DocumentProps extends DocumentInitialProps {
    stylesheets: StylesheetT[];
}

const Document = ({ stylesheets }: DocumentProps) => {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/xox8jbm.css"
                />
                {stylesheets?.map((sheet, i) => (
                    <style
                        key={i}
                        className="_styletron_hydrate_"
                        dangerouslySetInnerHTML={{ __html: sheet.css }}
                        media={sheet.attrs.media}
                        data-hydrate={sheet.attrs['data-hydrate']}
                    />
                ))}
                <meta charSet="UTF-8" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

Document.getInitialProps = async (
    context: DocumentContext
): Promise<DocumentProps> => {
    const page = await context.renderPage({
        enhanceApp: (App: any) => (props: any) =>
            (
                <StyletronProvider value={styletron}>
                    <App {...props} />
                </StyletronProvider>
            ),
    });

    const stylesheets = (styletron as Server).getStylesheets() || [];
    return { ...page, stylesheets };
};

export default Document;
