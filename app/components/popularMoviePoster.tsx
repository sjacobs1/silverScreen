import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import { Result } from "../model/movieModel";
import { LinearGradient } from "expo-linear-gradient";
import { useMovieState } from "../store/movieState";
import { Link } from "expo-router";

interface PopularMoviePosterProps {
  movie: Result;
}

const PopularMoviePoster = ({ movie }: PopularMoviePosterProps) => {

  const setSelectedMovieId = useMovieState((state) => state.setSelectedMovieId);

  const handleSelectedMovie = () => {
    setSelectedMovieId(movie.id)
  }

  return (
    <Link href="/movieDetailsPage" onPress={handleSelectedMovie}><View style={styles.container}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
        }}
        style={styles.poster}
      >
        <LinearGradient
          colors={["transparent", "#1E1F20"]}
          start={[0.5, 0.1]}
          locations={[0.45, 0.85]}
          style={styles.linearGradient}
        >
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {movie.original_title}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View></Link>
  );
};

export default PopularMoviePoster;

const styles = StyleSheet.create({
  container: {
    height: 112,
    width: 200,
    // backgroundColor: "red",
  },
  poster: {
    height: "100%",
    width: "100%",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:5
  },
  title: {
    color: "white",
    position: "absolute",
    bottom: 0,
  },
});
