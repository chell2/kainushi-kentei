import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import CommentaryCard from '@/components/commentarycard'
import commentatorImg from 'public/dog_commentator.png'

const DogAns: NextPage = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>犬の検定｜飼い主検定</title>
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
            icon: 'faDog',
            commentator: '犬岡 明美'
          }}
        />
      </main>
    </div>
  );
};

export default DogAns;