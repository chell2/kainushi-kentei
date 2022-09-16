import type { NextPage } from 'next'
import Head from 'next/head'
import GridPrev from '@/components/gridprev'

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