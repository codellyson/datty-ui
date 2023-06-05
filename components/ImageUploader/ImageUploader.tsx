import {
  Group,
  Text,
  rem,
  Stack,
  createStyles,
  ActionIcon,
  Modal,
  Box,
  UnstyledButton,
  Image,
  Slider,
  Center,
  Button,
} from '@mantine/core';
import {
  IconUpload,
  IconPhoto,
  IconX,
  IconLock,
  IconRotateClockwise2,
  IconRotateClockwise,
  IconArrowsMoveHorizontal,
  IconArrowsMoveVertical,
} from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useEffect, useRef, useState } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const useStyles = createStyles((theme) => ({
  dropzone: {},
  dropzoneAccept: {},
  dropzoneReject: {},
  dropzoneIdle: {},
  imageOutputBox: {
    position: 'relative',
    width: '80px',
    height: '80px',
  },
  imageOutputDelete: {
    position: 'absolute',
    top: '0%',
    right: 0,
    zIndex: 1,
    padding: 5,
    borderRadius: 100,
  },
  actionButton: {
    '&.mantine-UnstyledButton-root': {
      borderRadius: theme.radius.md,
      '&:active': {
        transform: 'scale(1)',
      },
    },
  },
  actionButtonGroup: {
    '.mantine-UnstyledButton-root': {
      borderRadius: 0,
      '&:active': {
        transform: 'scale(1)',
      },
      '&:first-child': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: theme.radius.md,
        borderBottomLeftRadius: theme.radius.md,
      },
      '&:last-child': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: theme.radius.md,
        borderBottomRightRadius: theme.radius.md,
      },
      '&:not(:last-child)': {
        borderRight: 'none',
      },
      '&:not(:first-child)': {
        borderLeft: 'none',
      },
    },
  },
}));

