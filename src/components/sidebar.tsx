import { CATEGORIES } from '@/data';
import { NavLink, Navbar, ScrollArea } from '@mantine/core';
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
