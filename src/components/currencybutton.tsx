import React from 'react'
import { PropsWithChildren } from 'react'

import { View, Text, Image, StyleSheet} from 'react-native'


type currencyProps = PropsWithChildren<{
    name: String
    flag:string
    value:string
    symbol:string
}>

const CurrencyButton = (props: currencyProps) : JSX.Element =>  {
 return( 
 <View style ={style.buttonContainer} >
    <Text style={style.flag}> {props.flag}</Text>
    <Text style={style.country}> {props.name}</Text>
  </View>
 )
}
const style =  StyleSheet.create({
    buttonContainer :{
            alignItems:'center'
    },
    flag: {
        fontSize:28,
        color: 'white',
        marginBottom:4
    },
    country: {
        fontSize:14,
        color: 'red',
        marginBottom:4
    }

})
export default CurrencyButton