type ImageUploaderProps = Partial<DropzoneProps> & {
  images: string[];
  limit: number;
};
interface PhotoEditorModalProps {
  opened: boolean;
  setOpened: (value: boolean) => void;
  images: string[];
  setImages(value:string[]): void;
  selectedImage: string | null ;
  setSelectedImage: (value: string) => void;
}
function PhotoEditorModal(props: PhotoEditorModalProps) {
  const { classes, theme } = useStyles();
  const [Zoom, setZoom] = useState(0);
  const [rotate, setRotate] = useState(0); // [1
  const cropperRef = useRef<ReactCropperElement>(null);
  const { selectedImage, setSelectedImage, opened, setOpened, images, setImages } = props;
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const cropper = cropperRef.current?.cropper;

  const [aspectRatio] = useState(cropper?.getImageData().aspectRatio);
  const [flipConfig, setFlipConfig] = useState({
    hasFlippedY: false,
    hasFlippedX: false,
  });

  function handleFlipX() {
    setFlipConfig({
      ...flipConfig,
      hasFlippedX: !flipConfig.hasFlippedX,
      hasFlippedY: false,
    });

    cropper?.scaleX(-cropper!.getData().scaleX || -1);
  }

  function handleFlipY() {
    setFlipConfig({
      ...flipConfig,
      hasFlippedY: !flipConfig.hasFlippedY,
      hasFlippedX: false,
    });
    cropper?.scaleY(-cropper!.getData().scaleY || -1);
  }
  const [movable, setMovable] = useState(false);
  const onCrop = () => {
    // console.log(cropper);
    const image = cropper?.getCroppedCanvas().toDataURL();
    setCroppedImage(image as string);
    // setSelectedImage(image);
  };

  useEffect(() => {
    cropperRef.current?.cropper.rotate(rotate);
  }, [rotate]);
  useEffect(() => {
    if (movable) {
      cropper?.setDragMode('move');
    } else {
      cropper?.setDragMode('crop');
    }
  }, [movable]);

  function handleSave() {
    // setImages(()=> images.find)
    const index = images.indexOf(selectedImage as string);
    if (index !== -1) {
      images[index] = String(croppedImage);
      setImages(images);
    }
    setSelectedImage(croppedImage as string);
  }

  const ASPECT_RATIO = {
    '16-9': 1.7777777777777777,
    '4-3': 1.3333333333333333,
    '1-1': 1,
    '2-3': 0.666666667,
    free: NaN,
  };

  return (
    <Modal
      opened={opened}
      title="Edit Image"
      onClose={() => setOpened(false)}
      size="xl"
      centered
      styles={{
        body: {
          padding: 0,
        },
      }}
    >
      {selectedImage && (
        <Stack spacing="md">
          <Center
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
            px="md"
          >
            <Cropper
              src={selectedImage}
              ref={cropperRef}
              aspectRatio={NaN}
              // allowTransparency={false}
              style={{ height: 400, width: '100%', background: '#000' }}
              rotateTo={rotate}
              // modal
              background={false}
              zoomTo={Zoom}
              crop={onCrop}
              movable

              // viewMode={1}
            />
          </Center>
          <Group position="apart" px="md">
            <ActionIcon
              variant={movable ? 'outline' : 'filled'}
              color={theme.primaryColor}
              size="lg"
              className={classes.actionButton}
              onClick={() => {
                setMovable(!movable);
              }}
            >
              <IconLock stroke={1.5} size="16" />
            </ActionIcon>
            <Group spacing={0} className={classes.actionButtonGroup} p={0}>
              <ActionIcon
                variant={aspectRatio === ASPECT_RATIO.free ? 'filled' : 'outline'}
                color={theme.primaryColor}
                size="lg"
                px="xl"
                onClick={() => {
                  console.log(cropper?.getImageData().aspectRatio);
                  cropper?.setAspectRatio(ASPECT_RATIO.free);
                }}
              >
                <Text size="sm"> Free</Text>
              </ActionIcon>
              <ActionIcon
                variant={aspectRatio === ASPECT_RATIO['4-3'] ? 'filled' : 'outline'}
                color={theme.primaryColor}
                size="lg"
                px="md"
                onClick={() => cropperRef.current?.cropper.setAspectRatio(ASPECT_RATIO['4-3'])}
              >
                <Text size="sm">4:3</Text>
              </ActionIcon>
              <ActionIcon
                variant={aspectRatio === ASPECT_RATIO['16-9'] ? 'filled' : 'outline'}
                color={theme.primaryColor}
                size="lg"
                px="md"
                onClick={() => cropper?.setAspectRatio(ASPECT_RATIO['16-9'])}
              >
                <Text size="sm"> 16:9</Text>
              </ActionIcon>
              <ActionIcon
                variant={aspectRatio === ASPECT_RATIO['1-1'] ? 'filled' : 'outline'}
                color={theme.primaryColor}
                size="lg"
                px="xl"
                onClick={() => cropper?.setAspectRatio(ASPECT_RATIO['1-1'])}
              >
                <Text size="sm"> 1:1 </Text>
              </ActionIcon>
            </Group>

            {/* Zoom Actions */}
            <Group spacing="xs">
              <ActionIcon
                size="sm"
                className={classes.actionButton}
                onClick={() => cropper?.zoom(-0.1)}
              >
                <IconPhoto stroke={1.5} />
              </ActionIcon>
              <div style={{ minWidth: '70px' }}>
                <Slider
                  min={0}
                  value={Zoom}
                  max={2}
                  step={0.1}
                  onChange={(value) => {
                    setZoom(value);
                  }}
                />
              </div>
              <ActionIcon
                size="lg"
                className={classes.actionButton}
                onClick={() => cropper?.zoom(Zoom + 0.1)}
              >
                <IconPhoto stroke={1.5} />
              </ActionIcon>
            </Group>
            {/* Rotate 360deg Actions */}
            <Group spacing="xs">
              <ActionIcon
                size="lg"
                className={classes.actionButton}
                onClick={() => cropper?.rotate(-90)}
              >
                <IconRotateClockwise2 stroke={1.5} />
              </ActionIcon>
              <div style={{ minWidth: '70px' }}>
                <Slider
                  min={0}
                  max={360}
                  step={1}
                  value={rotate}
                  onChange={(value) => {
                    setRotate(value);
                  }}
                />
              </div>
              <ActionIcon
                size="lg"
                className={classes.actionButton}
                onClick={() => cropper?.rotate(90)}
              >
                <IconRotateClockwise stroke={1.5} />
              </ActionIcon>
            </Group>
            {/* Rotate 180deg Actions */}
            <Group spacing={0} className={classes.actionButtonGroup}>
              <ActionIcon
                size="lg"
                onClick={handleFlipY}
                variant={flipConfig.hasFlippedY ? 'filled' : 'outline'}
                color={flipConfig.hasFlippedY ? theme.primaryColor : ''}
              >
                <IconArrowsMoveHorizontal stroke={1.5} />
              </ActionIcon>
              <ActionIcon
                size="lg"
                onClick={handleFlipX}
                variant={flipConfig.hasFlippedX ? 'filled' : 'outline'}
                color={flipConfig.hasFlippedX ? theme.primaryColor : ''}
              >
                <IconArrowsMoveVertical stroke={1.5} />
              </ActionIcon>
            </Group>
          </Group>
          <Group
            position="right"
            sx={{
              backgroundColor: '#ffffff11',
            }}
            p="md"
          >
            <Button
              variant="light"
              onClick={() => {
                cropper?.reset();
                setOpened(false);
              }}
            >
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </Group>
        </Stack>
      )}
      {!selectedImage && <Text align="center">No image selected</Text>}
    </Modal>
  );
}
export function generateBase64FromImage(imageFile: File | Blob) {
  const reader = new FileReader();
  const promise = new Promise((resolve, reject) => {
    reader.onload = (e: any) => resolve(e.target.result);
    reader.onerror = (err) => reject(err);
  });
  reader.readAsDataURL(imageFile);
  return promise;
}

