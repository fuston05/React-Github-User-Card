import React, {Component} from 'react';
import axios from 'axios';

//styles
import './globalStyles/global.scss';

//components
import CardCreator from './components/CardCreator/CardCreator';
import Search from './components/Search/Search';

class App extends Component{
  state= {
    users: [],
    isLoading: false,
    searchResults: [],
    searchTerm: '',
    myFollowersUrl: '',
    myFollowers: [],
    error: ''
  }

  componentDidMount(){
    this.setState({
      isLoading: true
    });
    axios
    .get('https://api.github.com/users/fuston05')
    .then(res => {
      console.log('res data: ', res.data);
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

  componentDidUpdate( prevProps, prevState ){
    //always uses 'if' to compare
    if(prevState.users !== this.state.users){
      axios
      .get(this.state.myFollowersUrl)
      .then(res => {
        console.log('followers: ', res.data);
        this.setState({
          myFollowers: res.data
        });
      })
      .catch(err => {console.log(err);})
    }
      

  }//end update

  functions
  handleSubmit= e => {
    e.preventDefault();
  }//end hendleSubmit

  // handleChange= e => {
  //   console.log('target: ', e.target.value);
  //   this.setState({
  //     searchTerm: e.target.value
  //   });
  // }//end handleChange


  render(){
    
    return (
      
      <div className="App">

      <h1>Github User Card</h1>
      {console.log('followers: ', this.state.myFollowers)}
        {/* display errors */}
        <span className= 'error'>{this.state.error}</span>

        <Search  />

        {this.state.isLoading===true ? <h2>Loading...</h2> : <CardCreator users= {this.state.users} />}

        {this.state.isLoading===true ? <h2>Loading...</h2> : <CardCreator users= {this.state.myFollowers} />}

      </div>
    );//end return
  }//end render
}//end App

export default App;
