import Head from 'next/head'

export default function CommonMeta({ title = "飼い主検定", description = "Learning Quiz App for Dog and Cat Owners", url="https://kainushi-kentei.vercel.app", img_url="https://kainushi-kentei.vercel.app/_next/image?url=%2Fdog_correct3.png&w=2048&q=75" }) {

  return (
    <Head>
      <title>{title}</title>
      {/* Twitterカードの設定 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chell2282" />
      <meta name="twitter:domain" content="kainushi-kentei.vercel.app" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img_url} />
    </Head>
  )
}
