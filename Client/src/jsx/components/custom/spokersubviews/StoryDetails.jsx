//core imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

//style imports
import styles from '../../../../css/ScrumPokerStyle.css';

//container imports

//component imports
import { languageOptions } from './common/commonData';

//semantic-ui imports
import { Container, Header, Segment, Grid, Input, Icon, Checkbox, Dropdown, Label, Radio, Form, Divider, Button } from 'semantic-ui-react';

//component
class StoryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMaster: this.props.isMaster,
      storyID: this.props.initStoryInfo.storyID,
      epic: this.props.initStoryInfo.epic,
      description: this.props.initStoryInfo.description
    };
  }

  handleInput = (e) => {
    let srcElem = e.target;
    switch (srcElem.id) {
      case "storynum":
        this.setState({ storyID: srcElem.value });
        break;
      case "epic":
        this.setState({ epic: srcElem.value });
        break;
      case "desc":
        this.setState({ description: srcElem.value });
        break;
      default:

    }
  }

  handleClick = (e) => {
    let srcElem = e.target;
    switch (srcElem.id) {
      case "publish":
        this.props.actions.publishStory(this.state);
        break;
      default:

    }
  }

  render() {
    return (
      <Grid columns="equals">
        <Grid.Column width={14}>
          <Header textAlign='left' padded as='h3'>Story details</Header>

          <Grid columns="equals">
            <Grid.Column width={3}>
              <label htmlFor="roomnum">Story number: </label>
            </Grid.Column>
            <Grid.Column width={8}>
              <Input size="mini" placeholder='Enter number' defaultValue={this.state.storyID} onChange={this.handleInput} disabled={!this.state.isMaster} />
            </Grid.Column>
            {/* <label htmlFor="storynum">Story Number : </label>
              <input id="storynum" type="text" value={this.state.storyID} placeholder="Enter Story #"
                onChange={this.handleInput} disabled={!this.state.isMaster} /> */}
          </Grid>

          {/* <div className={styles.epic}>
              <label htmlFor="epic">Epic : </label>
              <input id="epic" type="text" value={this.state.epic} placeholder="Enter epic #"
                onChange={this.handleInput} disabled={!this.state.isMaster} />
            </div> */}

          <Grid columns="equals">
            <Grid.Column width={3}>
              <label htmlFor="roomnum">Story Flag: </label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Dropdown
                button
                className='icon'
                floating
                labeled
                icon='flag'
                options={languageOptions}
                placeholder='Select choice'
              />
            </Grid.Column>
          </Grid>

          <Grid columns="equals">
            <Grid.Column width={3}>
              <label htmlFor="roomnum">Story description: </label>
            </Grid.Column>
            <Grid.Column width={13}>
              <Form>
                <Form.Field control='textarea' rows='3' />
              </Form>
            </Grid.Column>
          </Grid>
            <br/>
          <Grid.Row>
            <Button floated="right" color='blue'>Publish Story</Button>
          </Grid.Row>

          {/* <div className={styles.desc}>
              <label htmlFor="desc">Story Description : </label>
              <textarea id="desc" type="text" value={this.state.description} placeholder="Enter Story Description"
                onChange={this.handleInput} disabled={!this.state.isMaster}></textarea>
            </div> */}
          {/* {(!this.state.isMaster) ? null : <button id="publish" onClick={this.handleClick}>Publish Story</button>} */}
        </Grid.Column>
      </Grid>
    );
  }
}

export default StoryDetails;
