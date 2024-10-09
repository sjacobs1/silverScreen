import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Cast } from '../model/creditsModel'
import { formatInitials } from '../utils/castInitials'

interface CastCarouselProps {
 cast: Cast[] 
}

const CastCarousel = ({cast}: CastCarouselProps) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} contentContainerStyle={{gap: 15, paddingRight: 15}} showsHorizontalScrollIndicator={false} style={{paddingLeft: 15}}>
      {cast.slice(0, 15).map((castMember) => (
        <View key={castMember.id} style={{justifyContent: "center", alignItems: "center", width: 100}}>
        {castMember.profile_path ? (<Image
          source={{ uri: `https://image.tmdb.org/t/p/w500/${castMember.profile_path}` }}
          style={styles.poster}
        />) : <View style={[styles.poster, {backgroundColor: "#363636", justifyContent: "center", alignItems: "center"}]}><Text style={{color: "white", fontSize: 20}}>{formatInitials(castMember.name)}</Text></View>}
        <Text style={{color: "white", fontSize: 13, fontWeight: "400"}} numberOfLines={1} ellipsizeMode="tail">{castMember.name}</Text>
        <Text style={{color: "white", fontSize: 13, fontWeight: "300"}} numberOfLines={1} ellipsizeMode="tail">{castMember.character}</Text>
        </View>
        
      ))}
      </ScrollView>
    </View>  )
}

export default CastCarousel

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "orange",
    // marginLeft: 15,
  },
  poster: {
    borderRadius: 100,
    height: 85,
    width: 85,
    marginBottom: 5,
    // borderColor: "#09172D",
    // borderWidth: 2
  }
})