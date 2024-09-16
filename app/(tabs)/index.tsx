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
import { Result } from "../model/discoverMovie";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["movies"],
    queryFn: getDiscoverMovies,
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
              colors={["transparent", "black"]}
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
        <Text style={styles.discover}>Discover</Text>
        <View style={{marginLeft: 15}}>
          <ScrollView horizontal={true}>
            {data?.results.slice(1).map((result) => (
              <View key={result.id}>
                {/* <Text>{result.title}</Text> */}
                <Image
                  style={styles.posters}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
                  }}
                />
              </View>
            ))}
          </ScrollView>
          <ScrollView horizontal={true}>
            {data?.results.slice(1).map((result) => (
              <View key={result.id}>
                {/* <Text>{result.title}</Text> */}
                <Image
                  style={styles.posters}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
                  }}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  focusMovieView: {
    backgroundColor: "gray",
    height: 500,
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
    borderRadius: 10,
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
    height: 424,
    width: 283,
    marginBottom: 15,
  },
  focusButtonContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  posters: {
    height: 140,
    width: 93,
  },
  mainContainer: {
    backgroundColor: "black",
  },
  discover: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 10,
  }
});
