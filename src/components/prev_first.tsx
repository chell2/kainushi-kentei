import { faCat, faDog, faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Group } from '@mantine/core'
import { useRouter } from 'next/router'

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
    borderRadius: theme.radius.lg,
    height: 90,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    boxShadow: `${theme.shadows.xs} !important`,

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}))

export default function PrevFirst(props: any) {
  const {classes, theme} = useStyles()
  const router = useRouter()
  const array = props.props.data
  const firstHalf = array.slice(0, 5)

  const firstPrevItems = firstHalf.map((data: any) => (
    <UnstyledButton key={data.id} className={classes.item} onClick={() => router.push(
      {
        pathname: "/dogprev",
        query: data
      },"preview"
    )}>
      <Group position="apart">
        <Text mb={5}>{
          (() => {
            if (data.TableName == "dog")
              return <FontAwesomeIcon icon={faDog} size="lg" color={theme.colors["grape"][6]} />
            else if (data.TableName == "cat")
              return <FontAwesomeIcon icon={faCat} size="lg" color={theme.colors["indigo"][6]} />
            else return <FontAwesomeIcon icon={faPaw} size="lg" color={theme.colors["gray"][6]} />
          })()}
        </Text>
        <Text size="sm" weight="bold" mb={5} className={classes.title}>
          {
            (() => {
                if (10 >= (Math.round(data.correct_count / data.accesses_count * 1000))/10)
                  return <p>難易度 🔥🔥🔥🔥🔥</p>
                else if (20 >= (Math.round(data.correct_count / data.accesses_count * 1000))/10)
                  return <p>難易度 🔥🔥🔥🔥</p>
                else if (40 >= (Math.round(data.correct_count / data.accesses_count * 1000))/10)
                  return <p>難易度 🔥🔥🔥</p>
                else if (60 >= (Math.round(data.correct_count / data.accesses_count * 1000))/10)
                  return <p>難易度 🔥🔥</p>
                else if (100 >= (Math.round(data.correct_count / data.accesses_count * 1000))/10)
                  return <p>難易度 🔥</p>
              else return <p>難易度 🔥🔥🔥🔥🔥</p>
            })()
          }
        </Text>
        <Text underline size="xs" color="dimmed" mb={4}>
          正解率 {(data.correct_count / data.accesses_count * 100)
            ? (Math.round(data.correct_count / data.accesses_count * 1000))/10
            : '0' }%
        </Text>
      </Group>
      <Text size="sm" mt={1} mb={3}>
        {data.question}
      </Text>
    </UnstyledButton>
  ))

  return (
    <>
      <Card withBorder radius="md" className={classes.card}>
        <Text className={classes.title}>超難問を解いてみよう!!!!</Text>
        <SimpleGrid cols={1} mt="md">
          {firstPrevItems} 
        </SimpleGrid>
      </Card>
    </>
  )
}

function elseif(arg0: boolean) {
  throw new Error('Function not implemented.')
}
