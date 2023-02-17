import type { ViewProps } from 'react-native';

type DefaultTypes = ViewProps & {
  count?: number;
  color?: string;
  spacing?: number;
  borderRadius?: number;
};

export type SkeletonProps<T = boolean> = T extends true
  ? DefaultTypes & {
      width: number;
      circle?: T;
      height?: 'Do not need to pass height for circle';
    }
  : DefaultTypes & {
      width?: number | string;
      height?: number | string;
      circle?: T;
    };
