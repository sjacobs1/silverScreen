import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getSimilarMovies } from "../service/getSimilarMovies";
import MoviePoster from "./moviePoster";

interface SimilarMoviesCarouselProps {
  movieId: number;
}

const SimilarMoviesCarousel = ({ movieId }: SimilarMoviesCarouselProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["similarMovies", movieId],
    queryFn: () => getSimilarMovies(movieId),
  });

  if (isLoading) {
    return <Text style={{ color: "white" }}>Loading similar movies...</Text>;
  }

  if (error) {
    return <Text style={{ color: "red" }}>Failed to load similar movies.</Text>;
  }

  if (!data || data.results.length === 0) {
    return <Text style={{ color: "white" }}>No similar movies found.</Text>;
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={{ gap: 15, paddingTop: 10, paddingRight: 25 }}>
      {data.results.map((movie) => (
        <View key={movie.id}>
          <MoviePoster movie={movie} />
        </View>
      ))}
    </ScrollView>
  );
};

export default SimilarMoviesCarousel;

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 15,
    marginBottom: 10,
  }
});
