import { Avatar, Box, Flex, Group, Text } from '@mantine/core';

export function AvatarProfile() {
  const SIZES = ['sm', 'md', 'lg', 'xl'];

  return (
    <Box py="xl">
     <div>
      <Text size="xl" weight="bolder" align="center" color="dimmed">
        Profile with Round Avatar
      </Text>
      <Flex my="xl" gap="md" justify="center" align="center">
      {SIZES.map((size) => (
        <Group key={size} spacing="sm">
          <Avatar
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100"
            size={size}
            radius={100}
          />
          <div>
            <Text size={size} weight="bolder">John Doe</Text>
            <Text size="sm">johndoe@dattyui.com</Text>
          </div>
        </Group>
      ))}
      </Flex>
     </div>

     <div>
      <Text size="xl" weight="bolder" align="center" color="dimmed">
        Profile with Square Avatar
      </Text>
      <Flex my="xl" gap="md" justify="center" align="center">
      {SIZES.map((size) => (
        <Group key={size} spacing="sm">
          <Avatar
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100"
            size={size}

          />
          <div>
            <Text size={size} weight="bolder">John Doe</Text>
            <Text size="sm">johndoe@dattyui.com</Text>
          </div>
        </Group>
      ))}
      </Flex>
     </div>

    </Box>
  );
}
