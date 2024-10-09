import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MovieDetailsComponent from '../components/movieDetailsComponent'
import { SafeAreaView } from 'react-native'

const MovieDetailsPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView><MovieDetailsComponent /></ScrollView>
    </SafeAreaView>
  )
}

export default MovieDetailsPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#09172D",
    height: "100%"
  }
})