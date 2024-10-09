import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import SeriesDetailsComponent from '../components/seriesDetailsComponent'

const SeriesDetailsPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView><SeriesDetailsComponent /></ScrollView>
    </SafeAreaView>
  )
}

export default SeriesDetailsPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#09172D",
    height: "100%"
  }
})