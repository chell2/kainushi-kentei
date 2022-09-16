import { library } from '@fortawesome/fontawesome-svg-core'
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StarIcon, FaceSmileIcon } from '@heroicons/react/24/solid';
import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group, Container,Center,Button } from '@mantine/core';
import Link from 'next/link'
// import Button from '@/components/button'
import RadioButton from '@/components/radio'
library.add(faCat, faDog)


const data = [
  {title: 'DOG', text: '犬の検定', quiz:'犬も鼻くそをほじる？', icon: faDog, color: 'grape', link: '/dogquiz'}
]

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Zen Maru Gothic, ${theme.fontFamily}`,
    fontWeight: 700
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
    boxShadow: `${theme.shadows.xs} !important`

    // '&:hover': {
    //   boxShadow: `${theme.shadows.md} !important`,
    //   transform: 'scale(1.05)',
    // },
  },
}));


export default function GridNewDog() {
  const {classes, theme} = useStyles();

  const items = data.map((item) => (
      <Card key={item.title} className={classes.item}>
      <Text size="md" weight="bold" mt={1}>
        <p className="font-title">{item.quiz}</p>
        </Text>
      </Card>
  ));

  return (
    <>
      <Card withBorder radius="md" className={classes.card}>
        <Text className={classes.title}>犬の検定</Text>
        <SimpleGrid cols={1} mt="md">
          {items}
        </SimpleGrid>
        <Container size="xs" px="xs">
          <RadioButton />
          <Center py="lg">
            <Button color="cyan" radius="lg">解答する</Button>
          </Center>
        </Container>
      </Card>
      <Link href="/catquiz">
        <a> ▷ 猫の検定へ</a>
      </Link>
    </>
  );
}