export function ImageUploader(props: ImageUploaderProps) {
  const { classes, theme } = useStyles();
  const [opened, setOpened] = useState(false);
  const [images, setImages] = useState(props.images || []);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // [1
  const limit = props.limit || 5;

  function handleRemoveImage(image: string) {
    setImages((prev) => prev.filter((_image) => image !== _image));
  }

  return (
    <Stack>
      <Dropzone
        onDrop={(files) => {
          console.log(files);
          if (files.length > 0) {
            generateBase64FromImage(files[0]).then((res: any) => {
                setImages([...images, res]);
                setSelectedImage(res);
                setOpened(true);

              // clearTimeout(timdoe);
            });
          }
        }}
        onReject={(files) => {
          console.log(files);
        }}
        maxSize={3 * 1024 ** 2}
        maxFiles={limit}
        disabled={images.length >= limit}
        accept={IMAGE_MIME_TYPE}
        {...props}
      >
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: rem(220), pointerEvents: 'none' }}
        >
          <Dropzone.Accept>
            <IconUpload
              size="3.2rem"
              stroke={1.5}
              color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              size="3.2rem"
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size="3.2rem" stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              You can upload up to{' '}
              <Text span color={theme.colorScheme === 'dark' ? 'yellow' : 'blue'} weight="bolder">
                {limit - images.length}
              </Text>{' '}
              images
            </Text>
          </div>
        </Group>
      </Dropzone>
      <Group spacing="md">
        {images.map((image, index) => (
          <Box key={index} className={classes.imageOutputBox}>
            <ActionIcon
              className={classes.imageOutputDelete}
              variant="filled"
              size="sm"
              onClick={() => handleRemoveImage(image)}
            >
              <IconX stroke={1.5} />
            </ActionIcon>
            <UnstyledButton
              onClick={() => {
                setSelectedImage(image);
                setOpened(true);
              }}
              role="button"
              tabIndex={0}
              arai-label="image-box"
            >
              <Image key={image} src={image} p="sm" radius="sm" fit="contain" />
            </UnstyledButton>
          </Box>
        ))}
      </Group>
      <PhotoEditorModal
        opened={opened}
        setOpened={setOpened}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        images={images}
        setImages={setImages}
      />
    </Stack>
  );
}
