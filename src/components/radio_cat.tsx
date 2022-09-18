import { Radio,Button } from '@mantine/core'
import router from 'next/router';
import { useState } from 'react'

export default function RadioButton() {
  const [value, setValue] = useState('react')
  const test001 = () => {
    var answer = "2";
    if (value == answer) {
      console.log("正解");
      router.push("/catcorrect")
    }else{
        console.log("不正解");
          router.push("/catincorrect")
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
        <Radio value="1" label="1.　18歳" />
        <Radio value="2" label="2.　28歳" />
        <Radio value="3" label="3.　38歳" />
      </Radio.Group>
      <Button onClick={test001} color="cyan" radius="lg" >解答する</Button>
    </>
  );
}