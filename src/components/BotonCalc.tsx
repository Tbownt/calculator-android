import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface BotonProps {
  text: string;
  color?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

export const BotonCalc = ({
  text,
  color = '#2D2D2D',
  ancho,
  accion,
}: BotonProps) => {
  return (
    <TouchableOpacity onPress={() => accion(text)}>
      <View
        style={[
          styles.boton,
          {backgroundColor: color, width: ancho ? 180 : 80},
        ]}>
        <Text
          style={[
            styles.botonTexto,
            {color: color === '#9B9B9B' ? 'black' : 'white'},
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
