import { faTwitter, faInstagram, faTiktok, faLine } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createStyles, Card, Image, ActionIcon, Group, Text, Avatar, Badge } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
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
  category: string;
  title: any;
  footer: string;
  author: {
    name: any;
    description: any;
    image: any;
  };
}

export default function ArticleCard({
  image,
  category,
  title,
  footer,
  author,
}: ArticleCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder p="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Badge>{category}</Badge>

      <Text weight={700} className={classes.title} mt="xs">
        {title}
      </Text>

      <Group mt="lg">
        <div>
          <Text weight={500}>
            答え：　{author.name}
          </Text>
          <Avatar src={author.image} radius="sm" />
          <Text size="xs" color="dimmed">
            解説：　{author.description}
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Text size="xs" color="dimmed">
            {footer}
          </Text>
          <a href="https://twitter.com/intent/tweet?button_hashtag=飼い主検定&ref_src=twsrc%5Etfw" className="twitter-hashtag-button" data-show-count="false">Tweet #LoveTwitter</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
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