import { Radio,Button, Center } from '@mantine/core'
import router from 'next/router';
import { useState } from 'react'

export default function RadioButton() {
  const [value, setValue] = useState('react')
  const test001 = () => {
    var answer = "3";
    if (value == answer) {
      console.log("正解");
      router.push("/dogcorrect")
    }else{
        console.log("不正解");
          router.push("/dogincorrect")
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
        <Radio name="Ques" value="1" label="1.　ほじる" />
        <Radio name="Ques" value="2" label="2.　ほじらない" />
        <Radio name="Ques" value="3" label="3.　鼻くそが溜まらない" />
      </Radio.Group>
      <Center py="lg">
        <Button onClick={test001} color="cyan" radius="lg" >解答する</Button>
      </Center>
    </>
  );
}