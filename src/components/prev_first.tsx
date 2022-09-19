import {createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group} from '@mantine/core';
import Link from 'next/link'
import {useRouter} from 'next/router';
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

export default function PrevFirst(props: any) {
  const {classes, theme} = useStyles();
  const Prev = props.props.data
  const router = useRouter()
  
  const firstPrevItems = Prev.map((data: any) => (
    <UnstyledButton key={data.id} className={classes.item} onClick={() => router.push("/quiz")}>
      <Group position="apart">
        <Text size="md" weight="bold" mt={1}>
          難易度
          {
            (() => {
                if (10 >= (data.correct_count / data.accesses_count * 100))
                  return <p>🔥🔥🔥🔥🔥</p>
                else if (20 >= (data.correct_count / data.accesses_count * 100))
                  return <p>🔥🔥🔥🔥</p>
                else if (40 >= (data.correct_count / data.accesses_count * 100))
                  return <p>🔥🔥🔥</p>
                else if (60 >= (data.correct_count / data.accesses_count * 100))
                  return <p>🔥🔥</p>
                else if (100 >= (data.correct_count / data.accesses_count * 100))
                  return <p>🔥</p>
              else return <p>🔥🔥🔥🔥🔥</p>
            })()
          }
        </Text>
        <Anchor size="xs" color="dimmed">
          正解率 {(data.correct_count / data.accesses_count * 100)
            ? (data.correct_count / data.accesses_count * 100)
            : '0' }%
        </Anchor>
      </Group>
      {/* <data.icon color={theme.colors[item.color][4]}  /> */}
      <Text size="sm" mt={0} mb={4}>
        {data.question}
      </Text>
    </UnstyledButton>
  ));

  return (
    <>
      <Card withBorder radius="md" className={classes.card}>
        <Text className={classes.title}>難問にチャレンジ💪</Text>
        <SimpleGrid cols={1} mt="md">
          {firstPrevItems} 
        </SimpleGrid>
      </Card>
      <More />
    </>
  )
    
}

function elseif(arg0: boolean) {
  throw new Error('Function not implemented.');
}
