import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className='searchCont'>
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor='search'>Search: </label>
          <input
            name='search'
            type='text'
            id='search'
          />
          {/* <button type= 'submit'>Submit</button> */}
        </form>
      </div>
    )//end return
  }//end render
}//end Search

export default Search;
