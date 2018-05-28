//core imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Message, Input, Icon, Form, Divider, Grid, Image, Button } from 'semantic-ui-react';
import update from 'immutability-helper';
// import {
//   Form, Input, TextArea, Checkbox, Radio, RadioGroup, Dropdown, Select,
// } from 'formsy-semantic-ui-react';
import { updateStoreInput } from './common/utils';

//style imports

//container imports

//component imports


//component
function CLabel(props) {
  return <span><label>{props.children}</label>{props.required && <span style={{ color: 'red' }}>*</span>}</span>;
}
class SPLauncher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: { value: '', type: 'email', error: false },
      isMaster: false,
      joined: false,
      pwd: { value: '', type: 'password', required: true, error: false },
      roomid: { value: '', type: 'number', required: true, error: false },
      usrid: { value: '', type: 'text', required: true, error: false },
      formError: true
    };
  }

  validate = (state) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let valid = Object.keys(state).every((item) => {
      let field = state[item];
      if (field.required == true) {
        if (item == 'pwd' && state.isMaster) {
          let result = field.value.trim() !== '';
          // state[item].error = !result;
          return result;
        }
        else if (item !== 'pwd') {
          let result = field.value.trim() !== '';
          // state[item].error = !result;
          return result;
        }
      }
      else
        if (field.type == 'email') {
          let result = field.value.trim() === ''?true:re.test(field.value.toLowerCase());
          state[item].error = !result;
          return result;
        }

      return true;
    });
    state.formError = !valid;
    return state;
  }

  handleInput = (e, props) => {
    let srcElem = e.target;

    switch (srcElem.id) {
      case "isMaster":
        this.setState({ isMaster: srcElem.checked, createLink: false });
        break;
      case "roomid":
        this.setState((prevState) => {
          return update(prevState, {
            [srcElem.id]: { value: { $set: srcElem.value } },
          });
        });
        break;
      case "email":
        this.setState((prevState) => {
          return update(prevState, {
            [srcElem.id]: { value: { $set: srcElem.value } },
          });
        });
        break;
      case "usrid":
        this.setState((prevState) => {
          return update(prevState, {
            [srcElem.id]: { value: { $set: srcElem.value } },
          });
        });
        break;
      case "pwd":
        this.setState((prevState) => {
          return update(prevState, {
            [srcElem.id]: { value: { $set: srcElem.value } },
          });
        });
        break;
      default:

    }
    this.setState((prevState) => {
      return this.validate(JSON.parse(JSON.stringify(prevState)));

    })
  }

  handleClick = (e) => {
    let srcElem = e.target;
    let storeChunk = this.props.initLaunch;
    let currentState = this.state;
    switch (srcElem.id) {
      case "join":
        updateStoreInput(storeChunk, currentState);
        this.props.actions.joinRoom(storeChunk);
        break;
      case "create":
        updateStoreInput(storeChunk, currentState);
        this.props.actions.createRoom(storeChunk);
        break;
      default:

    }
  }

  render() {
    let state = this.state;
    return (
      <Form error={state.formError}>

        <Grid columns={3}>
          <Grid.Row centered>
            <Grid.Column width={5} >
              <h4>Join a Room</h4>
              <Grid padded='horizontally'>

                <Grid.Row columns={2}>
                  <Grid.Column width={4} verticalAlign='middle'>
                    <CLabel required>Room ID</CLabel>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Form.Input error={state.roomid.error} required id="roomid" type='number' value={state.roomid.value} onChange={this.handleInput} placeholder='XXXXX' fluid />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2} >
                  <Grid.Column width={4} verticalAlign='middle'>
                    <CLabel required>Name</CLabel>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Input error={state.usrid.error} required id="usrid" type='text' value={state.usrid.value} placeholder='Enter name' fluid onChange={this.handleInput} />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column width={4} verticalAlign='middle'>
                    <label>Email ID</label>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Input error={state.email.error} id="email" type='email' value={state.email.value} placeholder='someone@example.com' fluid onChange={this.handleInput} />
                  </Grid.Column>
                </Grid.Row>
                {(!state.isMaster) ? null :
                  <Grid.Row columns={2}>
                    <Grid.Column width={4} verticalAlign='middle'>
                      <CLabel required>Password</CLabel>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <Input error={state.pwd.error} required id="pwd" type="password" value={state.pwd.value} placeholder="Enter Password" fluid onChange={this.handleInput} />
                    </Grid.Column>
                  </Grid.Row>

                }
                <Grid.Row><Form.Checkbox id="isMaster" checked={state.isMaster} fluid="true" label='Join as Admin' onChange={this.handleInput} /></Grid.Row>
                <Grid.Row>
                  {state.formError&&<Message
                    error={state.formError}
                    content='Please make sure the values entered are correct'
                  />}</Grid.Row>
                <Grid.Row>
                  <Link to={"/dashboard/spoker/join"} style={{pointerEvents:state.formError?'none':'auto'}}>
                    <Button disabled={state.formError} id="join" color='blue' onClick={this.handleClick}>Join Room</Button>
                  </Link>
                </Grid.Row>


              </Grid>

            </Grid.Column>

            <Grid.Column width={1}>
              <Divider vertical>Or</Divider>
            </Grid.Column>

            <Grid.Column width={5}>
              <h4>Want to create a room?</h4>
              <Grid.Row><Icon name='group' size='massive' /></Grid.Row>

              <Grid.Row><Link to="/dashboard/spoker/create">
                <Button id="create" color='green' onClick={this.handleClick}>
                  <Icon name='plus' color='olive' />Create Room</Button>
              </Link></Grid.Row>


            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Form >
    );
  }
}

export default SPLauncher;
