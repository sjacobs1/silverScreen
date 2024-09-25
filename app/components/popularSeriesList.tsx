import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Result } from '../model/seriesModel';

interface PopularSeriesListProps {
    series: Result;
  }

const PopularSeriesList = ({series}: PopularSeriesListProps) => {
  return (
    <View>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${series.poster_path}` }}
        style={styles.poster}
      />
    </View>
  )
}

export default PopularSeriesList

const styles = StyleSheet.create({
    poster: {
        width: 114,
        height: 170,
        borderRadius: 5
    }
})