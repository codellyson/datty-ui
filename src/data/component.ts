import fs from 'fs';
import path from 'path';

function convertCase(string: string) {
  const result = string
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .split(' ');

  return result.join('-');
}

interface ComponentInfo {
  component: string;
  slug: string;
  code: string;
  attributes: any;
}

export function getAllComponents(): ComponentInfo[] {
  const rootFolder = path.join('components');
  // get paths
  const paths = fs.readdirSync(rootFolder);

  return paths
    .map((componentName) => {
      const componentDirectory = path.join(rootFolder, componentName);
      const componentPath = path.join(componentDirectory, `${componentName}.tsx`);
      const compoentAttributes = path.join(componentDirectory, 'attributes.json');
      // const componentCode = fs.readFileSync(componentPath, 'utf8');
      // const attributes = fs.readFileSync(compoentAttributes, 'utf8');
      if (fs.lstatSync(componentDirectory).isDirectory()) {
        const componentCode = fs.readFileSync(componentPath, 'utf8');
        const attributes = JSON.parse(fs.readFileSync(compoentAttributes, 'utf8'));

        return {
          component: componentName,
          slug: convertCase(componentName),
          code: componentCode,
          attributes,
        };
      }
      return null;
    })
    .filter((component) => component) as ComponentInfo[];
}

export function getComponentsByCategory() {
  return getAllComponents().reduce<Record<string, ComponentInfo[]>>((acc, currentComponent) => {
    const { category } = currentComponent.attributes;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(currentComponent);
    return acc;
  }, {});
}

  export function countComponentsByCategory() {
    return getAllComponents().reduce<Record<string, number>>((acc, component) => {
      if (!(component.attributes.category in acc)) {
        acc[component.attributes.category] = 0;
      }
      acc[component.attributes.category] += 1;
      return acc;
    }, {});
  }
