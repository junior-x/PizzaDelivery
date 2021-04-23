import React from 'react';

import { FlatList } from 'react-native';

import Item from './Item';

const servicos = [
  {
    id: 1,
    nome: "Pizza Calabresa",
    preco: 79.9,
    descricao: "Molho de Tomate, Queijo, Cebola, Calabresa, Oregano e Borda de Catupiry."
  },
  {
    id: 2,
    nome: "Pizza 4-Queijos",
    preco: 89.9,
    descricao: "Molho de Tomate, Queijos: Mussarela, Provolone, Catupiry e Requeijão."
  },
  {
    id: 3,
    nome: "Pizza 5-Queijos",
    preco: 99.9,
    descricao: "Molho de Tomate, Queijos: Mussarela, Provolone, Catupiry, Cheedar e Gorgonzola."
  },
  {
    id: 4,
    nome: "X-Pizza",
    preco: 120.9,
    descricao: "Molho de Tomate, Queijos: Mussarela, Provolone, Requeijão, Cheedar e Gorgonzola, Borda de Catupiry."
  },
  {
    id: 5,
    nome: "Pizza Beacon",
    preco: 72,
    descricao: "Molho de Tomate, Queijo Mussarela, Cebola, Alho, Beacon e Borda de Catupiry."
  },
  {
    id: 6,
    nome: "Pizza-Vulcan",
    preco: 90,
    descricao: "Molho de Tomate, Alho, Cebola, Pimentas, Beacon, Calabresa, Gorgonzola e Borda de Cheedar."
  }
];

export default function Servicos() {
  return <>
    <FlatList
      data={servicos}
      renderItem={({item}) => <Item {...item}  />}
      keyExtractor={({id}) => String(id)}
    />
  </>
}
