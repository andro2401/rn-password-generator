import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// FORM VALIDATION
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be minimum of 4 characters!')
    .max(15, 'should be less than 15 characters!')
    .required('Length is required'),
});

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <Text style={styles.mainTitle}>Password generator app</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginHorizontal: 'auto',
  },
});
export default App;
