import { useState } from 'react'
import jsonData from '../data.json';

function SearchBar(props) {

    const [search, setSearch] = useState('')

    
    const searchChange = (event) => {
    setSearch(event.target.value)
    props.findProduct(event.target.value)
    }
    
    return (
      <div>
          <label>Search </label><br></br>
          <input className='searchInput' onChange = {searchChange} type="text" value={search}/>
          
      </div>
    );
  }
  
  export default SearchBar;