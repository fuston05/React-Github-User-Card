import React, { Component } from 'react';
import Card from '../Card/Card';

class CardCreator extends Component {

  render() {
    return (
      <>
        {this.props.users.map((ele) => {
          return <Card
            key={ele.id}
            user={ele}
          />
        })}
      </>
    );//end return
  }//end render
}//end CardCreator

export default CardCreator;
