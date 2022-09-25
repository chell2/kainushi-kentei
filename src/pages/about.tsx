import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import Challenge from '@/components/about_challenge'
import Howto from '@/components/about_howto'
import Layout from '@/components/layout'

const About: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>飼い主検定とは｜飼い主検定</title>
      </Head>
      <main>
        <Howto />
        <Challenge />
      </main>
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}