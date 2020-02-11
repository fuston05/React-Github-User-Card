import React, {Component} from 'react';
import axios from 'axios';

//styles

//components
import CardCreator from './components/CardCreator/CardCreator';
import Search from './components/Search/Search';

class App extends Component{
  state= {
    users: [],
    isLoading: false,
    searchResults: [],
    searchTerm: '',
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
        users: res.data,
        error: '',
        isLoading: false
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
        {/* display errors */}
        <span className= 'error'>{this.state.error}</span>
        <Search  
        searchTerm= {this.state.searchTerm}
        handleSubmit= {this.handleSubmit}
        handleChange= {this.handleChange}
        />
        {this.state.isLoading===true ? <h2>Loading...</h2> : <CardCreator />}
      </div>
    );//end return
  }//end render
}//end App

export default App;
