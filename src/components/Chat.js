import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const Mensagem = (props) => {//mensagens do papagaio e do usuái
    return (<View >
            <Text style={styles.fontStyle} >Você: {props.mensagem}</Text>,
            <Text style={styles.fontStyle} >Papagaio: {props.mensagem}</Text>
        </View>
    )
}
const styles = StyleSheet.create({ //Como é o mesmo layout, criei uma constante para não repetir nas linhas 6 e 7
    fontStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#18632a'
    }
})
export default Mensagem;
