import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Skeleton } from 'react-native-skeletons';

const ProfileCardSkeleton = () => (
  <>
    <View style={[styles.row, styles.mt10]}>
      <Skeleton circle width={60} />
      <View style={[styles.flexG, styles.ml14]}>
        <Skeleton width={'60%'} />
        <Skeleton style={styles.mt10} width={'90%'} />
      </View>
    </View>
    <Skeleton count={4} containerStyle={styles.mt10} />
  </>
);

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Skeleton height={150} />
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <ProfileCardSkeleton key={index} />
          ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  ml14: {
    marginLeft: 14,
  },
  mb10: {
    marginBottom: 10,
  },
  flexG: {
    flexGrow: 1,
  },
  mt10: {
    marginTop: 10,
  },
  mt20: {
    marginTop: 20,
  },
});
