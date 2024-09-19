import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Result } from '../model/nowPlayingMovies';

interface NowPlayingMovieListProps {
    movie: Result;
  }

const NowPlayingList = ({movie}: NowPlayingMovieListProps) => {
  return (
    <View>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        style={styles.poster}
      />
    </View>
  )
}

export default NowPlayingList

const styles = StyleSheet.create({
    poster: {
        width: 115,
        height: 170,
        borderRadius: 5
    }
})