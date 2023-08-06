import type { DimensionValue, ViewProps } from 'react-native';

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
