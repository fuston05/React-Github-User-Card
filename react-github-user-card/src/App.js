import React, { Component } from 'react';
import axios from 'axios';

//styles
import './globalStyles/global.scss';

//components
import CardCreator from './components/CardCreator/CardCreator';
import Search from './components/Search/Search';

class App extends Component {
  state = {
    users: [],
    isLoading: false,
    myFollowersUrl: '',
    myFollowers: [],
    error: '',
    //these states were for the search box if i ever fix it...
    searchResults: [],
    searchTerm: ''
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    //initial axios call for user on Mount
    axios
      .get('https://api.github.com/users/fuston05')
      .then(res => {
        this.setState({
          users: [res.data],
          error: '',
          isLoading: false,
          myFollowersUrl: res.data.followers_url
        })
      })
      .catch(err => {
        this.setState({
          error: err,
        });
        console.log('error from state: ', this.state.error);
      })
  }//end didMount

  componentDidUpdate(prevProps, prevState) {
    // if user state changes fetch the followers url for that user
    if (prevState.users !== this.state.users) {
      axios
        .get(this.state.myFollowersUrl)
        .then(res => {
          this.setState({
            myFollowers: res.data
          });
        })
        .catch(err => { console.log(err); })
    }//end if
  }//end update

  functions
  handleSubmit = e => {
    e.preventDefault();
  }//end hendleSubmit

  // handleChange= e => {
  //   console.log('target: ', e.target.value);
  //   this.setState({
  //     searchTerm: e.target.value
  //   });
  // }//end handleChange

  render() {
    return (
      <div className="App">

        <h1>Github User Card</h1>

        {/* display errors */}
        <span className='error'>{this.state.error}</span>

        <Search />

        {this.state.isLoading === true ? <h2>Loading...</h2> : <CardCreator users={this.state.users} />}

        {this.state.isLoading === true ? <h2>Loading...</h2> : <CardCreator users={this.state.myFollowers} />}
      </div>
    );//end return
  }//end render
}//end App

export default App;
