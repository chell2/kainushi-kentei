import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>飼い主検定とは｜飼い主検定</title>
      </Head>
      <main>
        <h1>飼い主検定とは</h1>
        <Link href="/">
        <a>もどる</a>
      </Link>
      </main>
    </div>
  );
};

export default About;