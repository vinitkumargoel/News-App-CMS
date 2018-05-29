//core imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

//style imports
import styles from '../../../../css/ScrumPokerStyle.css';

//component imports
import { TempModal } from './common/customComponents';

//semantic-ui imports
import { Grid, Button, Divider, Card, Modal, List, Segment, Header, Icon } from 'semantic-ui-react';

//component
class StoryCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      story: {},
    };
    this.userRefs = {};

  }
  closeModal = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  }
  openModal = function (story) {
    console.log('wokring', story);
    this.setState((prevState) => ({ open: !prevState.open, story }));
  }
  setRef = function (refObject = 'userRefs', refName, ref) {
    this[refObject][refName] = ref;
    console.log('setting', ref);
  }
  getRef = (refObject = 'userRefs', refName) => {
    return this[refObject][refName];
  }
  scrollHandler = (e) => {
    if (e.target.scrollTop) {
      this.setState({ raise: true });
    }
    else {
      this.setState({ raise: false })
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <Segment>
        <Grid textAlign='center'>
          <Grid.Row style={{ borderBottom: '1px solid #ded2d2', zIndex: 10, boxShadow: this.state.raise ? '0 8px 6px -6px grey' : '' }}>

            <Header padded="true" as='h3' >Stories Estimated</Header>

          </Grid.Row>
          <Grid.Row onScroll={this.scrollHandler} style={{ overflowY: 'auto', minHeight: '600px', maxHeight: '600px' }}>
            {this.props.storyList.length <= 0 ?
              <p>No Stories discussed yet</p>
              :
              this.props.storyList.map((story, index) => (
                <Card fluid key={index} style={{ marginRight: '1%', marginLeft: '1%' }}>
                  <Card.Content>
                    <Card.Header>
                      Story {` - ${story.storyID}`}
                    </Card.Header>
                    <Card.Meta>
                      <strong>{` ${story.storyflag} `}</strong> priority
                </Card.Meta>
                    <Card.Description>
                      <strong>{` ${story.epic} `} </strong>Epic<br />
                      <strong>{` ${story.size} `} </strong> Size
                    {/* <strong>{` - ${story.desc} `}</strong> has been published for voting. */}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui one buttons'>
                      <Button basic onClick={this.openModal.bind(this, story)} color='green'>Details</Button>
                    </div>
                  </Card.Content>
                </Card>))
            }
          </Grid.Row>
        </Grid>
        <TempModal open={this.state.open} remainingProps={{ basic: false }}>
          <Header icon='info' content={`Details of the story - ${this.state.story.storyID}`} />
          <Modal.Content>
            <Header as='h3'>
              {`    ${this.state.story.desc}`}
            </Header>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  Epic <strong>{` : ${this.state.story.epic} `}</strong>
                  <br />
                  Priority <strong>{` : ${this.state.story.storyflag} `}</strong>
                </Grid.Column>
                <Grid.Column>
                  Size <strong>{` : ${this.state.story.size} `}</strong>
                  <br />
                  Sizing Method <strong>{` : ${this.props.sizingMethod} `}</strong>
                </Grid.Column>

              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  Highest Story Point <strong>{` : ${this.state.story.highestStoryPoint} `}</strong>
                  <br />
                  Least Story Point <strong>{` : ${this.state.story.leastStoryPoint} `}</strong>
                </Grid.Column>
                <Grid.Column>
                  Average Story Point <strong>{` : ${this.state.story.averageStoryPoint} `}</strong>
                  <br />
                  Top Voted Point <strong>{` : ${this.state.story.topVotedPoint} `}</strong>
                </Grid.Column>

              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  People Voted <strong>{` : ${this.state.story.peopleVoted} `}</strong>
                  <br />
                  People Not Voted <strong>{` : ${this.state.story.peopleNotVoted} `}</strong>
                </Grid.Column>
              </Grid.Row>

            </Grid>


          </Modal.Content>
          <Modal.Actions floated='left'>
            <Button color='red' inverted onClick={this.closeModal}>
              <Icon name='close' /> Close
              </Button>

          </Modal.Actions>
        </TempModal>
      </Segment>
    );
  }
}

export default StoryCards;
