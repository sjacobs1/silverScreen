import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSeriesState } from "../store/seriesState";
import { getSeriesDetails } from "../service/getSeriesDetails";
import { LinearGradient } from "expo-linear-gradient";
import { formatRuntime } from "../utils/formatRuntime";
import { formatDate } from "../utils/formatDate";
import { formatRating } from "../utils/formatRating";
import { HeartIcon, StarIcon } from "react-native-heroicons/outline";
import { BookmarkIcon } from "react-native-heroicons/outline";
import SeasonSegment from "./seasonSegment";
// import {Marquee} from "react-fast-marquee";

const SeriesDetailsComponent = () => {
  const getSelectedSeriesId = useSeriesState(
    (state) => state.getSelectedSeriesId
  );
  const series = getSelectedSeriesId();

  const { isLoading, error, data } = useQuery({
    queryKey: ["seriesDetails", series],
    queryFn: () => (series !== null ? getSeriesDetails(series) : null),
  });

  if (!data) {
    return <Text>No movie selected</Text>;
  }

  return (
    <>
      <View style={styles.seriesBackgroundContainer}>
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
            <View style={styles.seriesInfo}>
              <View style={{ height: 125, justifyContent: "space-between" }}>
                {/* <Marquee> */}
                <Text style={styles.seriesTitle}>{data.name}</Text>
                {/* </Marquee> */}
                <Text style={{ color: "white", fontSize: 13 }}>{`${formatDate(
                  data.first_air_date
                )}`}</Text>
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
                    .slice(0, 2)
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
        <Text style={{ color: "white" }}>{data.id}</Text>
      </View>
      <SeasonSegment numberOfSeasons={data.number_of_seasons} />
    </>
  );
};

export default SeriesDetailsComponent;

const styles = StyleSheet.create({
  backgroundPoster: {
    width: 395,
    height: 221,
  },
  seriesBackgroundContainer: {
    // backgroundColor: "#09172D",
    // backgroundColor: "red",
    height: 230,
    marginBottom: 5,
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
  seriesInfo: {
    height: 200,
    width: 220,
    // backgroundColor: "green",
    paddingLeft: 5,
    justifyContent: "space-between",
  },
  seriesTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  star: {
    fontSize: 12,
    color: "gold",
  },
  rating: {
    color: "white",
    fontWeight: "light",
    fontSize: 12,
  },
  overview: {
    // backgroundColor: "orange",
    marginHorizontal: 15,
    gap: 10,
  },
});
