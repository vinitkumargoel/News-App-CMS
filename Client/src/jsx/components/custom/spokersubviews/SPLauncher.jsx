//core imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Input, Icon, Form, Divider, Grid, Image, Button } from 'semantic-ui-react';


//style imports

//container imports

//component imports


//component
function CLabel(props){
  return <span><label>{props.children}</label>{props.required&&<span style={{color:'red'}}>*</span>}</span>;
}
class SPLauncher extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.initLaunch;
  }

  handleInput = (e, props) => {
    let srcElem = e.target;
    switch (srcElem.id) {
      case "isMaster":
        this.setState({ isMaster: srcElem.checked, createLink: false });
        break;
      case "roomid":
        this.setState({ roomid: srcElem.value, createLink: false });
        break;
      case "email":
        this.setState({ email: srcElem.value, createLink: false });
        break;
      case "usrid":
        this.setState({ usrid: srcElem.value, createLink: false });
        break;
      case "pwd":
        this.setState({ pwd: srcElem.value, createLink: false });
        break;
      default:

    }
  }

  handleClick = (e) => {
    let srcElem = e.target;
    switch (srcElem.id) {
      case "join":
        this.props.actions.joinRoom(this.state);
        break;
      case "create":
        this.props.actions.createRoom(this.state);
        break;
      default:

    }
  }

  render() {
    return (
      <Form>

        <Grid columns={2}>
          <Grid.Row centered>
            <Grid.Column width={5} >
              <h4>Join a Room</h4>
              <Grid padded='horizontally'>

                <Grid.Row columns={2}>
                  <Grid.Column width={4} verticalAlign='middle'>
                    <CLabel required>Session ID</CLabel>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Form.Input error required id="roomid" type='text' value={this.state.roomid} onChange={this.handleInput} placeholder='XXXXX' fluid />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2} >
                  <Grid.Column width={4} verticalAlign='middle'>
                    <label>Name</label>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Input id="usrid" type='text' value={this.state.usrid} placeholder='Enter name' fluid onChange={this.handleInput} />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column width={4} verticalAlign='middle'>
                    <label>Email ID</label>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Input id="email" type='email' value={this.state.email} placeholder='someone@example.com' fluid onChange={this.handleInput} />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row><Form.Checkbox id="isMaster" checked={this.state.isMaster} fluid label='Join as Admin' onChange={this.handleInput} /></Grid.Row>
                <Grid.Row><Link to="/dashboard/spoker/join">
                  <Button id="join" color='blue' onClick={this.handleClick}>Join Room</Button></Link></Grid.Row>

              </Grid>

            </Grid.Column>

            <Grid.Column width={1}>
              <Divider vertical>Or</Divider>
            </Grid.Column>

            <Grid.Column width={5}>
              <h4>Want to create a room?</h4>

              <Button color='green'><Icon name='plus' color='white' />Create Room</Button>

            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Form>

      // <div className={'login-wrapper'}>
      //   <h3>Create or Join a Room</h3>
      //   <div className={'login-section1'}>
      //     <h4>Join a Room</h4>
      //     <Form>
      //       <Form.Field inline>
      //         <label>Session ID*</label>
      //         <Input type='text' placeholder='XXXXX' />
      //       </Form.Field>
      //       <Form.Field inline>
      //         <label>Name</label>
      //         <Input type='text' placeholder='Enter name' />
      //       </Form.Field>

      //       <Form.Checkbox fluid label='Join as Admin' />
      //       <Form.Button>Join Room</Form.Button>
      //     </Form>
      //     <Divider vertical>Or</Divider>
      //   </div>
      //   <div className={'login-section2'}>
      //     <h4>Want to create a room?</h4>
      //     <Icon name='group' size='massive' />
      //     <Form>
      //       <Form.Field inline>
      //         <label>Session ID*</label>
      //         <Input type='text' placeholder='XXXXX' />
      //       </Form.Field>
      //       <Form.Field inline>
      //         <label>Name</label>
      //         <Input type='text' placeholder='Enter name' />
      //       </Form.Field>

      //       <Form.Checkbox fluid label='Join as Admin' />
      //       <Form.Button>Join Room</Form.Button>
      //     </Form>
      //   </div>
      //   <form>
      //     <div>
      //       <label htmlFor="roomid">Room Number : </label>
      //       <Input placeholder='Enter room #' id="roomid" value={this.state.roomid} onChange={this.handleInput}>
      //         <Icon name='group' size='large' />
      //         <input />
      //       </Input>
      //       <input id="roomid" type="text" value={this.state.roomid} placeholder="Enter room #"
      //         onChange={this.handleInput} />
      //     </div>
      //     <div className={styles.usrid}>
      //       <label htmlFor="usrid">User Name : </label>
      //       <Input placeholder='Search...' />
      //       <input id="usrid" type="text" value={this.state.usrid} placeholder="Enter Username"
      //         onChange={this.handleInput} />
      //     </div>

      //     <div className={styles.email}>
      //       <label htmlFor="email">Email ID : </label>
      //       <Input placeholder='Search...' />
      //       <input id="email" type="email" value={this.state.email} placeholder="Enter EmailId"
      //         onChange={this.handleInput} />
      //     </div>

      //     {(!this.state.isMaster) ? null :
      //       <div className={styles.pwd}>
      //         <label htmlFor="pwd">Password : </label>
      //         <Input placeholder='Search...' />
      //         <input id="pwd" type="password" value={this.state.pwd} placeholder="Enter Password"
      //           onChange={this.handleInput} />
      //       </div>
      //     }

      //     <div className={styles.isMaster}>
      //       <Input placeholder='Search...' />
      //       <input id="isMaster" type="checkbox" checked={this.state.isMaster}
      //         onChange={this.handleInput} />
      //       <label htmlFor="isMaster"><small>join as admin</small></label>
      //     </div>

      //     <Link id="join" className={styles.join} to="/dashboard/spoker/join"
      //       onClick={this.handleClick}>Join</Link>

      //     <h6>----OR-----</h6>

      //     <Link id="create" className={styles.create} to="/dashboard/spoker/create"
      //       onClick={this.handleClick}>Create</Link>
      //   </form>
      // </div>
    );
  }
}

export default SPLauncher;
