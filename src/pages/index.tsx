import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import Grid from '@/components/grid'
import TopLayout from '@/components/layout_top'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>飼い主検定</title>
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