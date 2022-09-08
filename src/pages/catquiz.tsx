import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Card from '@/components/card'

const CatQuiz: NextPage = () => {
  return (
    <div>
      <Head>
        <title>猫の検定｜飼い主検定</title>
      </Head>
      <main>
        <h1>猫の検定</h1>
        <Card />
        <Link href="/">
          <a>もどる</a>
        </Link>
      </main>
    </div>
  );
};

export default CatQuiz;