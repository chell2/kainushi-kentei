import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import Grid from '@/components/grid'
import Layout from '@/components/layout'

const Today: NextPageWithLayout = () => {
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

export default Today;

Today.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}