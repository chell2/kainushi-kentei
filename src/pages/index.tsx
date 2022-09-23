import type {NextPage} from 'next'
import Head from 'next/head'
import Grid from '@/components/grid'
import TopLayout from '@/components/layout_top'

const Home: NextPage = () => {
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