import type { NextPage } from 'next'
import Head from 'next/head'
import GridAbout from '@/components/about_about'
import GridHowto from '@/components/about_howto'
import Layout from '@/components/layout'

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

About.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}