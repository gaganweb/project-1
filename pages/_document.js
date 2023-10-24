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
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=open+sans:wght@300;400;600;700&display=swap" />
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