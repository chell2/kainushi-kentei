import { Radio,Button, Center } from '@mantine/core'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Choices({choice1, choice2, choice3, answer, commentary}: any) {
  const router = useRouter()
  const [value, setValue] = useState('react')
  const sendAnswer = () => {
    if (value == answer) {
      const judge = '正解'
      router.push(
        {
          pathname: "/catans",
          query: {value,answer,commentary,judge}
        }
      )
    } else {
      const judge = '不正解'
      router.push(
        {
          pathname: "/catans",
          query: {value,answer,commentary,judge}
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
        <Radio name="Ques" value={choice1} label={choice1} />
        <Radio name="Ques" value={choice2} label={choice2} />
        <Radio name="Ques" value={choice3} label={choice3} />
      </Radio.Group>
      <Center py="lg">
        <Button onClick={sendAnswer} color="cyan" radius="lg" >解答する</Button>
      </Center>
    </>
  );
}