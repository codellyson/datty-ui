import { storiesOf } from '@storybook/react';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { BorderedAvatar } from './BorderedAvatar';
import attributes from './attributes.json';

storiesOf('SimpleAvatar', module).add('BorderedAvatar', () => (
  <StoryWrapper attributes={attributes} component={BorderedAvatar} />
));
