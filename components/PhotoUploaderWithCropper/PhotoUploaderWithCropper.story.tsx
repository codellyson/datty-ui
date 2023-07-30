import { storiesOf } from '@storybook/react';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { PhotoUploaderWithCropper } from './PhotoUploaderWithCropper';
import attributes from './attributes.json';

storiesOf('File Uploader', module).add('PhotoUploaderWithCropper', () => (
  <StoryWrapper attributes={attributes} component={PhotoUploaderWithCropper} />
));
