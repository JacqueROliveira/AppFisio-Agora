import { Container, SubTitle, TextSelecao, CadastroLogo, Logo, Title, Position, Preco, Value } from './style'
import logo from 'assets/Logo.png'
import { ButtonCadastro } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { useTheme } from 'styled-components/native'
import { RouteProp, useRoute, NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type RootStackParamList = {
  agendamentoPrivat: {
    nome: string;
    endereco: string;
    preco: string;
    data: string;
    horario: string;
  },
  confirmacaoPrivat: {
    nome: string;
    endereco: string;
    preco: string;
    data: string;
    horario: string;
  };
};

type AgendamentoPrivatRouteProp = RouteProp<RootStackParamList, 'agendamentoPrivat'>;

type NavigationProps = NavigationProp<RootStackParamList>;


export function AgendamentoPrivat() {
  const navigation = useNavigation<NavigationProps>();

  const route = useRoute<AgendamentoPrivatRouteProp>();

  // Extrair os parâmetros
  const { nome, endereco, preco } = route.params;

  function handleConfirmacaoPrivat(nome: string, endereco: string, preco: string, data: string, horario: string) {
    navigation.navigate('confirmacaoPrivat', {
      nome,
      endereco,
      preco,
      data,
      horario
    });
  }

  const { COLORS } = useTheme();

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showDateOptions, setShowDateOptions] = useState(false);
  const [showTimeOptions, setShowTimeOptions] = useState(false);

  // Opções de data e horário
  const dateOptions = ['23/09/2024', '24/09/2024'];
  const timeOptions = ['15:00 - 16:00', '20:00 - 21:00', '21:00 - 22:00'];

  const handleDatePress = () => {
    setShowDateOptions(!showDateOptions);
    setShowTimeOptions(false);
  };

  const handleTimePress = () => {
    setShowTimeOptions(!showTimeOptions);
    setShowDateOptions(false);
  };

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 130
    },
    inputContainer: {
      marginBottom: 10,
      position: 'relative',
      zIndex: 1,
    },
    label: {
      fontSize: 16,
      color: '#4167F0',
      marginBottom: 10,
      fontWeight: '600',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 130
    },
    input: {
      borderWidth: 2,
      borderColor: '#4167F0',
      borderRadius: 8,
      padding: 5,
      backgroundColor: '#fff',
      color: '#4167F0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputText: {
      color: '#4167F0',
      fontSize: 20,
    },
    optionsContainer: {
      position: 'absolute',
      top: 85,
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      borderRadius: 8,
      borderWidth: 2,
      borderColor: '#4167F0',
      overflow: 'hidden',
      elevation: 5,
      shadowColor: '#4167F0',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    option: {
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#4167F0',
    },
    optionText: {
      color: '#4167F0',
      fontSize: 16,
    },
    selectedOption: {
      backgroundColor: '#3E768C10',
    },
    placeholder: {
      color: '#4167F0',
      fontSize: 16,
    },
    arrowIcon: {
      right: 0,
      top: 0,
      color: '#4167F0',
      fontSize: 20,
      marginLeft: 300,
    },
    inputWrapper: {
      position: 'relative',
    }
  });



  return (
    <>
      <Container>
        <CadastroLogo>
          <TextSelecao>
            AGENDAMENTO
          </TextSelecao>

        </CadastroLogo>
        <Position>



          <Title>
            {nome}
          </Title>

          <SubTitle>
            {endereco}
          </SubTitle>
          <Preco>
            <Value>{preco}</Value>
          </Preco>

        </Position>


        <Svg height={30} width="100%">
          <Line
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke={COLORS.Azul}
          />

        </Svg>


        <View style={styles.container}>
          {/* Date Picker */}
          <View style={[styles.inputContainer, { zIndex: 2 }]}>
            <Text style={styles.label}>  Dia: </Text>
            <TouchableOpacity
              onPress={handleDatePress}
              style={styles.input}
            >
              <View style={styles.inputWrapper}>
                <Text style={selectedDate ? styles.inputText : styles.placeholder}>
                  {selectedDate || 'Escolha uma data...'}
                </Text>
                <Text style={styles.arrowIcon}>▼</Text>
              </View>
            </TouchableOpacity>

            {showDateOptions && (
              <View style={styles.optionsContainer}>
                {dateOptions.map((date) => (
                  <TouchableOpacity
                    key={date}
                    style={[
                      styles.option,
                      selectedDate === date && styles.selectedOption
                    ]}
                    onPress={() => {
                      setSelectedDate(date);
                      setShowDateOptions(false);
                    }}
                  >
                    <Text style={styles.optionText}>{date}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Time Picker */}
          <View style={[styles.inputContainer, { zIndex: 1 }]}>
            <Text style={styles.label}>Horário</Text>
            <TouchableOpacity
              onPress={handleTimePress}
              style={styles.input}
            >
              <View style={styles.inputWrapper}>
                <Text style={selectedTime ? styles.inputText : styles.placeholder}>
                  {selectedTime || 'Escolha um horário...'}
                </Text>
                <Text style={styles.arrowIcon}>▼</Text>
              </View>
            </TouchableOpacity>

            {showTimeOptions && (
              <View style={styles.optionsContainer}>
                {timeOptions.map((time) => (
                  <TouchableOpacity
                    key={time}
                    style={[
                      styles.option,
                      selectedTime === time && styles.selectedOption
                    ]}
                    onPress={() => {
                      setSelectedTime(time);
                      setShowTimeOptions(false);
                    }}
                  >
                    <Text style={styles.optionText}>{time}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>





        <ButtonCadastro
          title="CONCLUIR AGENDAMENTO"
          type='PRIMARY'
          onPress={() => handleConfirmacaoPrivat(nome, endereco, preco, selectedDate, selectedTime)}
        />

        <Logo source={logo} />
      </Container>
    </>
  );
}