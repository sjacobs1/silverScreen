import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { formatDate } from "../utils/formatDate";
import { formatRating } from "../utils/formatRating";
import { Result } from "../model/seriesModel";
import { Link } from "expo-router";
import { useSeriesState } from "../store/seriesState";

interface SeriesPosterProps {
  series: Result;
}

const SeriesPoster = ({ series }: SeriesPosterProps) => {
  const setSelectedSeriesId = useSeriesState(
    (state) => state.setSelectedSeriesId
  );

  const handleSelectedSeries = () => {
    setSelectedSeriesId(series.id);
  };

  return (
    <Link href="/seriesDetailsPage" onPress={handleSelectedSeries}>
      <View style={styles.seriesCard}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${series.poster_path}`,
          }}
          style={styles.poster}
        />
        <View style={styles.posterInfoContainer}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {series.original_name}
          </Text>
          <View style={styles.secondInfoContainer}>
            <Text style={styles.star}>
              ★{" "}
              <Text style={styles.rating}>
                {formatRating(series.vote_average)}
              </Text>
            </Text>
            <Text style={styles.releaseDate}>
              {formatDate(series.first_air_date)}
            </Text>
          </View>
        </View>
      </View>
    </Link>
  );
};

export default SeriesPoster;

const styles = StyleSheet.create({
  seriesCard: {
    height: 270,
    width: 140,
    backgroundColor: "#1b2637",
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
  },
  poster: {
    height: 200,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  title: {
    color: "white",
    fontWeight: "light",
  },
  posterInfoContainer: {
    height: 70,
    justifyContent: "space-between",
    padding: 7,
  },
  secondInfoContainer: {
    flexDirection: "row",
    bottom: 0,
    justifyContent: "space-between",
  },
  releaseDate: {
    color: "white",
    fontWeight: "light",
    fontSize: 12,
  },
  rating: {
    color: "white",
    fontWeight: "light",
    fontSize: 12,
  },
  star: {
    fontSize: 10,
    color: "gold",
  },
});
