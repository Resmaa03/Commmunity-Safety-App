import * as React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Safety App</Text>
      <Button title="Report Suspicious Activity" onPress={() => navigation.navigate('Report')} />
      <Button title="Lost and Found" onPress={() => navigation.navigate('LostAndFound')} />
      <Button title="Emergency" onPress={() => navigation.navigate('Emergency')} />
    </View>
  );
};

const ReportScreen = () => {
  const [details, setDetails] = useState('');

  const handleReport = () => {
    // Handle reporting logic here
    alert('Report submitted: ' + details);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Suspicious Activity</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter details"
        value={details}
        onChangeText={setDetails}
      />
      <Button title="Submit Report" onPress={handleReport} />
    </View>
  );
};

const LostAndFoundScreen = () => {
  const [itemDetails, setItemDetails] = useState('');

  const handleReport = () => {
    // Handle lost and found logic here
    alert('Item reported: ' + itemDetails);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lost and Found</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item details"
        value={itemDetails}
        onChangeText={setItemDetails}
      />
      <Button title="Report Item" onPress={handleReport} />
    </View>
  );
};

const EmergencyScreen = () => {
  const handleEmergency = () => {
    // Handle emergency alert logic here
    alert('Emergency alert activated');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency</Text>
      <Button title="Activate Emergency Alert" onPress={handleEmergency} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="LostAndFound" component={LostAndFoundScreen} />
        <Stack.Screen name="Emergency" component={EmergencyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default App;
