import { Avatar, Group, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  avatar: {
    border: `4px solid ${theme.colors[theme.primaryColor][6]}`,
  },
}));

export function BorderedAvatar() {
  const { classes } = useStyles();
  return (
    <Group position="center" my="xl" spacing="md">
    <Avatar
      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100"
      size="xs"
      radius="xl"
      styles={{
      root: {
        border: '2px solid #000',
      },
    }}
      className={classes.avatar}
    />
    <Avatar src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" size="sm" radius="xl" className={classes.avatar} />
    <Avatar src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" size="md" radius="xl" className={classes.avatar} />
    <Avatar src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" size="lg" radius="xl" className={classes.avatar} />
    <Avatar src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" size="xl" radius={100} className={classes.avatar} />
    </Group>
  );
}
