import Head from 'next/head'

export default function CommonMeta({ title = "犬の検定|飼い主検定", description = "Learning Quiz App for Dog and Cat Owners", url="https://kainushi-kentei.vercel.app", site_name="飼い主検定", img_url="https://pbs.twimg.com/media/FdetUG1VEAAnEfw?format=jpg&name=medium" }) {

  return (
    <Head>
      <title>{title}</title>
      {/* OGPの設定 */}
      <meta property="og:type" content="PORTAL" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site_name} />
      <meta property="og:image" content={img_url} />
      {/* Twitterカードの設定 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="chell2282" />
    </Head>
  )
}
