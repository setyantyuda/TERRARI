import Document, { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <title>TERRARI</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100&family=Roboto&display=swap" rel="stylesheet"/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}