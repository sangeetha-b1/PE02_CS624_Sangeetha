import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  const coreCourses = [
    'CS 504 - Software Engineering',
    'CS 506 - Programming for computing',
    'CS 519 - CloudComputing Overview',
    'CS 533 - Compute Architecture',
    'CS 547 - Secure Systems and Programs',
    'CS 622 - Discrete Matha and Algorithms',
    'DS 510 - AI for data science',
    'DS 620 - MachineLearning and Deep Learning',
  ];

  const depthCourses = ['CS 624 - FullStack-Mobile App', 'CS 628 - FullStack-Web App'];
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Image source={require('@/assets/images/icon.png')} style={styles.icon} />
      
      <View style={styles.headingBar}>
      <Text style={styles.heading}>MSCS Core Courses</Text>
      </View>
      {coreCourses.map((course, index) => (
        <Text key={`core-${index}`} style={styles.courseItem}>
          {course}
        </Text>
      ))}
      <View style={styles.headingBar}>
      <Text style={styles.heading}>Depth of Study Courses</Text>
      </View>
      {depthCourses.map((course, index) => (
        <Text key={`depth-${index}`} style={styles.courseItem}>
          {course}
        </Text>
      ))}

      
      <View style={styles.headingBar}>
      <Text style={styles.label}>Enter your favorite course:</Text></View>
      <TextInput
        style={styles.input}
        placeholder="e.g. CS 504"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />

      {favoriteCourse !== '' && (
        <Text style={styles.favorite}>
          Your favorite course is: {favoriteCourse}
        </Text>
      )}

      
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#f5f8fa',
  },
  headingBar: {
    backgroundColor: 'yellow', // or '#FFD700'
    padding: 10,
    borderRadius: 6,
    marginTop: 20,
  },
  icon: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
    color: 'black',
  },
  courseItem: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 2,
  },
  label: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  favorite: {
    fontSize: 16,
    marginTop: 10,
    color: '#007aff',
  },
  link: {
    fontSize: 16,
    marginTop: 20,
    color: '#0066cc',
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
});
