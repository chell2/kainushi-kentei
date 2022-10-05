import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import Grid from '@/components/grid'
import TopLayout from '@/components/layout_top'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>飼い主検定</title>
        {/* Twitterカードの設定 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Sayaka_Kamizono" />
        <meta name="twitter:domain" content="kainushi-kentei.vercel.app" />
        <meta name="twitter:title" content="飼い主検定" />
        <meta name="twitter:description" content="Learning Quiz App for Dog and Cat Owners" />
        <meta name="twitter:image" content="https://kainushi-kentei.vercel.app/_next/image?url=%2Fcat_incorrect3.png&w=2048&q=75" />
      </Head>
      <main>
        <Grid />
      </main>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: any) {
  return (
    <TopLayout>
      {page}
    </TopLayout>
  )
}