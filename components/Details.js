import * as React from 'react';
import { View, Text, ScrollView, Image,TouchableHigh,StyleSheet} from 'react-native';

export default class Details extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { _source } = this.props.route.params;

    return (
      <View style={styles.container}>
        <Text>Nome del Carro {_source.id}</Text>
        <ScrollView>
          <View style={styles.content}>
            <Image
              style={{ width: 400, height: 280 }}
              source={{
                uri: _source.carPhotos[0],
              }}
            />
            <Text>{_source.obs}</Text>
            <Image
              style={{ width: 400, height: 280 }}
              source={{ uri: _source.cavRef.googleMapsImg }}
            />
          </View>
        </ScrollView>
        <View style={styles.footer}>
        <TouchableHigh activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => alert("Pressed!")}>
        <View><Text>Comprar</Text></View>
        </TouchableHigh>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    borderColor:"red",
    borderWidth:3,
    },
    content:{
      flex:1,
      borderColor:"blue",
      borderWidth:3,
    },
    footer:{
      borderColor:"green",
      borderWidth:3,
    }
})
