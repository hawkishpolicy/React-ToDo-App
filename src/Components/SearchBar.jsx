import React from 'react'
import { MdSearch } from 'react-icons/md'

function SearchBar({handleSearchNote}) {

  return (
    <div className='search'>
        <MdSearch className='search-icon' size='1.3em'/>
        <input type='text' placeholder='type to search...' onChange={(event) =>handleSearchNote(event.target.value)}>
        
        </input>

    </div>
  )
}

export default SearchBar