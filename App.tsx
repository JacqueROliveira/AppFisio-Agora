import Groups from "@screens/Groups";
import theme from './src/theme/index';
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Loading } from "@components/loading";
import { StatusBar } from "react-native";
import {Routes} from 'src/components/routes'

export  default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoader ? <Routes/> : <Loading/>}
    </ThemeProvider>
  );
}