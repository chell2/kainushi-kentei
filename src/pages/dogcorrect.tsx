import type { NextPage } from 'next'
import Head from 'next/head'
import DogCorrect from '@/components/dogcorrect'

const DogQuiz: NextPage = () => {
  return (
    <div>
      <Head>
        <title>犬の検定｜飼い主検定</title>
      </Head>
      <main>
        <DogCorrect />
      </main>
    </div>
  );
};

export default DogQuiz;