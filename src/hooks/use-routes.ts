import { useRouter } from 'next/router';

import ElementObject from '@/data/routes/element.json';
import GetStartedObj from '@/data/routes/getting-started.json';
import PageSectionObj from '@/data/routes/page-sections.json';

export const componentsObj = {
  ...ElementObject,
  ...PageSectionObj,
};

export const categoriesObj = {
  ...GetStartedObj,
  ...componentsObj,
};

export const useRoutes = () => {
  const router = useRouter();
  const { category, section } = router.query;

  return Object.keys(categoriesObj).reduce((acc:any, nxt:string) => {
    const { title: catTitle, prefix, sections } = categoriesObj[nxt];

    const routeCategory: any = { title: catTitle, prefix };
    const fullSections = sections;
    const routeSections = Object.keys(fullSections).reduce((racc:any, rnxt:string) => {
      const fullSection = fullSections[rnxt];
      const { title: secTitle, route, ...secProps } = fullSection;
      const url = prefix + route;

      const components = !['getting-started'].includes(nxt)
        ? secProps.components?.reduce((comps: any, comp: any) => {
            comps.push({
              ...comp,
              url: `${url}#${comp.preview}`,
            });
            return comps;
          }, [])
        : [];
      const active =
        router.pathname === url ||
        (category === prefix.replace(/docs|[/]/g, '') && section === route);
      racc.push({
        ...secProps,
        title: secTitle,
        components,
        url,
        active,
        route,
      } as any);
      return racc;
    }, []);
    routeCategory.sections = routeSections;
    acc.push(routeCategory as any);
    return acc;
  }, []);
};
