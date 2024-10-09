import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { useMovieState } from "../store/movieState";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../service/getMovieDetails";
import { LinearGradient } from "expo-linear-gradient";
import { formatRating } from "../utils/formatRating";
import { formatRuntime } from "../utils/formatRuntime";
import { HeartIcon } from "react-native-heroicons/outline";
import { BookmarkIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/outline";
import { formatDate } from "../utils/formatDate";
import CastCarousel from "./castCarousel";
import { getMovieCredits } from "../service/getMovieCredits";
import { formatCurrency } from "../utils/formatCurrency";
import { Link } from "expo-router";
import MoviePoster from "./moviePoster";
import SimilarMoviesCarousel from "./similarMoviesCarousel";

const MovieDetailsComponent = () => {
  const getSelectedMovieId = useMovieState((state) => state.getSelectedMovieId);
  const movie = getSelectedMovieId();
  // const movieId = movie?.id
  const { isLoading, error, data } = useQuery({
    queryKey: ["movieDetails", movie],
    queryFn: () => (movie !== null ? getMovieDetails(movie) : null),
  });

  const { data: credits } = useQuery({
    queryKey: ["movieCast", movie],
    queryFn: () => (movie !== null ? getMovieCredits(movie) : null),
  });

  if (!data) {
    return <Text>No movie selected</Text>;
  }

  return (
    <>
      <View style={styles.movieBackgroundContainer}>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`,
          }}
          style={styles.backgroundPoster}
          blurRadius={3}
        >
          <LinearGradient
            colors={["transparent", "#09172D"]}
            start={[0.5, 0.1]}
            locations={[0.1, 1]}
            style={styles.linearGradient}
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${data?.poster_path}`,
              }}
              style={styles.poster}
            />
            <View style={styles.movieInfo}>
              <View style={{ height: 125, justifyContent: "space-between" }}>
                <Text style={styles.movieTitle}>{data.title}</Text>
                <Text style={{ color: "white", fontSize: 12 }}>
                  {formatRuntime(data.runtime)}
                  <Text>{`  |  ${formatDate(data.release_date)}`}</Text>
                </Text>
                <Text style={styles.star}>
                  ★{" "}
                  <Text style={styles.rating}>
                    {formatRating(data.vote_average)}{" "}
                    <Text style={{ fontSize: 12 }}>
                      {" "}
                      {`(${data.vote_count} reviews)`}
                    </Text>
                  </Text>
                </Text>
                <Text style={{ fontSize: 12, color: "white" }}>
                  {data.genres
                    .slice(0, 3)
                    .map((genre) => genre.name)
                    .join(" / ")}
                </Text>
              </View>
              <View style={{ backgroundColor: "blue" }}></View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: 50,
                }}
              >
                <View
                  style={{
                    // backgroundColor: "gray",
                    borderRadius: 100,
                    borderColor: "#97DFFC",
                    borderWidth: 1,
                    height: 40,
                    width: 40,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <HeartIcon color="white" size={21} />
                </View>
                <View
                  style={{
                    // backgroundColor: "gray",
                    borderRadius: 100,
                    borderColor: "#97DFFC",
                    borderWidth: 1,
                    height: 40,
                    width: 40,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BookmarkIcon color="white" size={21} />
                </View>
                <View
                  style={{
                    // backgroundColor: "gray",
                    borderRadius: 100,
                    borderColor: "#97DFFC",
                    borderWidth: 1,
                    height: 40,
                    width: 40,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <StarIcon color="white" size={21} />
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.overview}>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontWeight: "300",
          }}
        >
          {data.tagline ? data.tagline : data.overview}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontWeight: "300",
            marginBottom: data.tagline ? 0 : -20,
          }}
        >
          {data.tagline ? data.overview : ""}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#1b2637",
          marginTop: 20,
          paddingVertical: 15,
          marginBottom: 10
        }}
      >
        <View
          style={{
            marginBottom: 10,
            marginHorizontal: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FF8811" }}>
            |<Text style={{ color: "white", fontWeight: "400" }}> Cast</Text>
          </Text>
          <Text style={{ color: "#97DFFC" }}>See All</Text>
        </View>
        <CastCarousel cast={credits?.cast ?? []} />
      </View>
      {/* <Text style={{ color: "white" }}>{data.id}</Text> */}
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 15,
          backgroundColor: "#1b2637",
          paddingVertical: 15,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 19, fontWeight: "bold", color: "#FF8811" }}>
          |
          <Text style={{ color: "white", fontWeight: "400" }}>
            {" "}
            More Details
          </Text>
        </Text>
        <View style={{ marginTop: 10 }}>
          <View style={{ gap: 2 }}>
            <Text style={{ color: "white", fontSize: 13, fontWeight: "400" }}>
              Budget
            </Text>
            <Text style={{ color: "white", fontSize: 13, fontWeight: "300" }}>
              {formatCurrency(data.budget)}
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              borderBottomColor: "#676e7a",
              borderBottomWidth: 1,
              marginVertical: 10,
            }}
          ></View>

          <View style={{ gap: 2 }}>
            <Text style={{ color: "white", fontSize: 13, fontWeight: "400" }}>
              Revenue
            </Text>
            <Text style={{ color: "white", fontSize: 13, fontWeight: "300" }}>
              {formatCurrency(data.revenue)}
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              borderBottomColor: "#676e7a",
              borderBottomWidth: 1,
              marginVertical: 10,
            }}
          ></View>

          <View style={{ gap: 2 }}>
            <Text style={{ color: "white", fontSize: 13, fontWeight: "400" }}>
              Spoken Language
            </Text>
            <Text style={{ color: "white", fontSize: 13, fontWeight: "300" }}>
              {data.spoken_languages[0]?.english_name ?? "N/A"}
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              borderBottomColor: "#676e7a",
              borderBottomWidth: 1,
              marginVertical: 10,
            }}
          ></View>

          <View style={{ gap: 2 }}>
            <Text style={{ color: "white", fontSize: 13, fontWeight: "500" }}>
              Country of Origin
            </Text>
            <Text style={{ color: "white", fontSize: 13, fontWeight: "300" }}>
              {data.origin_country}
            </Text>
          </View>
        </View>
      </View>

      <View style={{}}>
      <View
          style={{
            marginBottom: 5,
            marginHorizontal: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FF8811" }}>
            |<Text style={{ color: "white", fontWeight: "400" }}> Recommended</Text>
          </Text>
          <Text style={{ color: "#97DFFC" }}>See All</Text>
        </View>
        <SimilarMoviesCarousel movieId={data.id} />
      </View>
    </>
  );
};

export default MovieDetailsComponent;

const styles = StyleSheet.create({
  movieBackgroundContainer: {
    // backgroundColor: "#09172D",
    // backgroundColor: "red",
    height: 230,
    marginBottom: 5,
  },
  backgroundPoster: {
    width: 395,
    height: 221,
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    // opacity: 1,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  poster: {
    height: 200,
    width: 140,
    borderRadius: 5,
  },
  movieInfo: {
    height: 200,
    width: 220,
    // backgroundColor: "green",
    paddingLeft: 5,
    justifyContent: "space-between",
  },
  movieTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  rating: {
    color: "white",
    fontWeight: "light",
    fontSize: 12,
  },
  star: {
    fontSize: 12,
    color: "gold",
  },
  overview: {
    // backgroundColor: "orange",
    marginHorizontal: 15,
    gap: 10,
  },
});
