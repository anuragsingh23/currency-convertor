
import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import { currencyByRupee } from './constants';
import  CurrencyButton  from './components/currencybutton'
import Snackbar from 'react-native-snackbar';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {

  const [inputValue,setInputValue] = useState('')
  const [resultValue,setResultValue] = useState('')
  const [targetCurrency,setTargetCurrency] = useState('')

  const OnClick = (targetValue:currency) => {
    if(!targetValue){
      return Snackbar.show({
        text:"Enter value to convert",
        backgroundColor:'#EA7773',
        textColor:'#000000',
      })
    }

    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue  = inputAmount * targetValue.value
      const result = `${targetValue.flag} ${convertedValue.toFixed(2)} 💰`
      setResultValue(result)
      setTargetCurrency(targetValue.name)

      } else {
        return Snackbar.show({
          text:"please enter a number ",
          backgroundColor:'#F4BE2C',
          textColor:'#000000',
        })
      }

  }



  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex:1}}>
     <View style = {styles.container} >
      <View style= {styles.topContainer}>
        { resultValue &&  <Text style= {styles.resultTxt}>
      {resultValue}
     </Text>}
     
      <View style ={styles.rupeesContainer}>
      <Text style={styles.rupee}> ₹ </Text>
      <TextInput style= {styles.inputAmountField}
      maxLength={14}
      value={inputValue}
      clearButtonMode='always'
      onChangeText={setInputValue}
      keyboardType='number-pad'
      placeholder='Enter number in ruppes'/>
      </View>
      </View>
      <View style={styles.bottomContainer}>
          <FlatList
          numColumns={2}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable
            style = {[
              styles.button,
              targetCurrency === item.name && styles.selected
            ]}
            onPress={() => OnClick(item)}
            >
              <CurrencyButton{...item}/>
            </Pressable>
          )}
          />
      </View>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
     fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
