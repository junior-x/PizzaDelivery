import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import CampoInteiro from "../../../componentes/CampoInteiro";
import estilos from "./estilos";

function Item({ nome, preco, descricao }) {

    const [quantidade, setQuantidade] = useState(1);

  return (
    <>
      <View style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>{preco}</Text>
      </View>
      <View style={estilos.carrinho}>
        <View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Quantidade:</Text>
            <CampoInteiro valor={quantidade} acao={setQuantidade} />
          </View>
          <View style={estilos.valor}>
            <text style={estilos.descricao}>Preço:</text>
            <Text style={estilos.preco}>0</Text>
          </View>
        </View>
        <Button title="Adicionar"/>
      </View>
      <View style={estilos.divisor}/>
    </>
  );
}

export default Item;
