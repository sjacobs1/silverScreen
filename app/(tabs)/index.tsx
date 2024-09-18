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
import { getDiscoverSeries } from "../service/getDiscoverSeries";
import { Result } from "../model/nowPlayingMovies";
import { LinearGradient } from "expo-linear-gradient";
import MoviePoster from "../components/moviePoster";
import SeriesPoster from "../components/seriesPoster";
import { DiscoverSeries } from "../model/discoverSeries";
import PopularMoviePoster from "../components/popularMoviePoster";
import { getPopularMovies } from "../service/getPopularMovies";
import PopularSeriesPoster from "../components/popularSeriesPoster";
import { getPopularSeries } from "../service/getPopularSeries";
import { getTopRatedMovies } from "../service/getTopRatedMovies";
import TopRatedMovieCard from "../components/topRatedMovieCard";
import { getNowPlayingMovies } from "../service/getNowPlayingMovies";

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["movies"],
    queryFn: getNowPlayingMovies,
  });

  const { data: dataSeries } = useQuery({
    queryKey: ["series"],
    queryFn: getDiscoverSeries,
  });

  const { data: dataPopularMovies } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  const { data: dataPopularSeries } = useQuery({
    queryKey: ["popularSeries"],
    queryFn: getPopularSeries,
  });

  const { data: dataTopRatedMovies } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: getTopRatedMovies,
  });

  const topRatedMovies = dataTopRatedMovies?.results.slice(0, 10);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.discover}>Now Playing</Text>
            <Text style={{ color: "#97DFFC" }}>See all</Text>
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
            <View style={styles.tvSectionHeaderContainer}>
              <Text style={styles.discover}>TV</Text>
              <Text style={{ color: "#97DFFC" }}>See all</Text>
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
          <View style={styles.popularContainer}>
            <View style={styles.popularHeaderContainer}>
              <Text style={{ fontSize: 20, color: "#FF8811" }}>
                ⎮<Text style={styles.popularHeader}>Popular</Text>
              </Text>
            </View>

            <View style={{ marginLeft: 15 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingRight: 15,
                  marginBottom: 5,
                }}
              >
                <Text style={{ marginBottom: 5, color: "white" }}>Movies</Text>
                <Text style={{ color: "#97DFFC" }}>See all</Text>
              </View>

              <ScrollView
                horizontal={true}
                contentContainerStyle={{ gap: 15 }}
                showsHorizontalScrollIndicator={false}
                style={{ paddingBottom: 10 }}
              >
                {dataPopularMovies?.results.map((result) => (
                  <PopularMoviePoster key={result.id} movie={result} />
                ))}
              </ScrollView>
            </View>
            <View style={{ marginLeft: 15, marginTop: 15 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingRight: 15,
                  marginBottom: 5,
                }}
              >
                <Text style={{ marginBottom: 5, color: "white" }}>Series</Text>
                <Text style={{ color: "#97DFFC" }}>See all</Text>
              </View>

              <ScrollView
                horizontal={true}
                contentContainerStyle={{ gap: 15 }}
                showsHorizontalScrollIndicator={false}
                style={{ paddingBottom: 10 }}
              >
                {dataPopularSeries?.results.map((result) => (
                  <PopularSeriesPoster key={result.id} series={result} />
                ))}
              </ScrollView>
            </View>
          </View>

          <View style={styles.topRatedContainer}>
            <View style={styles.popularHeaderContainer}>
              <Text style={{ fontSize: 20, color: "#FF8811" }}>
                ⎮<Text style={styles.popularHeader}>Top Rated</Text>
              </Text>
              <Text style={{ color: "#97DFFC" }}>See all</Text>
            </View>
            <View style={styles.topRatedListContainer}>
              {topRatedMovies?.map((result) => (
                <TopRatedMovieCard key={result.id} movie={result} />
              ))}
            </View>
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
    borderColor: "#97DFFC",
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
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
  },
  tvSectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // margin: 15,
    paddingRight: 15,
    marginBottom: 5,
    alignItems: "center",
  },
  popularContainer: {
    height: 355,
    // backgroundColor: "red",
    // backgroundColor: "#21252B",
    marginTop: 30,
    paddingTop: 5,
  },
  popularHeader: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  popularHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // margin: 15,
    marginRight: 15,
    marginBottom: 15,
    alignItems: "center",
    marginLeft: 13,
  },
  topRatedContainer: {
    // height: 355,
    // width: "100%",
    backgroundColor: "#09172D",
    // backgroundColor: "#21252B",
    marginTop: 40,
    paddingTop: 5,
    marginBottom: 30,
  },
  topRatedListContainer: {
    gap: 15,
  },
});
