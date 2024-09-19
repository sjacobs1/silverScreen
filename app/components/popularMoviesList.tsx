import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Result } from '../model/popularMovies';

interface PopularMovieListProps {
    movie: Result;
  }

const PopularMoviesList = ({movie}: PopularMovieListProps) => {
  return (
    <View>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        style={styles.poster}
      />
    </View>
  )
}

export default PopularMoviesList

const styles = StyleSheet.create({
    poster: {
        width: 114,
        height: 170,
        borderRadius: 5
    }
})