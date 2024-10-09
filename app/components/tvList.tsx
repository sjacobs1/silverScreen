import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Result } from "../model/seriesModel";
import { Link } from "expo-router";
import { useSeriesState } from "../store/seriesState";
// import { Result } from '../model/nowPlayingMovies';

interface TVListProps {
  series: Result;
}

const TVList = ({ series }: TVListProps) => {
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

export default TVList;

const styles = StyleSheet.create({
  poster: {
    width: 114,
    height: 170,
    borderRadius: 5,
  },
});
