import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getDiscoverMovies } from "../service/getDiscoverMovies";
import { Result } from "../model/discoverMovie";

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["movies"],
    queryFn: getDiscoverMovies,
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {data?.results.map((result) => (
            <View key={result.id}>
              <Text>{result.title}</Text>
              <Image
                style={{ height: 200, width: 200 }}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
                }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
