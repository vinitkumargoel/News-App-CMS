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
import { updateStoreInput } from './common/utils';

//semantic-ui imports
import { Container, Header, Segment, Grid, Input, Icon, Checkbox, Dropdown, Label, Radio, Form, Divider, Button } from 'semantic-ui-react';

//component
class StoryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyid: "",
      epic: "",
      storyflag : "",
      description: ""
    };
  }

  handleInput = (e,data) => {
    let srcElem = (data)?data:e.target;
    switch (srcElem.id) {
      case "storyid":
        this.setState({ storyid: srcElem.value });
        break;
      case "epic":
        this.setState({ epic: srcElem.value });
        break;
      case "storyflag":
        this.setState({ storyflag: data.value });
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
      <Grid columns="equal">
        <Grid.Column width={14}>
          <Header textAlign='left' padded="true" as='h3'>Story details</Header>

          <Grid columns="equal">
            <Grid.Column width={3}>
              <label htmlFor="storyid">Story number: </label>
            </Grid.Column>
            <Grid.Column width={8}>
              <Input id="storyid" size="mini" placeholder='Enter number' defaultValue={this.state.storyid} onChange={this.handleInput} disabled={!this.props.isMaster} />
            </Grid.Column>
            {/* <label htmlFor="storynum">Story Number : </label>
              <input id="storynum" type="text" value={this.state.storyID} placeholder="Enter Story #"
                onChange={this.handleInput} disabled={!this.state.isMaster} /> */}
          </Grid>
          <Grid columns="equal">
            <Grid.Column width={3}>
              <label htmlFor="epic">Epic : </label>
            </Grid.Column>
            <Grid.Column width={8}>
              <Input id="epic" size="mini" placeholder='Enter number' defaultValue={this.state.epic} onChange={this.handleInput} disabled={!this.props.isMaster} />
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

          <Grid columns="equal">
            <Grid.Column width={3}>
              <label htmlFor="storyflag">Story Flag: </label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Dropdown
                button
                id="storyflag"
                className='icon'
                floating
                labeled
                selection
                disabled={!this.props.isMaster}
                icon='flag'
                options={languageOptions}
                placeholder='Select choice'
                defaultValue={this.state.storyflag} 
                onChange={this.handleInput}
              />
            </Grid.Column>
          </Grid>

          <Grid columns="equal">
            <Grid.Column width={3}>
              <label htmlFor="desc">Story description: </label>
            </Grid.Column>
            <Grid.Column width={13}>
              <Form>
                <Form.Field id="desc" disabled={!this.props.isMaster} 
                defaultValue={this.state.description} onChange={this.handleInput} control='textarea' rows='3' />
              </Form>
            </Grid.Column>
          </Grid>
            <br/>
          <Grid.Row>
            {(this.props.isMaster)?<Button id="publish" onClick={this.handleClick} floated="right" color='blue'>Publish Story</Button>:null}
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
