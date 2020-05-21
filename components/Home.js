import * as React from 'react';
import {Text, Button,StyleSheet,FlatList,Image,View} from "react-native";
import {Details} from './Details';
import {List} from './List';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      cars:[],
    };
  }
  render(){
    if(!this.isLoading){
      return(
        <View style={{flex:1,justifyContent:"center",paddingHorizontal:15,borderColor:"blue", borderWidth:2}}>
        <Text>"Lista de Carros"</Text>
         <List list={this.state.cars} navigationContext={this.props.navigation} />
         <Text> Mostrando {this.state.cars.length} Resultados</Text>
        </View>

      );
    }
    else { return <Text>Loading...</Text>;}
  }
   componentDidMount(){
     fetch("https://discovery.volanty.com/public/discovery/v1/catalog")
        .then((response) => response.json())
        .then((json) => {
        this.setState({ cars: json.hits.hits});
       })
        .catch((error) => console.error(error))
        .finally(() => {
        this.setState({isLoading:false});
       });
   }

}

