import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Playball&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Front End Developer Looking For a Job"
          />
          <meta name="keywords" content="Front End Developer , Freelancer " />
        </Head>
        <body className="bg-gradient-to-r from-purple-600 to-blue-400 dark:from-gray-600 dark:to-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
