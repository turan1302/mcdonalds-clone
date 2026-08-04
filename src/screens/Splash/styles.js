import { StyleSheet } from 'react-native';

const IMAGE_ASPECT_RATIO = 164 / 342;

export default (width) => {
  const imageWidth = width * 0.55;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      alignItems: 'center',
    },
    image: {
      width: imageWidth,
      height: imageWidth * IMAGE_ASPECT_RATIO,
    },
  });
};
