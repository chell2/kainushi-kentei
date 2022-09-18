import { Radio,Button, Center } from '@mantine/core'
import router from 'next/router'
import { useState } from 'react'

export default function RadioButton({choice1, choice2, choice3, answer}: any) {
  const [value, setValue] = useState('react')
  const test001 = () => {
    if (value == answer) {
      router.push("/catcorrect")
    }else{
        router.push("/catincorrect")
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
        <Button onClick={test001} color="cyan" radius="lg" >解答する</Button>
      </Center>
    </>
  );
}