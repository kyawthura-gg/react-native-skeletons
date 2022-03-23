import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Skeleton } from '../../src';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Skeleton style={styles.mb10} />
        <Skeleton circle width={50} height={50} />
        <View style={styles.row}>
          <Skeleton circle width={50} height={50} />
          <Skeleton
            count={2}
            containerStyle={styles.ml14}
            spacing={10}
            color={'grey'}
          />
        </View>
        <Skeleton count={14} spacing={20} />
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
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    overflow: 'hidden',
  },
  ml14: {
    marginLeft: 14,
  },
  mb10: {
    marginBottom: 10,
  },
});
