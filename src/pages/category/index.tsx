import { Layout } from '@/components/layout';
import { getAllComponents } from '@/data/component';
import { GetStaticProps } from 'next';

export default function CategoryHomePage({ allComponents }) {
  console.log(allComponents);
  return (
    <Layout withSidebar withFooter>
      <h1>CategoryHomePage</h1>
      <pre>{JSON.stringify(allComponents, null, 2)}</pre>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => ({
  props: {
    // componentsCountByCategory: countComponentsByCategory(),
    allComponents: getAllComponents(),
  },
});
