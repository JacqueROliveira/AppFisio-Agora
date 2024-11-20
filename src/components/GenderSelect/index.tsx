import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';

export function GenderSelect() {
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [showModal, setShowModal] = useState(false);

  const genderOptions = [
    { id: '1', label: 'Masculino', value: 'M' },
    { id: '2', label: 'Feminino', value: 'F' },
  ];

  const handleSelect = (value: string, label: string) => {
    setSelectedGender(label);
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gênero: </Text>
          <TouchableOpacity
            style={styles.selectContainer}
            onPress={() => setShowModal(true)}
          >
            <View style={styles.selectInput}>
              <Text style={styles.selectText}>
                {selectedGender || 'Selecione'}
              </Text>
              <Text style={styles.arrowDown}>▼</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Modal
          visible={showModal}
          transparent
          animationType="fade"
          onRequestClose={() => setShowModal(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setShowModal(false)}
          >
            <View style={styles.modalContent}>
              <FlatList
                data={genderOptions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.optionItem}
                    onPress={() => handleSelect(item.value, item.label)}
                  >
                    <Text style={styles.optionText}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
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
    marginBottom: 15,
    marginTop: 5,
  },
  contentContainer: {
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'flex-start',
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#3E768C',
  },
  selectContainer: {
    minWidth: 120,
  },
  selectInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectText: {
    fontSize: 16,
    color: '#3E768C',
    marginRight: 8,
  },
  arrowDown: {
    fontSize: 20,
    color: '#3E768C',
    marginLeft: 200,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
    maxHeight: '50%',
    padding: 16,
  },
  optionItem: {
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#3E768C',
  },
  optionText: {
    fontSize: 16,
    color: '#3E768C',
  },
});