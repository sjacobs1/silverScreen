import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Result } from "../model/seriesModel";
import { Link } from "expo-router";
import { useSeriesState } from "../store/seriesState";

interface PopularSeriesListProps {
  series: Result;
}

const PopularSeriesList = ({ series }: PopularSeriesListProps) => {
  const setSelectedSeriesId = useSeriesState(
    (state) => state.setSelectedSeriesId
  );

  const handleSelectedSeries = () => {
    setSelectedSeriesId(series.id);
  };

  return (
    <Link href="/seriesDetailsPage" onPress={handleSelectedSeries}>
      <View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${series.poster_path}`,
          }}
          style={styles.poster}
        />
      </View>
    </Link>
  );
};

export default PopularSeriesList;

const styles = StyleSheet.create({
  poster: {
    width: 114,
    height: 170,
    borderRadius: 5,
  },
});
