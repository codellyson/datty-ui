import { Avatar, Stack } from '@mantine/core';

export function GroupedAvatar() {
  const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
  return (
    <Stack my="xl" align="center">
        {SIZES.map((size, index) => (
          <Avatar.Group key={size}>
            {SIZES.map(() => (
              <Avatar
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8
                fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100"
                size={SIZES[index]}
                radius={100}
              />
            ))
              }
          </Avatar.Group>
        ))}
    </Stack>
  );
}
