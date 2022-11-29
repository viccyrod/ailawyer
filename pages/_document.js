import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="DeepLegal AI Lawyer" key="title"/>
        <meta property="og:description" content="Ask it any legal questions" key="description"/>
        <meta
          property="og:image"
          content="https://uploads-ssl.webflow.com/6343dce976d014e3d72509ce/63861253b603098514e1f140_Deep%20Legal%20aI.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
