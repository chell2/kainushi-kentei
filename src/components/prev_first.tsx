import {StarIcon, FaceSmileIcon } from '@heroicons/react/24/solid';
import {createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group} from '@mantine/core';
import More from '@/components/accordion'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Zen Maru Gothic, ${theme.fontFamily}`,
    fontWeight: 700,
    textAlign: 'center'
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

export default function GridPrev(props: any) {
  console.log(props.props.data)
  console.log(props.props.data[0])
  
  const {classes, theme} = useStyles();
  const Prev = props.props.data

  return (
    <>
      <Text>{Prev[0].question}</Text>
      <Text>{Prev[0].answer}</Text><br/>
      <Text>{Prev[1].question}</Text>
      <Text>{Prev[1].answer}</Text><br/>
      <Text>{Prev[2].question}</Text>
      <Text>{Prev[2].answer}</Text><br />
      <Text>{Prev[3].question}</Text>
      <Text>{Prev[3].answer}</Text><br />
      {/* <Text>{Prev5.question}</Text>
      <Text>{Prev6.question}</Text>
      <Text>{Prev7.question}</Text>
      <Text>{Prev8.question}</Text>
      <Text>{Prev9.question}</Text>
      <Text>{Prev10.question}</Text> */}
      <More />
    </>
  )
    
}