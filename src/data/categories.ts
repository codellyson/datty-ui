import { CategoriesGroup, Category } from './types';

export const CATEGORIES: CategoriesGroup[] = [
  {
    name: 'Application UI',
    categories: [
      { slug: 'color-scheme', name: 'Color scheme toggles' },
      { slug: 'app-cards', name: 'Application cards' },
    ],
  }, {
      name: 'File Uploader',
      categories: [
        { slug: 'image-uploader', name: 'Image Uploader' },
      ],
    }];

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
