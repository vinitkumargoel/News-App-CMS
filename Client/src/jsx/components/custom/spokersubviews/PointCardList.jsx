import React, { Component } from 'react'
import { Card, Icon, Image, Grid, Button, Header, Step } from 'semantic-ui-react'
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
    this.props.toggleShowVotes('true');
  }
  handleClearVotes() {
    this.setState({ 'showVotes': 'false' });
    this.props.toggleShowVotes('false');
  }
  render() {
    return (
      <div>
        <Header textAlign='left' padded="true" as='h3' style={{ marginTop: '14px' }}>Story Points</Header>
        <Grid columns={7} padded>
          <Grid.Row>
            {
              this.props.pointList.length > 0 ? this.props.pointList.map((user, i) => {
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
                        transform: this.state.showVotes == "false" ? 'rotateY(0deg)' : 'rotateY(180deg)'
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
                          <PointCard displayData={user.userName}
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
              }) :
                <Step.Group widths={3}>
                  <Step disabled>
                    <Icon name='idea' />
                    <Step.Content>
                      <Step.Title>They think</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step disabled>
                    <Icon name='protect' />
                    <Step.Content>
                      <Step.Title>They decide</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step disabled>
                    <Icon name='hand pointer' />
                    <Step.Content>
                      <Step.Title>They vote</Step.Title>
                    </Step.Content>
                  </Step>
                </Step.Group>
            }
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Column width={8}></Grid.Column>
          <Grid.Column width={2}></Grid.Column>                    
          <Grid.Column floated='right' width={6}>
            <Button primary disabled={this.props.pointList.length <= 0} onClick={this.handleShowVotes} style={{ marginRight: '30px !important' }}>Show Votes</Button>
            <Button secondary disabled={this.props.pointList.length <= 0} onClick={this.handleClearVotes}>Clear votes</Button>
          </Grid.Column>
        </Grid>
      </div>);
  }
}
export default PointCardList;