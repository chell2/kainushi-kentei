import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/layout'
import PrevFirst from '@/components/prev_first'
import PrevMore from '@/components/prev_more'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://animal-police.sub.jp/kainusikentei_backend/archive.php')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

const Backnumber: NextPageWithLayout = (props) => {
  return (
    <div>
      <Head>
        <title>過去のクイズ｜飼い主検定</title>
      </Head>
      <main>
        <PrevFirst props={props} />
        <PrevMore props={props} />
      </main>
    </div>
  );
};

export default Backnumber;

Backnumber.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}