import React from "react";
import { View, Text } from "react-native";
import estilos from "./estilos";

function StatusCarrinho({ total }) {
  return (
    <View style={estilos.conteudo}>
      <View style={estilos.total}>
        <Text style={estilos.descricao}>Total do Carrinho</Text>
        <Text style={estilos.valor}></Text>{
            Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(total)
        }
      </View>
    </View>
  );
}

export default StatusCarrinho;
