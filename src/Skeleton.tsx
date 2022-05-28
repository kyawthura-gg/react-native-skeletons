import React, { FC, useEffect, useMemo, useRef } from 'react';
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface SkeletonProps {
  count?: number;
  circle?: boolean;
  width?: number | string;
  height?: number | string;
  color?: string;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
  spacing?: number;
  containerStyle?: StyleProp<ViewStyle>;
}

interface SkeletonViewProps {
  skStyle?: StyleProp<ViewStyle>;
}

export const Skeleton: FC<SkeletonProps> = ({
  count,
  circle,
  width = '100%',
  height = 14,
  color = '#ebebeb',
  borderRadius = 4,
  spacing = 10,
  style,
  containerStyle,
}) => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  const appStyle = useMemo<ViewStyle>(() => {
    const opacityValue = opacity as unknown as number;
    let radius = borderRadius;
    if (circle) {
      if (typeof width !== 'number') {
        console.warn('Circle width need to be number value.');
      } else if (width !== height) {
        console.warn('Circle width and height need to be the same value');
      } else {
        radius = width / 2;
      }
    }
    return {
      width: width,
      height: height,
      borderRadius: radius,
      backgroundColor: color,
      opacity: opacityValue,
    };
  }, [borderRadius, circle, color, height, opacity, width]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  const SkeletonView: FC<SkeletonViewProps> = ({ skStyle }) => (
    <Animated.View style={[appStyle, style, skStyle]} />
  );

  if (!count || count === 1 || count === 0) {
    return <SkeletonView />;
  }
  return (
    <View style={[containerStyle, styles.wFull]}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonView
          key={i}
          skStyle={{ marginBottom: i === count - 1 ? undefined : spacing }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wFull: {
    width: '100%',
    flexShrink: 1,
  },
});
