import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import NowPlayingList from "../components/nowPlayingList";
import { getDiscoverSeries } from "../service/getDiscoverSeries";
import TVList from "../components/tvList";

const SeeAllTV = () => {
    const { data: dataSeries } = useQuery({
        queryKey: ["series"],
        queryFn: getDiscoverSeries,
      });

  return (
    <SafeAreaView style={{ backgroundColor: "#09172D" }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={{ fontSize: 20, color: "#FF8811" }}>
            ⎮<Text style={styles.header}>TV</Text>
          </Text>
        </View>
        <FlatList
          data={dataSeries?.results}
          renderItem={({ item }) => <TVList series={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{ gap: 10 }}
          contentContainerStyle={{ gap: 10, paddingBottom: 110,}}
        //   style={{ marginTop: 10 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default SeeAllTV;

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
