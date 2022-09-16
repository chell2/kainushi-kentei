import type { NextPage } from 'next'
import Head from 'next/head'
import GridAbout from '@/components/gridabout'
import GridHowto from '@/components/gridhowto'

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>飼い主検定とは｜飼い主検定</title>
      </Head>
      <main>
        <GridHowto />
        <GridAbout />
      </main>
    </div>
  );
};

export default About;