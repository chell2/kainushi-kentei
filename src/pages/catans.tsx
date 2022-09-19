import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ArticleCard from '@/components/anscard'
import commentatorImage from 'public/AdobeStock_78109443_Preview.jpeg'

const CatAns: NextPage = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>猫の検定｜飼い主検定</title>
      </Head>
      <main>
        <ArticleCard
          image={'https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'}
          category={'decorations'}
          title={router.query.judge}
          footer={''}
          author={{
            name: router.query.answer,
            description: router.query.commentary,
            image: ''
          }}
        />
      </main>
    </div>
  );
};

export default CatAns;