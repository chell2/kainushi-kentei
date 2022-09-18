import type { NextPage } from 'next'
import Head from 'next/head'
import GridNewDog from '@/components/today_dog'

const DogQuiz: NextPage = () => {
  return (
    <div>
      <Head>
        <title>犬の検定｜飼い主検定</title>
      </Head>
      <main>
        <GridNewDog />
      </main>
    </div>
  );
};

export default DogQuiz;