//core imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

//style imports
import styles from '../../../../css/ScrumPokerStyle.css';

//container imports

//component imports
import { languageOptions } from './common/commonData';
import { updateStoreInput, validate } from './common/utils';


//semantic-ui imports
import { Container, Message, Header, Segment, Grid, Input, Icon, Checkbox, Dropdown, TextArea, Label, Radio, Form, Divider, Button } from 'semantic-ui-react';

//component
class StoryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFields: {
        storyID:{ value: '', type: 'number', required: true, error: false, show: true },
        storyflag: { value: '', type: 'select', required: true, error: false, show: true },
        epic: { value: '', type: 'text', required: true, error: false, show: true },
        desc: { value: '', type: 'text', required: true, error: false, show: true },
      },
      storyList:[],
      formError: true,
    };
    
  }

  handleInput = (e, data) => {
    let srcElem = data;
    let key = srcElem.id;
    this.setState((prevState) => {
      let result = update(prevState, {
        inputFields: {
          [key]: {
            value:
            { $set: srcElem.value }
          }
        }
      });
      return result;
    });
    this.setState((prevState) => {
      let formError = !validate(JSON.parse(JSON.stringify(prevState)), srcElem.type);
      return { formError };

    })
  }

  handleClick = (e) => {
    let srcElem = e.target;
    let state = this.state;
    switch (srcElem.id) {
      case "publish":
        let data = {};
        Object.keys(state.inputFields).forEach((item) => { data[item] = state.inputFields[item].value });
        this.props.actions.publishStory(data);
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
              <label htmlFor="storyid">Story ID: </label>
            </Grid.Column>
            <Grid.Column width={8}>
              {(!this.props.isMaster)?<label id="storyID">{this.props.initStoryInfo.storyID}</label>
              :<Input id="storyID" type='number' value={this.state.inputFields.storyID.value} size="mini" placeholder='Enter number' onChange={this.handleInput} disabled={!this.props.isMaster} />}
            </Grid.Column>

          </Grid>
          <Grid columns="equal">
            <Grid.Column width={3}>
              <label htmlFor="epic">Epic : </label>
            </Grid.Column>
            <Grid.Column width={8}>
              {(!this.props.isMaster)?<label id="epic">{this.props.initStoryInfo.epic}</label>:
              <Input value={this.state.inputFields.epic.value} type='text' id="epic" size="mini" placeholder='Enter epic name'
                onChange={this.handleInput} disabled={!this.props.isMaster} />}
            </Grid.Column>

          </Grid>
          <Grid columns="equal">
            <Grid.Column width={3}>
              <label htmlFor="storyflag">Story Flag: </label>
            </Grid.Column>
            <Grid.Column width={9}>
              {(!this.props.isMaster)?<label id="storyflag">{this.props.initStoryInfo.storyflag}</label>:
              <Dropdown
                button
                value={this.state.inputFields.storyflag.value}
                id="storyflag"
                className='icon'
                floating
                labeled
                selection
                disabled={!this.props.isMaster}
                icon='flag'
                options={languageOptions}
                placeholder='Select choice'
                onChange={this.handleInput}
              />}
            </Grid.Column>
          </Grid>

          <Grid columns="equal">
            <Grid.Column width={3}>
              <label htmlFor="desc">Story description: </label>
            </Grid.Column>
            <Grid.Column width={13}>
              {(!this.props.isMaster)?<label id="desc">{this.props.initStoryInfo.desc}</label>:
              <Form>
                <TextArea rows={3} value={this.state.inputFields.desc.value} id="desc" placeholder='Tell us more' disabled={!this.props.isMaster} onChange={this.handleInput} />
              </Form>}
            </Grid.Column>
          </Grid>
          <br />
          <Grid.Row centered>
            {(this.props.isMaster&&this.state.formError) &&<Message
              error={this.state.formError}
              content='Please make sure the values entered are correct'
            />}
          </Grid.Row>
          <br />

          <Grid.Row>
            {(this.props.isMaster) ? <Button id="publish" disabled={this.state.formError} onClick={this.handleClick} floated="right" color='blue'>Publish Story</Button> : null}
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default StoryDetails;
