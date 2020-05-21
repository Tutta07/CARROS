import * as React from "react";
import{View,Text,FlatList,Image,Button,StyleSheet} from "react-native";


export default class List extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      cars: props.list
    }
  }
   render(){
     return(
        <FlatList>
        data={this.state.cars}
        height={250}
        renderItem={({item}) => {return (
          <View key={item.id} style={styles.container}>

          <Image style={{width:150,height:150}} source={{ uri:item._source.carPhotosThumb[0],}}></Image>

          <Text style={styles.item}>
          {item._source.brand} - {item._source.model}
          </Text>

          <Button color="#001E61"
          title="Detalles"
          onPress={() => this.props.navigationContext.navigate("Details",item)} />

          </View>
        )}}
        keyExtractor={(item,index) => `${index}`}
        </FlatList>
     )
   }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22,
    flexDirection:"row"
  },
  item:{
    padding:10,
    fontSize:18,
    height:44,
    color:"#FF5100",

  }
});