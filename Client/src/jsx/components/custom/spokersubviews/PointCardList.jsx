import React, { Component } from 'react'
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react'
import votedImg from '../../../../img/png/selectedMinion.png';
import notVotedImg from '../../../../img/jpg/minioncard.jpg';
import PointCard from './PointCard'
class PointCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "userList": [
        { userName: "user1", score: 2 },
        { userName: "user2", score: null },
        { userName: "user3", score: 6 },
        { userName: "user4", score: 3 },
        { userName: "user5", score: null },
        { userName: "user6", score: 9 },
        { userName: "user7", score: 2 },
        { userName: "user8", score: null },
        { userName: "user9", score: 2 },
        { userName: "user10", score: 9 },
        { userName: "user11", score: 2 }
      ]
    }
  }
  render() {
    return (
      <div>
        <Grid columns={7} padded>
          <Grid.Row>
            {
              this.state.userList.map((user) => {
                return (
                  <Grid.Column>
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