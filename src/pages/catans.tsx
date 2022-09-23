import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import CommentaryCard from '@/components/commentarycard'
import correctImg from '/public/dog_correct.png'
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
          image={correctImg}
          category={router.query.category}
          title={router.query.judge}
          footer={''}
          commentary={{
            answer: router.query.answer,
            description: router.query.commentary,
            image: commentatorImg,
            icon: 'faCat'
          }}
        />
      </main>
    </div>
  );
};

export default CatAns;