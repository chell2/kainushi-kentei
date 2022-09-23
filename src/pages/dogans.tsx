import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import CommentaryCard from '@/components/commentarycard'
import commentatorImg from 'public/dog_commentator.png'
import correctImg from '/public/dog_correct.png'
import incorrectImg from '/public/dog_incorrect.png'

const DogAns: NextPage = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>犬の検定｜飼い主検定</title>
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
            icon: 'faDog'
          }}
        />
      </main>
    </div>
  );
};

export default DogAns;