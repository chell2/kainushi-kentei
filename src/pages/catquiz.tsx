import type { NextPage } from 'next'
import Head from 'next/head'
import GridNewCat from '@/components/today_cat'

const DogQuiz: NextPage = () => {
  return (
    <div>
      <Head>
        <title>猫の検定｜飼い主検定</title>
      </Head>
      <main>
        <GridNewCat />
      </main>
    </div>
  );
};

export default DogQuiz;