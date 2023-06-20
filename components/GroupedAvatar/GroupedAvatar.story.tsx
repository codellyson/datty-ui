import { storiesOf } from '@storybook/react';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { GroupedAvatar } from './GroupedAvatar';
import attributes from './attributes.json';

storiesOf('GroupedAvatar', module).add('GroupedAvatar', () => (
  <StoryWrapper attributes={attributes} component={GroupedAvatar} />
));
