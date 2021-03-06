import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps219032Navigator from '../features/Maps219032/navigator';
import Additem219031Navigator from '../features/Additem219031/navigator';
import Maps219027Navigator from '../features/Maps219027/navigator';
import UserProfile219023Navigator from '../features/UserProfile219023/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps219032: { screen: Maps219032Navigator },
Additem219031: { screen: Additem219031Navigator },
Maps219027: { screen: Maps219027Navigator },
UserProfile219023: { screen: UserProfile219023Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
