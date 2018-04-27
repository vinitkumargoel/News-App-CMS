import React, { Component } from 'react'
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react'
import votedImg from '../../../../img/png/selectedMinion.png';
import notVotedImg from '../../../../img/jpg/minioncard.jpg';
import PointCard from './PointCard'
class PointCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
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
                    <PointCard displayData={user.userName} score={user.score} image={user.score != null ? votedImg : notVotedImg} />
                  </Grid.Column>
                );
              })
            }
          </Grid.Row>
        </Grid>
       <Grid>
         <Grid.Column width={5}></Grid.Column>
          <Grid.Column  floated='right' width={5}>
            <Button primary>Show Votes</Button>
            <Button secondary>Clear votes</Button>
          </Grid.Column>
      </Grid>
      </div>);
  }
}
export default PointCardList;