import { storiesOf } from '@storybook/react';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { AvatarProfile } from './AvatarProfile';
import attributes from './attributes.json';

storiesOf('AvatarProfile', module).add('AvatarProfile', () => (
  <StoryWrapper attributes={attributes} component={AvatarProfile} />
));
