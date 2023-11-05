import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './src/screens/Dashboard/Dashboard';
import ListCourses from './src/screens/Courses/ListCourses';
import CourseDetails from './src/screens/Courses/CourseDetails';

const Stack = createNativeStackNavigator();

const App = () => {
return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
});

export default App;
