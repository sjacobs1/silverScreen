import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import SearchBarComponent from "../components/searchBar";
import { useQuery } from "@tanstack/react-query";
import { searchQuery } from "../service/searchQuery";
import SearchResultsList from "../components/searchResultsList";
import { useSearchState } from "../store/searchState";

const Search = () => {
const query = useSearchState(state => state.query)

  const { isLoading, error, data } = useQuery({
    queryKey: ["searchResults", query],
    queryFn: () => searchQuery(query),
  });

  return (
    <SafeAreaView style={styles.safeContainer}>
      <SearchBarComponent />
      <View style={{ paddingHorizontal: 15 }}>
        <FlatList
          data={data?.results}
          renderItem={({ item }) => <SearchResultsList result={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{ gap: 10 }}
          contentContainerStyle={{ gap: 10, paddingBottom: 110 }}
          //   style={{ marginTop: 10 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  safeContainer: {
    height: "100%",
    // backgroundColor: "white",
    backgroundColor: "#09172D",
  },
});
