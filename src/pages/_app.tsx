import Layout from '@/components/layout/DefaultLayout';
import { styletron } from '@/helpers/styletron';
import '@/styles/globals.css';
import { BaseProvider, LightTheme } from 'baseui';
import type { AppProps } from 'next/app';
import { Provider as StyletronProvider } from 'styletron-react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <StyletronProvider value={styletron}>
            <BaseProvider theme={LightTheme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </BaseProvider>
        </StyletronProvider>
    );
}
