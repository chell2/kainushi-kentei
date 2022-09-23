import { faTwitter, faInstagram, faTiktok, faLine } from '@fortawesome/free-brands-svg-icons'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createStyles, Card, ActionIcon, Group, Text, Badge, Grid, Center } from '@mantine/core'
import Image from 'next/image'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Zen Maru Gothic, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

interface ArticleCardProps {
  image: any;
  category: any;
  title: any;
  footer: string;
  commentary: {
    answer: any;
    description: any;
    image: any;
    icon: any;
  };
}

export default function CommentaryCard({
  image,
  category,
  title,
  footer,
  commentary,
}: ArticleCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder p="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image src={image} alt={title}/>
      </Card.Section>

      {/* <Badge>{category}</Badge> */}

      <Text weight={700} className={classes.title} mt="xs">
        {title}
      </Text>
      <Text weight={500} className={classes.title} mt="xs">
        答え：　{commentary.answer}
      </Text>

      <Group mt="lg" mb="lg">
        <div>
          <Grid>
            <Grid.Col span={3}>
              <Center mt="sm">
                <Image src={commentary.image} alt={title} width={64} height={64} />
              </Center>
            </Grid.Col>
            <Grid.Col span={9} pl="0" pr="xs">
              <Badge color="cyan"><FontAwesomeIcon icon={faPaperclip} /> 解説</Badge>
              <Text size="sm" color="dark.4">
                {commentary.description}
              </Text>
            </Grid.Col>
          </Grid>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Text size="xs" color="dimmed">
            {footer}
          </Text>
          <a href="https://twitter.com/intent/tweet?button_hashtag=飼い主検定&ref_src=twsrc%5Etfw" className="twitter-hashtag-button" data-show-count="false">Tweet #飼い主検定</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          <Group spacing={0}>
            <ActionIcon>
              <FontAwesomeIcon icon={faTwitter} />
            </ActionIcon>
            <ActionIcon>
              <FontAwesomeIcon icon={faInstagram} />
            </ActionIcon>
            <ActionIcon>
              <FontAwesomeIcon icon={faTiktok} />
            </ActionIcon>
            <ActionIcon>
              <FontAwesomeIcon icon={faLine} />
            </ActionIcon>
          </Group> 
        </Group>
      </Card.Section>
    </Card>
  );
}