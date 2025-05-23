import React from 'react';
import theme from './src/theme/index'; 
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Loading } from "@components/loading"; 
import { StatusBar } from "react-native";

import { UserProvider } from "src/contexts/UserContext";
import { AppRoutes } from "./src/components/routes/app.routes";
import { SQLiteProvider } from "expo-sqlite";
import { initializeDatabase } from "@dataBase/initializeDatabase";
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
 const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold})

 return (

  <ThemeProvider theme={theme}>
   <StatusBar
    barStyle="light-content"
    backgroundColor="transparent"
    translucent
   /> 

   {fontsLoader ? (

    <SQLiteProvider databaseName="myDatabase.db" onInit={initializeDatabase}>
     <NavigationContainer>
      <UserProvider>
       <AppRoutes />
      </UserProvider>
     </NavigationContainer>
    </SQLiteProvider>
   ) : (

    <Loading />
   )}
  </ThemeProvider>
 );
}