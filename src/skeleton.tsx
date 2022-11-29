import React, { FC, useEffect, useMemo, useRef } from 'react';
import { Animated, StyleSheet, View, ViewStyle } from 'react-native';
import type { SkeletonProps, SkeletonViewProps } from './skeleton.type';

export const Skeleton = <T,>({
  count,
  circle,
  width = '100%',
  color = '#ebebeb',
  borderRadius = 4,
  spacing = 10,
  style,
  containerStyle,
  height = 14,
}: SkeletonProps<T>) => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  const appStyle = useMemo<ViewStyle>(() => {
    const opacityValue = opacity as unknown as number;
    let radius = borderRadius;
    let h: string | number = height;

    if (circle && typeof width === 'number') {
      radius = width / 2;
      h = width;
    }
    return {
      width,
      height: h,
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
