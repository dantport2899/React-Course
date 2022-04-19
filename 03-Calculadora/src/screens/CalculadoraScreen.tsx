import React from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { UseCalculadora } from '../hooks/UseCalculadora';

export const CalculadoraScreen = () => {
    
    const {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btndelete,
        armarNumero,
        btndividir,
        btnmultiplicar,
        btnrestar,
        btnsumar,
        calcular
    } = UseCalculadora();

  return (
    <View style={styles.calculadoracontainer}>
        {
            (numeroAnterior!=='0') && (
                <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
            )
        }
        <Text 
            style={styles.resultado}
            // hacer el texto auto ajustable
            numberOfLines={1}
            adjustsFontSizeToFit
        >{numero}</Text>

        {/* Fila de Botones */}
        <View style={styles.fila}>
            <BotonCalc texto="C" color="#9B9B9B" action={limpiar}></BotonCalc>
            <BotonCalc texto="+/-" color="#9B9B9B" action={positivoNegativo}></BotonCalc>
            <BotonCalc texto="del" color="#9B9B9B" action={btndelete}></BotonCalc>
            <BotonCalc texto="÷" color="#FF9427" action={btndividir}></BotonCalc>

            {/* #2D2D2D gris oscuro */}
            {/* #FF9427 NARANJA */}
        </View>

        {/* Fila de Botones */}
        <View style={styles.fila}>
            <BotonCalc texto="7" action={armarNumero}></BotonCalc>
            <BotonCalc texto="8" action={armarNumero}></BotonCalc>
            <BotonCalc texto="9" action={armarNumero}></BotonCalc>
            <BotonCalc texto="x" color="#FF9427" action={btnmultiplicar}></BotonCalc>

            {/* #2D2D2D gris oscuro */}
            {/* #FF9427 NARANJA */}
        </View>

        {/* Fila de Botones */}
        <View style={styles.fila}>
            <BotonCalc texto="4" action={armarNumero}></BotonCalc>
            <BotonCalc texto="5" action={armarNumero}></BotonCalc>
            <BotonCalc texto="6" action={armarNumero}></BotonCalc>
            <BotonCalc texto="-" color="#FF9427" action={btnrestar}></BotonCalc>

            {/* #2D2D2D gris oscuro */}
            {/* #FF9427 NARANJA */}
        </View>

        {/* Fila de Botones */}
        <View style={styles.fila}>
            <BotonCalc texto="1" action={armarNumero}></BotonCalc>
            <BotonCalc texto="2" action={armarNumero}></BotonCalc>
            <BotonCalc texto="3" action={armarNumero}></BotonCalc>
            <BotonCalc texto="+" color="#FF9427" action={btnsumar}></BotonCalc>

            {/* #2D2D2D gris oscuro */}
            {/* #FF9427 NARANJA */}
        </View>

        {/* Fila de Botones */}
        <View style={styles.fila}>
            <BotonCalc texto="0" ancho action={armarNumero}></BotonCalc>
            <BotonCalc texto="." action={armarNumero}></BotonCalc>
            <BotonCalc texto="=" color="#FF9427" action={calcular}></BotonCalc>

            {/* #2D2D2D gris oscuro */}
            {/* #FF9427 NARANJA */}
        </View>

        
    </View>
  )
}
