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

//semantic-ui components
import { Container, Header, Segment, Grid, Input, Icon, Checkbox, List, Label, Radio, Form, Divider, Button } from 'semantic-ui-react';

//component
class RoomConfig extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.initRoomInfo;
        this.state.hideList = false;
    }

    handleInput = (e) => {
        let srcElem = e.target;
        switch (srcElem.id) {
            case "roomnum":
                this.setState({ roomnum: srcElem.value });
                break;
            case "password":
                this.setState({ password: srcElem.value });
                break;
            case "isDefault":
                this.setState({ isDefault: srcElem.checked, hideList: !this.state.isDefault });
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
            default:

        }
    }

    handleChange = (e, { value }) => this.setState({ value })

    render() {

        const Fib_no = [
            '1', '2', '3', '4', '5', '6',
            '7', '8', '9', '10',
        ]
        const Exp_no = [
            '1', '2', '3', '4', '5', '6',
            '7', '8', '9', '10',
        ]
        const Nrml_no = [
            '1', '2', '3', '4', '5', '6',
            '7', '8', '9', '10',
        ]
        const T_no = [
            '1', '2', '3', '4', '5', '6',
            '7', '8', '9', '10',
        ]


        return (
            <Grid columns='equal'>
                <Grid.Column>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Segment>
                        <Container>
                            <Header textAlign='left' padded as='h3'>Configure Room</Header>
                            <Grid padded="horizontally" columns="equals">
                                <Grid.Column width={6}>
                                    <Form.Field required>
                                        <Grid columns="equals">
                                            <Grid.Column width={6} verticalAlign='middle'>
                                                <label htmlFor="roomnum">Room number : </label>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Input size="mini" placeholder='Enter Name' defaultValue={this.state.roomnum} onChange={this.handleInput} />
                                            </Grid.Column>
                                            <Grid.Column width={6} verticalAlign='middle'>
                                                <label htmlFor="roomnum">Room name : </label>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Input size="mini" placeholder='Enter Name' />
                                            </Grid.Column>
                                            <Grid.Column width={6} verticalAlign='middle'>
                                                <label htmlFor="roomnum">Name : </label>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Input size="mini" placeholder='Enter Name' />
                                            </Grid.Column>
                                            <Grid.Column width={6} verticalAlign='middle'>
                                                <label htmlFor="roomnum">File ID : </label>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Input type="number" size="mini" placeholder='Enter Name' />
                                            </Grid.Column>
                                            <Grid.Column width={6} verticalAlign='middle'>
                                                <label htmlFor="roomnum">Password : </label>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Input size="mini" type="password" placeholder='Enter Name' defaultValue={this.state.password} onChange={this.handleInput} />
                                            </Grid.Column>
                                        </Grid>
                                    </Form.Field>
                                </Grid.Column>

                                <Grid.Column width={2} stretched>
                                    <Divider vertical>And</Divider>
                                </Grid.Column>


                                <Grid.Column width={8}>
                                    <Header textAlign='left' padded as='h4'>Select a pointing method</Header>
                                    {/* <div>
                                        <Checkbox label='Use default pointing (Fibonacci method)' checked={this.state.isDefault} onChange={this.handleInput} /> */}
                                    {/* <input id="isDefault" type="checkbox" checked={this.state.isDefault}
                                    onChange={this.handleInput} /> */}
                                    {/* <label htmlFor="isDefault"><small>default method</small></label>ß
                                    </div> */}

                                    {/* {(this.state.hideList) ? null : <div>
                                <ol>
                                    <li>
                                        <ul>
                                            <li>0</li>
                                            <li>1</li>
                                            <li>2</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>} */}

                                    <Form>
                                        <Form.Field>
                                            Selected value: <b>{this.state.value}</b>
                                        </Form.Field>
                                        <Form.Field>
                                            <Radio
                                                label=''
                                                name='radioGroup'
                                                value='Fibonacci'
                                                checked={this.state.value === 'Fibonacci'}
                                                onChange={this.handleChange}
                                            />
                                            {Fib_no.map(fibno => <Label circular color="orange" size='big' key={fibno}>{fibno}</Label>)}
                                        </Form.Field>
                                        <Form.Field>
                                            <Radio
                                                label=''
                                                name='radioGroup'
                                                value='Exponential'
                                                checked={this.state.value === 'Exponential'}
                                                onChange={this.handleChange}
                                            />
                                            {Exp_no.map(expno => <Label circular color="teal" size='big' key={expno}>{expno}</Label>)}
                                        </Form.Field>
                                        <Form.Field>
                                            <Radio
                                                label=''
                                                name='radioGroup'
                                                value='Normal'
                                                checked={this.state.value === 'Normal'}
                                                onChange={this.handleChange}
                                            />
                                            {Nrml_no.map(nrmlno => <Label circular color="pink" size='big' key={nrmlno}>{nrmlno}</Label>)}
                                        </Form.Field>
                                        <Form.Field>
                                            <Radio
                                                label=''
                                                name='radioGroup'
                                                value='Tshirt'
                                                checked={this.state.value === 'Tshirt'}
                                                onChange={this.handleChange}
                                            />
                                            {T_no.map(tno => <Label circular color="blue" size='big' key={tno}>{tno}</Label>)}
                                        </Form.Field>
                                    </Form>

                                </Grid.Column>

                            </Grid>

                            <Grid columns="equals">
                                <Grid.Column width={6} />
                                <Grid.Column width={3}>
                                    <Button color="green">
                                        <Icon name='plus' />Create
                                    </Button>
                                </Grid.Column>
                                <Grid.Column />
                            </Grid>
                            {/* <Link id="join" className={styles.join} to="/dashboard/spoker/join"
                                onClick={this.handleClick}>Start Session</Link> */}
                        </Container>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
            </Grid>

        );
    }
}

export default RoomConfig;
