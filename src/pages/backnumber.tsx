import type { NextPage } from 'next'
import Head from 'next/head'
import GridPrev from '@/components/prev_first'

const Backnumber: NextPage = () => {
  return (
    <div>
      <Head>
        <title>過去のクイズ｜飼い主検定</title>
      </Head>
      <main>
        <GridPrev />
      </main>
    </div>
  );
};

export default Backnumber;