import { CATEGORIES } from '@/data';
import { useRoutes } from '@/hooks/use-routes';
import { NavLink, Navbar, ScrollArea, Stack, Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Sidebar = () => {
  const router = useRouter();
  return (
    <Navbar height={1000} p="xs" width={{ base: 300 }}>
      <Navbar.Section mt="xs">{/* Header with logo */}</Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {/* scrollable content here */}
        <NavLink
          label="Getting Started"
          active={router.pathname.startsWith('/getting-started')}
          opened={router.pathname.startsWith('/getting-started')}
        >
          <NavLink
            component={Link}
            href="/getting-started/installation"
            label="Installation"

          />
          <NavLink component={Link} href="/getting-started/configuration" label="Configuration" />
        </NavLink>
        {
          CATEGORIES.map((category) => (
            <NavLink
              key={category.name}
              label={category.name}
              // active={router.pathname.startsWith(`/category/${category.slug}`)}
              // opened={router.pathname.startsWith(`/category/${category.slug}`)}
            >
                {
                  category.categories.map((subCategory) => (
                    <NavLink
                      key={subCategory.name}
                      component={Link}
                      href={`/category/${subCategory.slug}`}
                      label={subCategory.name}
                      active={router.pathname.startsWith(`/category/${subCategory.slug}`)}
                    />

                  ))

                }
            </NavLink>

          ))
        }

      </Navbar.Section>

    </Navbar>
  );
};

export type SidebarProps = {
  section: any;
};
const SideBarSection = ({ section }: SidebarProps) => {
  console.log(section);
  return section.components.length > 0 ? (
    <NavLink rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />} label={section.title}>
      {section.components.map((component: any) => (
        <NavLink
          component={Link}
          key={component.title}
          label={component.name}
          href={component.url.toString()}
          active={component.active}
        />
      ))}
    </NavLink>
  ) : (
    <NavLink
      variant="outline"
      mt="md"
      mb="xs"
      component={Link}
      px={0}
      href={section.url}
      active={section.active}
      styles={{
        label: {
          fontWeight: section.active ? 'bold' : 'normal',
          textTransform: 'capitalize',
        },
      }}
      label={section.title}
    />
  );
};

const SidebarContent = () => {
  const routes = useRoutes();
  // console.log(routes);

  return (
    <Stack>
      {routes.map((category, cid) => (
        <div key={cid}>
          <Text
            size="sm"
            weight="bolder"
            mt="md"
            mb="xs"
            // href={section.url}
            style={{}}
            transform="uppercase"
          >
            {category.title}
          </Text>
          {category.sections.map((section) => (
            <SideBarSection section={section} key={section.title} />
          ))}
        </div>
      ))}
    </Stack>
  );
};
