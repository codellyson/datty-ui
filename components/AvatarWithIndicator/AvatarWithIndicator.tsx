import { Avatar, Group, Indicator } from '@mantine/core';

export function AvatarWithIndicator() {
  const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
  return (
    <Group position="center" my="xl" spacing="md">
    {SIZES.map((size) => (
      <Indicator
        key={size}
        position="bottom-end"
        inline
        offset={size === 'xl' ? 10 : 5}
        withBorder
        size={size === 'xs' ? 4 : 12}
      >
        <Avatar
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100"
          size={size}
          radius={size === 'xl' ? 100 : 'xl'}

        />

      </Indicator>))}

    </Group>

  );
}
