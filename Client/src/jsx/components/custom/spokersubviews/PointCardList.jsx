import React, { Component } from 'react'
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react'
import votedImg from '../../../../img/png/selectedMinion.png';
import notVotedImg from '../../../../img/jpg/minioncard.jpg';
import angryImage from '../../../../img/jpg/angry.jpg';
import PointCard from './PointCard';
import PointScoreCard from './PointScoreCard';
class PointCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'showVotes':'false'
    }
    this.handleShowVotes=this.handleShowVotes.bind(this);
    this.handleClearVotes=this.handleClearVotes.bind(this);
  }
  handleShowVotes(){
    this.setState({'showVotes':'true'});
  }
  handleClearVotes(){
    this.setState({'showVotes':'false'});
  }
  render() {
    return (
      <div>
        <Grid columns={7} padded>
          <Grid.Row>
            {
              this.props.pointList.map((user,i) => {
                return (
                  <Grid.Column key={i}>
                    {this.state.showVotes =="false"?<PointCard showvotes={this.state.showVotes} displayData={user.userName} score={user.score} image={user.score != null ? votedImg : notVotedImg} />:<PointScoreCard point={user.score} image={angryImage} actions={()=>{}} displayData={user.userName}/>}
                  </Grid.Column>
                );
              })
            }
          </Grid.Row>
        </Grid>
       <Grid>
         <Grid.Column width={5}></Grid.Column>
          <Grid.Column  floated='right' width={5}>
            <Button primary onClick={this.handleShowVotes} >Show Votes</Button>
            <Button secondary onClick={this.handleClearVotes}>Clear votes</Button>
          </Grid.Column>
      </Grid>
      </div>);
  }
}
export default PointCardList;