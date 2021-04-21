import React from "react";
import { KeyboardAvoidingView, SafeAreaView, StatusBar, Text } from "react-native";
import estilosGlobal from "../../estilos";

function TelaPadrao({ children }) {
  return (
    <SafeAreaView style={estilosGlobal.preencher}>
      <Text style={estilo.textItem}>🍕</Text>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Plataform.OS == "ios" ? "padding" : "height"}
        style={estilosGlobal.preencher}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default TelaPadrao;
