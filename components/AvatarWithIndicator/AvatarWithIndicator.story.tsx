import { storiesOf } from '@storybook/react';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { AvatarWithIndicator } from './AvatarWithIndicator';
import attributes from './attributes.json';

storiesOf('SimpleAvatar', module).add('AvatarWithIndicator', () => (
  <StoryWrapper attributes={attributes} component={AvatarWithIndicator} />
));
