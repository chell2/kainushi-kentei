import { Radio } from '@mantine/core'
import { useState } from 'react'

export default function RadioButton() {
  const [value, setValue] = useState('react')
  return (
    <Radio.Group
      value={value}
      onChange={setValue}
      // name="options"
      orientation="vertical"
      // label=""
      // description=""
      spacing="sm"
      offset="sm"
    >
      <Radio value="1" label="1.　ほじる" color="cyan" defaultChecked />
      <Radio value="2" label="2.　ほじらない" color="cyan" />
      <Radio value="3" label="3.　鼻くそが溜まらない" color="cyan" />
    </Radio.Group>
  );
}