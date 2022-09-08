import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import GridPrev from '@/components/gridprev'

const Backnumber: NextPage = () => {
  return (
    <div>
      <Head>
        <title>過去のクイズ｜飼い主検定</title>
      </Head>
      <main>
        <GridPrev />
        <Link href="/">
          <a>もどる</a>
        </Link>
      </main>
    </div>
  );
};

export default Backnumber;