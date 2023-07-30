import { storiesOf } from '@storybook/react';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';

import attributes from './attributes.json';
import { BorderedAvatarWithIndicator } from './BorderedAvatarWithIndicator';

storiesOf('BorderedAvatarWithIndicator', module).add('BorderedAvatarWithIndicator', () => (
  <StoryWrapper attributes={attributes} component={BorderedAvatarWithIndicator} />
));
