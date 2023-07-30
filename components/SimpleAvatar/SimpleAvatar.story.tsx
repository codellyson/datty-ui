import { storiesOf } from '@storybook/react';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { SimpleAvatar } from './SimpleAvatar';
import attributes from './attributes.json';

storiesOf('SimpleAvatar', module).add('SimpleAvatar', () => (
  <StoryWrapper attributes={attributes} component={SimpleAvatar} />
));
