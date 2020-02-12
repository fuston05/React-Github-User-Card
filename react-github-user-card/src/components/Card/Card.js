import React, { Component } from 'react';

//styles
import './Card.scss';

//components

class Card extends Component {
  render() {
    return (
      <div className='cardCont'>
        <div className='cardHeader'>
          <div className='imgCont'>
            <img alt='user' src={this.props.user.avatar_url} />
          </div>
          <h1>{this.props.user.login}</h1>
          <span className='linkCont'>
            <a rel='noopener noreferrer' target='_blank' href={this.props.user.html_url}>See Full Profile</a>
          </span>
        </div>

        {this.props.user.bio && <p><b>Bio</b>: {this.props.user.bio}</p>}

        <div className='mainInfoCont'>
          <div className='infoCont'>
            {this.props.user.location && <p>Location: {this.props.user.location}</p>}
          </div>

          <div className='expandableInfoCont'>
            {this.props.user.public_repos && <div className='repos'>
              <p>Public Repos: {this.props.user.public_repos}</p>
            </div>}
            {this.props.user.followers && <div className='followers'>
              <p>Followers: {this.props.user.followers}</p>
            </div>}
            {this.props.user.following && <div className='following'>
              <p>Following: {this.props.user.following}</p>
            </div>}
          </div>
        </div> {/**end mainInfoCont*/}
      </div> /**end cardCont */
    )//end return
  }//end render
}//end Card

export default Card
