import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

interface SeasonSegmentProps {
  numberOfSeasons: number;
}

const SeasonSegment = ({ numberOfSeasons }: SeasonSegmentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.seasonsHeader}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
          contentContainerStyle={{
            // paddingLeft: 15,
            justifyContent: numberOfSeasons < 5 ? "space-around" : undefined,
            width: numberOfSeasons < 5 ? "100%" : undefined,
          }}
        >
          {Array.from({ length: numberOfSeasons }, (_, i) => (
            <View key={i + 1} style={styles.individualSeasonContainer}>
              <Text
                // key={i + 1}
                style={{
                  color: "#AAAAAD",
                  fontSize: 15,
                  fontWeight: "300",
                }}
              >
                Season {i + 1}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default SeasonSegment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1b2637",
    height: 200,
    marginTop: 15,
    paddingTop: 10,
  },
  seasonsHeader: {
    // height: 28,
    flexDirection: "row",
    // backgroundColor: "green",
    width: "100%",
    // alignSelf: "stretch",
  },
  scroll: {
    alignSelf: "center",
    // backgroundColor: "red",
    width: "100%",
  },
  individualSeasonContainer: {
    // backgroundColor: "blue",
    paddingHorizontal: 15,
    borderBottomColor: "#454a56",
    // borderBottomColor: "#97DFFC",
    borderBottomWidth: 2,
    paddingBottom: 5,
    flex: 1,
    alignItems: "center",
    // height: 25,
    width: "100%",
  }
});