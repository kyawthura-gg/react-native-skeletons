import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Skeleton } from 'react-native-skeletons';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Skeleton
          width={'100%'}
          height={14}
          count={4}
          containerStyle={styles.mb10}
        />
        <Skeleton circle width={50} height={50} />
        <View style={styles.row}>
          <Skeleton circle width={50} height={50} />
          <Skeleton
            width={'100%'}
            height={14}
            count={2}
            containerStyle={styles.ml14}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    flexGrow: 1,
    // position: 'relative',
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  ml14: {
    marginLeft: 14,
  },
  mb10: {
    marginBottom: 10,
  },
});
