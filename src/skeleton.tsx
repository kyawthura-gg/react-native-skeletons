import React, { useEffect, useMemo, useRef } from 'react';
import {
  Animated,
  type ViewStyle,
  type DimensionValue,
  type ViewProps,
} from 'react-native';

type DefaultTypes = ViewProps & {
  count?: number;
  color?: string;
  spacing?: number;
  borderRadius?: number;
};

export type SkeletonProps<T = boolean> = DefaultTypes & {
  width?: T extends true ? number : DimensionValue;
  circle?: T;
  height?: T extends true ? never : DimensionValue;
};

export const Skeleton = <T,>({
  count,
  circle,
  width,
  color = '#ebebeb',
  borderRadius = 4,
  spacing = 10,
  style,
  height,
  ...rest
}: SkeletonProps<T>): JSX.Element => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  const appStyle = useMemo<ViewStyle>(() => {
    const opacityValue = opacity as unknown as number;
    let radius = borderRadius;
    let h = height ?? 14;

    if (__DEV__ && height && circle && width !== height) {
      console.warn('width and height props must be equal when using as circle');
    }

    if (circle && typeof width === 'number') {
      radius = width / 2;
      h = width;
    }

    return {
      width: width ?? '100%',
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

  if (count && count > 1) {
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
  }
  return <Animated.View style={[appStyle, style]} {...rest} />;
};
