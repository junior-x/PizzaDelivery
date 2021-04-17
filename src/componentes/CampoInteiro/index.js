import React from "react";
import { TextInput } from "react-native";

function CampoInteiro({valor, acao}){

    const numeroEmTexto = String(valor);

    return(
        <TextInput 
            keyboardType="number-pad"
            selectTextOnFocus
            onChangeText={(novoValor) => {
                acao(novoValor)
            }}
            value={numeroEmTexto}
        />
    );
}

export default CampoInteiro;