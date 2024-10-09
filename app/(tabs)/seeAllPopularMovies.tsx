import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMovies } from "../service/getNowPlayingMovies";
import NowPlayingList from "../components/nowPlayingList";
import { getPopularMovies } from "../service/getPopularMovies";
import PopularMoviesList from "../components/popularMoviesList";

const SeeAllPopularMovies = () => {
    const { data: dataPopularMovies } = useQuery({
        queryKey: ["popularMovies"],
        queryFn: getPopularMovies,
      });

  return (
    <SafeAreaView style={{ backgroundColor: "#09172D" }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={{ fontSize: 20, color: "#FF8811" }}>
            ⎮<Text style={styles.header}>Popular Movies</Text>
          </Text>
        </View>
        <FlatList
          data={dataPopularMovies?.results}
          renderItem={({ item }) => <PopularMoviesList movie={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{ gap: 10 }}
          contentContainerStyle={{ gap: 10, paddingBottom: 110, paddingTop: 10}}
        //   style={{ marginTop: 10 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default SeeAllPopularMovies;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  header: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // margin: 15,
    marginRight: 15,
    marginBottom: 15,
    marginTop: 10,
    alignItems: "center",
    // marginLeft: 13,
  },
});
