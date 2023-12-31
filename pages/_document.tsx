import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components';
import React, { ReactElement } from "react";

export default class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
   
        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App:any) => (props:any) =>
                sheet.collectStyles(<App {...props} />),
            })
   
          const initialProps = await Document.getInitialProps(ctx)
          return {
            ...initialProps,
            styles: [
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ],
          }
        } finally {
          sheet.seal()
        }
      }
      
    render(): ReactElement {
        return (
            <Html lang="pt-br">
                <Head>
                  <link rel="preconnect" href="https://fonts.googleapis.com"/>
                  <link rel="preconnect" href="https://fonts.gstatic.com" />
                  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet"/>
                  
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
    
    

}
