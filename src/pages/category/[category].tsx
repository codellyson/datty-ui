import { CategoryPage } from '@/components/CategoryPage/CategoryPage';
import { CATEGORIES_SLUGS, Category, getCategoryData } from '@/data';
import { getAllComponents, getComponentsByCategory } from '@/data/component';
import { GetStaticPaths, GetStaticProps } from 'next';

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: CATEGORIES_SLUGS.map((slug) => ({ params: { category: slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<
  { category: Category | undefined },
  { category: string }
> = (context) => {
  console.log(getComponentsByCategory()[context!.params!.category]);

  return {
    props: {
      category: getCategoryData(context!.params!.category),
      components: getComponentsByCategory()[context!.params!.category],
      allComponents: getAllComponents(),
    },
  };
};
