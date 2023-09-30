import React, { useState } from 'react'

import {
  SearchButton,
  SearchbarContainer,
  SearchbarInput
} from './searchbar-styled'

export const Searchbar = (props) => {

  const [search, setSearch] = useState('')
  const { onSearch } = props

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
    if(e.target.value.length === 0){
      onSearch(undefined)
    }
  }

  const onButtonClickHandler = () => {
    onSearch(search)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onButtonClickHandler();
    }
  }

  return(
    <>
    
    <SearchbarContainer>

    <SearchbarInput placeholder='Search Pokemon' onChange={onChangeHandler} onKeyPress={handleKeyPress}/>
    
    
    <SearchButton onClick={onButtonClickHandler}>Search</SearchButton>
    
    </SearchbarContainer>

    </>
  )
}