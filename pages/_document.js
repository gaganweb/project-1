// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add your stylesheet links here */}
          <link rel="stylesheet" href="./css/font-awesome.min.css" />
          <link rel="stylesheet" href="./css/main.css" />
          <link rel="stylesheet" href="./css/responsive.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;