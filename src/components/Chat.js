import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const Mensagem = (props) => {//mensagens do papagaio e do usuái
    return (<View  style={styles.mensagem} >
            <Text style={styles.fontStyle} >Você: {props.mensagem}</Text>,
            <Text style={styles.fontStyle} >Papagaio: {props.mensagem}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    mensagem: {
        flex: 1,
        marginTop: 15,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 'auto',
        marginLeft: 5
    },
    fontStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#18632a'
    }
})
export default Mensagem;
