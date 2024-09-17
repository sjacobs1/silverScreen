import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getDiscoverMovies } from "../service/getDiscoverMovies";
import { getDiscoverSeries } from "../service/getDiscoverSeries";
import { Result } from "../model/discoverMovie";
import { LinearGradient } from "expo-linear-gradient";
import MoviePoster from "../components/moviePoster";
import SeriesPoster from "../components/seriesPoster";
import { DiscoverSeries } from "../model/discoverSeries";

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["movies"],
    queryFn: getDiscoverMovies,
  });

  const { data: dataSeries } = useQuery({
    queryKey: ["series"],
    queryFn: getDiscoverSeries,
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.focusMovieView}>
          <ImageBackground
            style={styles.imageBackground}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${data?.results[0].poster_path}`,
            }}
            blurRadius={20}
          >
            <LinearGradient
              colors={["transparent", "#09172D"]}
              start={[0.5, 0.1]}
              locations={[0.1, 0.9]}
              style={styles.linearGradient}
            >
              <Image
                style={styles.focusPoster}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${data?.results[0].poster_path}`,
                }}
              />
              <View style={styles.focusButtonContainer}>
                <Pressable style={styles.focusMovieButtons}>
                  <Text style={{ color: "white" }}> ▶︎ Trailer</Text>
                </Pressable>
                <Pressable style={styles.focusMovieButtons}>
                  <Text style={{ color: "white" }}>Details</Text>
                </Pressable>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>
        <View>
          <View
            style={styles.sectionHeaderContainer}
          >
            <Text style={styles.discover}>Discover</Text>
            <Text style={{ color: "white" }}>See all</Text>
          </View>
          <View style={styles.restOfContentContainer}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{ gap: 15 }}
              showsHorizontalScrollIndicator={false}
              style={{ paddingBottom: 10 }}
            >
              {data?.results.slice(1).map((result) => (
                <MoviePoster key={result.id} movie={result} />
              ))}
            </ScrollView>
            <View
            style={styles.tvSectionHeaderContainer}
          >
            <Text style={styles.discover}>TV</Text>
            <Text style={{ color: "white" }}>See all</Text>
          </View>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{ gap: 15 }}
              showsHorizontalScrollIndicator={false}
              style={{ paddingBottom: 10 }}
            >
              {dataSeries?.results.map((result) => (
                <SeriesPoster key={result.id} series={result} />
              ))}
            </ScrollView>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  focusMovieView: {
    backgroundColor: "gray",
    height: 450,
    justifyContent: "center",
    alignItems: "center",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  focusMovieButtons: {
    borderColor: "white",
    borderRadius: 20,
    borderWidth: 0.5,
    padding: 5,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  focusPoster: {
    height: 374,
    width: 254,
    marginBottom: 15,
    borderRadius: 10,
  },
  focusButtonContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  posters: {
    height: 140,
    width: 93,
    borderRadius: 5,
  },
  mainContainer: {
    backgroundColor: "#09172D",
    // backgroundColor: "black",
  },
  discover: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    // marginTop: 10,
    // marginLeft: 15,
    // marginBottom: 10,
  },
  restOfContentContainer: {
    marginLeft: 15,
    gap: 10,
  },
  sectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // margin: 15,
    // marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
  },
  tvSectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // margin: 15,
    paddingRight: 15,
    marginBottom: 15,
    alignItems: "center",
  }
});
