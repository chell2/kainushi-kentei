import type { NextPage } from 'next'
import Head from 'next/head'
import ArticleCardFooter from '@/components/answercard'

const DogQuiz: NextPage = () => {
  
  
  return (
    <div>
      <Head>
        <title>猫の検定｜飼い主検定</title>
      </Head>
      <main>
        <ArticleCardFooter
          image={'https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'}
          category={'decorations'}
          title={'正解！！！'}
          footer={''}
          author={{
            name: '答え : ❸38歳',
            description: '解説 : ギネスに登録されている歴代最高齢の猫は、アメリカテキサス州で飼育されていたクリーム・パフちゃん。1967年8月3日〜2005年8月6日の「38年3日」生きた記録は未だに破られていません。',
            image: ''
          }}
        />
      </main>
    </div>
  );
};

export default DogQuiz;