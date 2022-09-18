import { library } from '@fortawesome/fontawesome-svg-core'
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons'
import { createStyles, Card, Text, SimpleGrid, Container, Center } from '@mantine/core';
import RadioButton from '@/components/radio_cat'
library.add(faCat, faDog)

const data = [
  {title: 'CAT', text: 'Zen Maru Gothic', quiz:'猫の長寿ギネス記録は何歳？', icon: faCat, color: 'indigo', link: '/catquiz'}
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
  },
}));


export default function GridNewCat() {
  const {classes} = useStyles();

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
        <Text className={classes.title}>猫の検定</Text>
        <SimpleGrid cols={1} mt="md">
          {items}
        </SimpleGrid>
        <Container size="xs" px="xs">
          <RadioButton />
          <Center py="lg">
        </Center>
      </Container>
      </Card>
    </>
  );
}