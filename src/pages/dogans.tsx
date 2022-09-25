import Head from 'next/head'
import { useRouter } from 'next/router'
import CommonMeta from '../components/CommonMeta'
import type { NextPageWithLayout } from './_app'
import CommentaryCard from '@/components/commentarycard'
import Layout from '@/components/layout'
import commentatorImg from 'public/dog_commentator.png'

const DogAns: NextPageWithLayout = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>犬の検定｜飼い主検定</title>
      </Head>
      <CommonMeta />
      <main>
        <CommentaryCard
          image={router.query.judgeImg}
          category={router.query.category}
          title={router.query.judgment}
          footer={''}
          commentary={{
            answer: router.query.answer,
            description: router.query.commentary,
            image: commentatorImg,
            icon: 'faDog',
            commentator: '犬山 三郎'
          }}
        />
      </main>
    </div>
  );
};

export default DogAns;

DogAns.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}