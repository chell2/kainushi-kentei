import { Radio,Button, Center } from '@mantine/core'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Choices({choice1, choice2, choice3, answer, commentary}: any) {
  const router = useRouter()
  const [value, setValue] = useState('react')
  const sendAnswer = () => {
    if (value == answer) {
      const category = '猫の検定'
      const judge = '正解'
      router.push(
        {
          pathname: "/catans",
          query: {category, value, answer, judge, commentary}
        }
      )
    } else {
      const category = '猫の検定'
      const judge = '不正解'
      router.push(
        {
          pathname: "/catans",
          query: {category, value, answer, judge, commentary}
        }
      )
    }
  }

  return (
    <>
      <Radio.Group
        value={value}
        onChange={setValue}
        orientation="vertical"
        spacing="sm"
      >
        <Radio name="Ques" value={choice1} label={choice1} color="cyan" defaultChecked/>
        <Radio name="Ques" value={choice2} label={choice2} color="cyan"/>
        <Radio name="Ques" value={choice3} label={choice3} color="cyan"/>
      </Radio.Group>
      <Center py="lg">
        <Button onClick={sendAnswer} color="cyan" radius="lg" >解答する</Button>
      </Center>
    </>
  );
}