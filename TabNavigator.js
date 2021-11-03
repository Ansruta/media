import * as react from 'react';
import {CreateBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from './Feed';
import CreatePost from './CreatePost';
import Profile from './Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab= CreateBottomTabNavigator();
const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator screenOptions={({route})=>({
            tabBaricon:({focused,color,size})=>{
                let iconName;
                if(route.name==='Feed'){
                    iconName=focused ? 'book':'book-outline';
                }else if(route.name==='CreatePost'){
                    iconName=focused ? 'create':'create-outline';
                }
                return<Ionicons name={iconName} size={size} color={color} />
            },
        })}
        tabBarOptions={{
            activeTintColor:'tomato',
            inactiveTintColor:'gray',
        }}
        >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatePost" component={CreatePost} />

        </Tab.Navigator>
    )
}
export default BottomTabNavigator;