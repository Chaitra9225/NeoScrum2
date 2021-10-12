import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { Text, View ,Image, _Text } from "react-native";

const MyCustomDrawer = (props) => {
   return(
    <DrawerContentScrollView {...props}>
        <View>
            <View>
                   <View>
                       <View>
                       <Image style={{alignSelf:"center"}} source={require('../images/girl.jpg')} />
                       </View>
                   <Text style={{alignSelf:"center"}}>
                    Chaitra B
                    </Text>
                    <Text style={{alignSelf:'center'}}>
                        Chaitra.bhairappa@neosoftmail.com
                    </Text>
                    </View>
            </View>

        </View>
        <DrawerItemList{...props}/>
    </DrawerContentScrollView>
   )
}

export default MyCustomDrawer