import { Accordion } from '@mantine/core';
import { useState } from 'react';
import GridPrevSecond from '@/components/gridprev2'

export default function Acc() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Accordion value={value} onChange={setValue}>
      <Accordion.Item value="item-1">
        <Accordion.Control>もっと見る</Accordion.Control>
        <Accordion.Panel><GridPrevSecond /></Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
