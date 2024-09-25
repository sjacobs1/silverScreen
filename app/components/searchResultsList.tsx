import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { KnownFor, Result } from "../model/searchResults";

interface SearchResultsListProps {
  result: Result;
}

const SearchResultsList = ({ result }: SearchResultsListProps) => {
  return (
    <View>
      {result.poster_path || result.profile_path ? (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${
              result.poster_path || result.profile_path
            }`,
          }}
          style={styles.poster}
        />
      ) : (
        <View style={styles.missingPoster}>
          <Text style={styles.title}>
            {result.name ||
              result.title ||
              result.original_title ||
              result.original_name}
          </Text>
        </View>
      )}
    </View>
  );
};

export default SearchResultsList;

const styles = StyleSheet.create({
  poster: {
    width: 114,
    height: 170,
    borderRadius: 5,
  },
  missingPoster: {
    width: 114,
    height: 170,
    borderRadius: 5,
    backgroundColor: "#21252B",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
  },
});
