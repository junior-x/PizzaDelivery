import { StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default (pequeno, invertido) => StyleSheet.create({
  botao: {
    width: 140,
    paddingVertical: pequeno ? 3 : 9,
    paddingHorizontal: 20,
    backgroundColor: invertido ? cores.claro : cores.roxo,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0.62,
    elevation: 3,
  },
  valor: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: invertido ? cores.roxo : cores.claro,
  }
});