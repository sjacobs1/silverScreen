import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { Result } from '../model/popularMovies';
import { useMovieState } from '../store/movieState';
import { Result } from '../model/movieModel';
import { Link } from 'expo-router';

interface TopRatedMovieListProps {
    movie: Result;
  }

const TopRatedMoviesList = ({movie}: TopRatedMovieListProps) => {

  const setSelectedMovieId = useMovieState((state) => state.setSelectedMovieId);

  const handleSelectedMovie = () => {
    setSelectedMovieId(movie.id)
  }

  return (
   <Link href="/movieDetailsPage" onPress={handleSelectedMovie}> <View>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        style={styles.poster}
      />
    </View></Link>
  )
}

export default TopRatedMoviesList

const styles = StyleSheet.create({
    poster: {
        width: 114,
        height: 170,
        borderRadius: 5
    }
})