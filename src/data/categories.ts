import { CategoriesGroup, Category } from './types';

export const CATEGORIES: CategoriesGroup[] = [
  {
    name: 'Application UI',
    categories: [
      { slug: 'color-scheme', name: 'Color scheme toggles' },
      { slug: 'app-cards', name: 'Application cards' },
      {
        slug: 'avatars',
        name: 'Avatars',
      },
    ],
  }, {
      name: 'Uploads',
      categories: [
        { slug: 'photo-uploader', name: 'Photo Uploader' },
        { slug: 'photo-uploader-with-cropper', name: 'Photo Uploader with Cropper' },
        { slug: 'photo-uploader-popup', name: 'Photo Uploader Popup' },
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
