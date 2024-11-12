import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AlignLeft } from 'phosphor-react-native';

const DatePickerDemo = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const formatDate = (selectedDate: Date) => {
    return selectedDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const handleDateChange = (_event: any, selectedDate?: Date) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={() => setShowPicker(true)}
          style={styles.dateInput}
        >
          <Text style={styles.dateText}>
            {date ? formatDate(date) : 'DD/MM/AAAA'}
          </Text>
        </TouchableOpacity>
        <Text style={styles.label}>(Data de Nascimento)</Text>
      </View>

      {showPicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
          locale="pt-BR"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: '#3E768C',
    paddingVertical: 0,
    minWidth: 100,
    marginLeft: 0,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 16,
    color: '#3E768C', // azul claro
    marginLeft: 15,
  },
  dateInput: {
    borderBottomColor: '#3E768C',
    paddingVertical: 0,
    minWidth: 100,
    marginLeft: 0,
  },
  dateText: {
    fontSize: 16,
    color: '#3E768C',
  },
});

export default DatePickerDemo;