import { Radio } from '@mantine/core';

export default function RadioButton() {
  return (
    <Radio.Group
      // name="options"
      orientation="vertical"
      // label=""
      // description=""
      spacing="sm"
      offset="sm"
    >
      <Radio value="1" label="① 18歳" color="cyan" defaultChecked />
      <Radio value="2" label="② 28歳" color="cyan" />
      <Radio value="3" label="③ 38歳" color="cyan" />
    </Radio.Group>
  );
}