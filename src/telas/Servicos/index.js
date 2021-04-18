import React from "react";

import { SafeAreaView, StatusBar, Text, FlatList } from "react-native";
import Item from "./Item";

export default function Servicos() {
  return <SafeAreaView>
        <Text>🍕 Pizza Delivery</Text>
    <StatusBar />
    <FlatList
      data={servicos}
      renderItem={({item}) => <Item {...item}  />}
      keyExtractor={({id}) => String(id)}
    />
  </SafeAreaView>
}

const servicos = [
  {
    id: 1,
    nome: "Pizza - Calabresa.",
    preco: 45,
    descricao: "Molho de tomate, Calabresa, Queijo, Cebola, Borda de Cheedar.",
  },
  {
    id: 2,
    nome: "Pizza - 4 Queijos.",
    preco: 51,
    descricao:
      "Molho de Tomate, Queijo Provolone, Queijo: Mussarela, Requeijão, Cheedar, Borda de Catupiry.",
  },
  {
    id: 3,
    nome: "Pizza - 5 Queijos.",
    preco: 60,
    descricao:
      "Molho de Tomate, Queijo Provolone, Queijos: Mussarela, Requeijão, Cheedar, Parmesão, Gorgonzola, Borda de Catupiry.",
  },
  {
    id: 4,
    nome: "Pizza - Beacon.",
    preco: 45,
    descricao:
      "Molho de Tomate, Queijo Mussarela, Cebola, Beacon, Cheedar, Borda de Catupiry.",
  },
  {
    id: 5,
    nome: "Pizza - Portuguesa.",
    preco: 54,
    descricao:
      "Molho de Tomate, Palmito, Milho, Beacon, Queijo, Ervilha, Tomate, Ovo.",
  },
  {
    id: 6,

    nome: "Pizza - Pepperoni",
    preco: 39,
    descricao: "Molho de Tomate, Queijo, Pepperoni, Cebola, Palmito.",
  },
];
