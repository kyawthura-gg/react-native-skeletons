import type { StyleProp, ViewStyle } from 'react-native';

type DefaultTypes = {
  count?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  spacing?: number;
  containerStyle?: StyleProp<ViewStyle>;
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

export interface SkeletonViewProps {
  skStyle?: StyleProp<ViewStyle>;
}
