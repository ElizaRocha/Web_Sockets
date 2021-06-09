import { View, FlatList,Text,TextInput} from 'react-native';
import React, { useState, useEffect } from 'react';
import Chat from './src/components/Chat'
export default function App() {

/* Criação das constantes que serão responsáveis pela usabilidade do echo.websocket.org */
const [text, setText] = useState('');  //responsável por setar o texto escrito pelo usuário
const [conectado, setConectado] = useState(false); //se certifica de atualizar para true quando o webSocket estiver conectado
const [webSockets, setWs] = useState(); //receberá o link do WebSocket para se conectar
const [data, setData] = useState([]); //controlador
const renderItem = ({ item }) => (<Chat mensagem={item.mensagem}></Chat>)

  useEffect(() => { //Usando esse hook, o programa atua de forma mais limpa e não necessite da criação de uma classe para a função a seguir
    const webSockets = new WebSocket('ws://echo.websocket.org'); //recebe o WebSocket
    setWs(webSockets);//seta Ele

    webSockets.onopen = () => {//isso quer dizer que o socket conectou
      setConectado(true); //então a constante de conexão é atualizada para 'true'
    };
    webSockets.onmessage = (e) => {
      setData([...data, { id: data.length, mensagem: e.data }]); //controlando o array de dados
    };
    webSockets.onerror = (e) => {//Ocorreu algum problema na conexão com o socket
      setConectado(false); //então a constante de conexão rece 'false'
    };
    webSockets.onclose = (e) => {//Aqui percebe-se que há a desconexão com o webSocket
      setConectado(false);//então, neste caso também é setado 'false' para a constante de conexão
    }
  }, [data]);


  return (
    <View style={{flex: 1,marginTop: 30}} >
      {conectado? (//se conectado == true, ou seja, se ele estiver conectado
        <View>
          <FlatList //mostrará as mensagens na tela
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      ) : ( //se não, se ele estiver desconectado
          <View style={{ flex : 1}} >
            <Text style={{ fontSize: 20,
                        fontWeight: 'bold',
            }} > 
            Ocorreu um erro com a conexão com o Socket, por favor aguarde alguns instantes.</Text>
          </View>//aparecerá esta mensagem na tela
        )}

      <View  style={{position: 'absolute', 
      width: 350,
             bottom: 15}}  >
        <TextInput placeholder="Digite qualquer mensagem para o papagaio repetir" onChangeText={(text) => setText(text)} onSubmitEditing={(e) => webSockets.send(text)}/>
      </View>
    </View>//campo para o envio da mensagem que será repetida pelo papagaio
  );

 }
 
