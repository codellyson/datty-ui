import { CategoriesGroup, Category } from './types';

export const CATEGORIES: CategoriesGroup[] = [
  {
    name: 'Application UI',
    categories: [
      // { slug: 'navbars', name: 'Navbars' },
      // { slug: 'headers', name: 'Headers' },
      // { slug: 'footers', name: 'Footers' },
      // { slug: 'grids', name: 'Grids' },
      // { slug: 'users', name: 'User info and controls' },
      // { slug: 'inputs', name: 'Inputs' },
      // { slug: 'buttons', name: 'Buttons' },
      { slug: 'color-scheme', name: 'Color scheme toggles' },
      // { slug: 'sliders', name: 'Sliders' },
      // { slug: 'dropzones', name: 'Dropzones' },
      { slug: 'app-cards', name: 'Application cards' },
      // { slug: 'stats', name: 'Stats' },
      // { slug: 'tables', name: 'Tables' },
      // { slug: 'dnd', name: "Drag'n'Drop" },
      // { slug: 'carousels', name: 'Carousels' },
    ],
  }];
  // {
  //   name: 'Page sections',
  //   categories: [
      // { slug: 'hero', name: 'Hero headers' },
      // { slug: 'features', name: 'Features section' },
      // { slug: 'authentication', name: 'Authentication' },
      // { slug: 'faq', name: 'Frequently asked questions' },
      // { slug: 'contact', name: 'Contact us section' },
      // { slug: 'error-pages', name: 'Error pages' },
      // { slug: 'banners', name: 'Banners' },
  //   ],
  // },
  // {
  //   name: 'Blog UI',
  //   categories: [
      // { slug: 'article-cards', name: 'Article cards' },
      // { slug: 'toc', name: 'Table of contents' },
      // { slug: 'comments', name: 'Comments' },
//     ],
//   },
// ];

export const CATEGORIES_SLUGS = CATEGORIES.reduce(
  (slugs: string[], group: CategoriesGroup) =>
    slugs.concat(group.categories.map((category) => category.slug)),
  []
);

export const ALL_CATEGORIES = CATEGORIES.reduce(
  (all: Category[], group: CategoriesGroup) =>
    all.concat(group.categories.map((category) => category)),
  []
);

export const getCategoryData = (category: string) =>
  ALL_CATEGORIES.find((cat) => cat.slug === category);
