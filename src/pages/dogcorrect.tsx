import type { NextPage } from 'next'
import Head from 'next/head'
import ArticleCardFooter from '@/components/answercard'

const DogQuiz: NextPage = () => {

  return (
    <div>
      <Head>
        <title>犬の検定｜飼い主検定</title>
      </Head>
      <main>
        <ArticleCardFooter
          image={'https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'}
          category={'decorations'}
          title={'正解！！！'}
          footer={''}
          author={{
            name: '答え : ❸鼻くそが溜まらない',
            description: '解説 : 犬の鼻には人間のような鼻毛が生えていないため、健康な状態であれば鼻くそは溜まりません。ゴミが入った場合はクシャミをしたり、鼻の奥に運ばれて飲み込んだり口から排出します。もし鼻くそが溜まっている場合は風邪をひいて鼻水がたくさん出ている可能性があるので要注意です。',
            image: ''
          }}
        />
      </main>
    </div>
  );
};

export default DogQuiz;