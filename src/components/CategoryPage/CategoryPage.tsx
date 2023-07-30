import { Container } from '@mantine/core';
import Head from 'next/head';
import { Category, UiComponent } from '../../data';
import { CategoryHeader } from '../CategoryHeader/CategoryHeader';
import { ComponentCanvas } from '../ComponentCanvas/ComponentCanvas';

interface CategoryPageProps {
  category: Category;
  components: UiComponent[];
}

export function CategoryPage({ category, components }: CategoryPageProps) {
  const canvases = components.map((component, index) => (
    <ComponentCanvas {...component} key={component.slug} zIndex={components.length - index} />
  ));

  return (
    <>
      <Head>
        <title>{`${category.name} | Datty UI`}</title>
      </Head>
      <Container size="xl" mt={50}>
        <CategoryHeader category={category} />
        {canvases}
      </Container>
    </>
  );
}
