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
      'showVotes': 'false'
    }
    this.handleShowVotes = this.handleShowVotes.bind(this);
    this.handleClearVotes = this.handleClearVotes.bind(this);
  }
  handleShowVotes() {
    this.setState({ 'showVotes': 'true' });
  }
  handleClearVotes() {
    this.setState({ 'showVotes': 'false' });
  }
  render() {
    return (
      <div>
        <Grid columns={7} padded>
          <Grid.Row>
            {
             this.props.pointList.length>0? this.props.pointList.map((user, i) => {
                return (
                  <Grid.Column key={i}>
                    <div className="flip-container" style={{
                      perspective: '1000px', width: '80px',
                      height: '200px'
                    }} >
                      <div className="flipper" style={{
                        transition: '0.6s',
                        transformStyle: 'preserve-3d',
                        position: 'relative',
                        transform: this.state.showVotes == "false"?'rotateY(0deg)':'rotateY(180deg)'
                      }}>
                        <div className="front" style={{
                          width: '80px',
                          height: '200px',
                          backfaceVisibility: 'hidden',
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          zIndex: '2',
                          /* for firefox 31 */
                          transform: 'rotateY(0deg)'
                        }}>
                          <PointCard  displayData={user.userName}
                            score={user.score} image={user.score != null ? votedImg : notVotedImg} />
                        </div>
                        <div className="back" style={{
                          width: '80px',
                          height: '200px',
                          backfaceVisibility: 'hidden',
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          transform: 'rotateY(180deg)'
                        }} >
                          <PointScoreCard point={user.score}
                            image={angryImage} actions={() => { }} displayData={user.userName} />
                        </div>
                      </div>
                    </div>
                  </Grid.Column>
                )
              }):null
            }
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Column width={5}></Grid.Column>
          <Grid.Column floated='right' width={7}>
            <Button primary onClick={this.handleShowVotes} >Show Votes</Button>
            <Button secondary onClick={this.handleClearVotes}>Clear votes</Button>
          </Grid.Column>
        </Grid>
      </div>);
  }
}
export default PointCardList;