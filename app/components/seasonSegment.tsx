import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

interface SeasonSegmentProps {
  numberOfSeasons: number;
  selectedSeason: number;
  onPress: (seasonNumber: number) => void;
}


const SeasonSegment = ({ numberOfSeasons, selectedSeason, onPress }: SeasonSegmentProps) => {

  function getTextStyle(season: number) {
    if (season === selectedSeason) {
      return styles.selectedSeason;
    }
  }

  function getContainerStyle(season: number) {
    if (season === selectedSeason) {
      return styles.selectedSeasonContainer;
    }
  }

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
            <Pressable key={i + 1} style={[styles.individualSeasonContainer, getContainerStyle(i + 1)]} onPress={() => onPress(i + 1)}>
              <Text
                // key={i + 1}
                style={[{
                  color: "#AAAAAD",
                  fontSize: 15,
                  fontWeight: "300",
                }, getTextStyle(i + 1)]}
              >
                Season {i + 1}
              </Text>
            </Pressable>
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
  },
  selectedSeason: {
    // color: "#FF8811",
    color: "#97DFFC",
    fontWeight: "400",
  },
  selectedSeasonContainer: {
    // borderBottomColor: "#FF8811",
    borderBottomColor: "#97DFFC",
  }
});