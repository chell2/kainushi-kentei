import { library } from '@fortawesome/fontawesome-svg-core'
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Group, Center } from '@mantine/core'
import Link from 'next/link'
library.add(faCat, faDog)

const data = [
  { title: 'DOG', text: '犬の検定', icon: faDog, color: 'grape', link: '/dogquiz' },
  { title: 'CAT', text:'猫の検定', icon: faCat, color: 'indigo', link: '/catquiz' }
]

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    paddingBottom: 100,
  },

  title: {
    fontFamily: `Zen Maru Gothic, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.lg,
    height: 140,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    fontFamily: `Zen Maru Gothic, ${theme.fontFamily}`,
    boxShadow: `${theme.shadows.xs} !important`,

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));


export default function Grid() {
  const {classes, theme} = useStyles();

  const items = data.map((item) => (
    <Link key={item.link} href={item.link} passHref>
      <UnstyledButton component="a" key={item.title} className={classes.item} mt={8}>
        <FontAwesomeIcon icon={item.icon} size="3x" color={theme.colors[item.color][6]} />
        <Text size="sm" weight="bold" mt={6} mb={0}>
          {item.title}
        </Text>
        <Text size="xs">
          {item.text}
        </Text>
      </UnstyledButton>
    </Link>
  ));

  return (
    <Card withBorder radius="md" className={classes.card} >
      <Center>
        <Text className={classes.title}>今日の問題にチャレンジ!!!!</Text>
      </Center>
      <SimpleGrid cols={2}>
        {items}
      </SimpleGrid>
    </Card>
  );
}