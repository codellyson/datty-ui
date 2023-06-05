import { storiesOf } from '@storybook/react';
import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
import { ImageUploader } from './ImageUploader';
import attributes from './attributes.json';

storiesOf('File Uploader', module).add('ImageUploader', () => (
  <StoryWrapper attributes={attributes} component={ImageUploader} />
));
