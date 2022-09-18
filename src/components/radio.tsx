import { Radio,Button } from '@mantine/core'
import router from 'next/router';
import { useState } from 'react'

export default function RadioButton() {
  const [value, setValue] = useState('react')
  const test001 = () => {
    var answer = "react";
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
        name=""
        label=""
        description=""
        withAsterisk
      >
        <Radio value="1" label="1.　ほじる" />
        <Radio value="2" label="2.　ほじらない" />
        <Radio value="3" label="3.　鼻くそが溜まらない" />
      </Radio.Group>
      <Button onClick={test001} color="cyan" radius="lg" >解答する</Button>
    </>
  );
}