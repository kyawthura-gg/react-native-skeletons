import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, type ViewStyle } from 'react-native';
import type { SkeletonProps } from './skeleton.type';

export const Skeleton = <T,>({
  count,
  circle,
  width = '100%',
  color = '#ebebeb',
  borderRadius = 4,
  spacing = 10,
  style,
  height,
  ...rest
}: SkeletonProps<T>) => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  const appStyle = useMemo<ViewStyle>(() => {
    const opacityValue = opacity as unknown as number;
    let radius = borderRadius;
    let h: string | number = height ?? 14;

    if (__DEV__ && height && circle && width !== height) {
      console.warn('width and height props must be equal when using as circle');
    }

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
    const loopAnimate = Animated.loop(
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
    );
    loopAnimate.start();
    return () => loopAnimate.stop();
  }, [opacity]);

  if (!count || count === 1 || count === 0) {
    return <Animated.View style={[appStyle, style]} {...rest} />;
  }
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Animated.View
          key={i}
          style={[
            { marginBottom: i === count - 1 ? undefined : spacing },
            appStyle,
            style,
          ]}
          {...rest}
        />
      ))}
    </>
  );
};
