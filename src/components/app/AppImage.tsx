import React, {useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import FastImage, {FastImageProps, Source, ResizeMode} from 'react-native-fast-image';

interface AppImageProps extends Omit<FastImageProps, 'source'> {
  source: Source;
  type?: 'net' | 'asset';
  resizeMode?: ResizeMode;
}

const AppImageComponent: React.FC<AppImageProps> = ({
  source,
  type = 'net',
  style,
  resizeMode = 'cover',
  ...props
}) => {
  const [loading, setLoading] = useState(type === 'net');
  const [error, setError] = useState(false);

  // 判断是否为网络图片
  const isNetImage = type === 'net' || (typeof source === 'object' && 'uri' in source);

  const handleLoadStart = () => {
    if (isNetImage) {
      setLoading(true);
    }
  };

  const handleLoadEnd = () => {
    if (isNetImage) {
      setLoading(false);
    }
  };

  const handleError = () => {
    if (isNetImage) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <FastImage
        source={source}
        style={[styles.image, error && styles.errorImage]}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        resizeMode={resizeMode}
        {...props}
      />
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#999"/>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  errorImage: {
    // opacity: 0.5,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});

// 创建静态组件
const AppImage = Object.assign(AppImageComponent, {
  Net: (props: Omit<AppImageProps, 'type'>) => <AppImageComponent type="net" {...props} />,
  Asset: (props: Omit<AppImageProps, 'type'>) => <AppImageComponent type="asset" {...props} />
});

export default AppImage;