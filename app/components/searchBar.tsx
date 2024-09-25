import { StyleSheet, Text, View, Platform } from 'react-native'
import React, { useState } from 'react'
import { SearchBar } from '@rneui/themed';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid'
import {XCircleIcon} from 'react-native-heroicons/solid'
import { useSearchState } from '../store/searchState';

const SearchBarComponent = () => {
  const { query, setQuery } = useSearchState(state => state);
  const [search, setSearch] = useState(query)

  const updateSearch = () => {
    setQuery(search)
  }

  return (
        <SearchBar
        placeholder='search movies or series'
        inputContainerStyle={{backgroundColor: '#21252B'}}
        containerStyle={{backgroundColor: '#09172D', borderBlockColor: '#09172D'}}
        inputStyle={{color: 'white'}}
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={updateSearch}
        showCancel={true}
        platform='ios'
        searchIcon={<MagnifyingGlassIcon color='#97DFFC'/>}
        clearIcon={<XCircleIcon color='gray' onPress={() => setSearch("")}/>}
        cancelButtonProps={{color: '#FF8811'}}
        />    
  )
}

export default SearchBarComponent

const styles = StyleSheet.create({})