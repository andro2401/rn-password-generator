import React, {useState} from 'react';
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
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwyz';
    const numberChars = '1234567890';
    const symbolChars = '!#"$%&/()=?@';

    if (upperCase) {
      characterList += upperCase;
    }
    if (lowerCase) {
      characterList += lowerCase;
    }
    if (numbers) {
      characterList += numbers;
    }
    if (symbols) {
      characterList += symbols;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  };
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };
  const resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

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
