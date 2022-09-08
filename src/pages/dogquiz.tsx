import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Card from '@/components/card'

const DogQuiz: NextPage = () => {
  return (
    <div>
      <Head>
        <title>犬の検定｜飼い主検定</title>
      </Head>
      <main>
        <h1>犬の検定</h1>
        <Card />
        <Link href="/">
          <a>もどる</a>
        </Link>
      </main>
    </div>
  );
};

export default DogQuiz;