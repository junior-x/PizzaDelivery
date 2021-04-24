import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PizzaIcon from "../assets/ico/pizza.svg";
import ShopCart from "../assets/ico/shopping-cart.svg";

import Servicos from "./telas/Servicos";
import Carrinho from "./telas/Carrinho"

import { cores } from "./estilos";

const Tab = createBottomTabNavigator();

function Rotas() {
    return <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: cores.roxo,
          inactiveTintColor: cores.claro,
          activeBackgroundColor: cores.roxo,
          inactiveBackgroundColor: cores.laranja,
          style: {
            height: 70,
          },
          labelStyle: {
            width: '100%',
            flex: 1,
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: 21,
            marginTop: 3,
            paddingTop: 21,
            backgroundColor: cores.laranja 
          },
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen  name="Pizzas" component={Servicos} />
        <Tab.Screen name="Carrinho" component={Carrinho} />
      </Tab.Navigator>
    </NavigationContainer>
  }

export default Rotas;