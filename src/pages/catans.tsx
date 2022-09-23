import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import CommentaryCard from '@/components/commentarycard'
import Layout from '@/components/layout'
import commentatorImg from 'public/cat_commentator.png'

const CatAns: NextPage = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>猫の検定｜飼い主検定</title>
      </Head>
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
            icon: 'faCat',
            commentator: '猫宮 明美'
          }}
        />
      </main>
    </div>
  );
};

export default CatAns;

CatAns.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}