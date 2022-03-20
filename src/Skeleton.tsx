import React, { FC, useEffect, useRef } from 'react';
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface SkeletonProps {
  count?: number;
  circle?: boolean;
  width?: number | string;
  height?: number | string;
  color?: string;
  borderRadius?: number | string;
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
  height,
  color = '#ebebeb',
  borderRadius = 4,
  spacing = 10,
  style,
  containerStyle,
}) => {
  let radius = borderRadius;
  const opacity = useRef(new Animated.Value(0.3));

  if (circle) {
    radius = '50%';
  }

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  const SkeletonView: FC<SkeletonViewProps> = ({ skStyle }) => (
    <Animated.View
      style={[
        {
          width: width,
          height: height,
          borderRadius: radius,
          backgroundColor: color,
          opacity: opacity.current,
        },
        style,
        skStyle,
      ]}
    />
  );

  if (!count || count === 1 || count === 0) {
    return <SkeletonView />;
  }
  return (
    <View style={[containerStyle, styles.container]}>
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
  container: {
    width: '100%',
  },
});
