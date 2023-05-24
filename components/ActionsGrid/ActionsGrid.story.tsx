import { storiesOf } from '@storybook/react';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { ActionsGrid } from './ActionsGrid';
import attributes from './attributes.json';

storiesOf('ActionsGrid', module).add('ActionsGrid', () => (
  <StoryWrapper attributes={attributes} component={ActionsGrid} />
));
