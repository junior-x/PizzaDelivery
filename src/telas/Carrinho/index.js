import React from 'react';

import { FlatList } from 'react-native';

import TelaPadrao from '../../componentes/TelaPadrao';
import StatusCarrinho from '../../componentes/StatusCarrinho';
import Item from './Item';

const servicos = [
  {
    id: 1,
    nome: "Pizza Calabresa",
    preco: 79.9,
    descricao: "Molho de Tomate, Queijo, Cebola, Calabresa, Oregano e Borda de Catupiry.",
    quantidade: 1,
  },
  {
    id: 4,
    nome: "X-Pizza",
    preco: 120.9,
    descricao: "Molho de Tomate, Queijos: Mussarela, Provolone, Requeijão, Cheedar e Gorgonzola, Borda de Catupiry.",
    quantidade: 3,
  },
  {
    id: 6,
    nome: "Pizza-Vulcan",
    preco: 90,
    descricao: "Molho de Tomate, Alho, Cebola, Pimentas, Beacon, Calabresa, Gorgonzola e Borda de Cheedar.",
    quantidade: 1,
  }
];

export default function Carrinho() {
  const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

  return <TelaPadrao>
    <StatusCarrinho total={total} />
    <FlatList
      data={servicos}
      renderItem={({item}) => <Item {...item}  />}
      keyExtractor={({id}) => String(id)}
    />
  </TelaPadrao>
}
