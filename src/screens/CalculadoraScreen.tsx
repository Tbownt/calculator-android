import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    limpiar,
    armarNumero,
    positivoNegativo,
    botonDividir,
    botonMultiplicar,
    botonRestar,
    botonSumar,
    calcular,
    borrarNumero,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc text="C" color="#9B9B9B" accion={limpiar} />
        <BotonCalc text="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotonCalc text="Del" color="#9B9B9B" accion={borrarNumero} />
        <BotonCalc text="/" color="#FF9427" accion={botonDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="7" accion={armarNumero} />
        <BotonCalc text="8" accion={armarNumero} />
        <BotonCalc text="9" accion={armarNumero} />
        <BotonCalc text="*" color="#FF9427" accion={botonMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="4" accion={armarNumero} />
        <BotonCalc text="5" accion={armarNumero} />
        <BotonCalc text="6" accion={armarNumero} />
        <BotonCalc text="-" color="#FF9427" accion={botonRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="1" accion={armarNumero} />
        <BotonCalc text="2" accion={armarNumero} />
        <BotonCalc text="3" accion={armarNumero} />
        <BotonCalc text="+" color="#FF9427" accion={botonSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="0" ancho accion={armarNumero} />
        <BotonCalc text="." accion={armarNumero} />
        <BotonCalc text="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};
