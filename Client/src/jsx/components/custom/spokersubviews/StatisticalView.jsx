import React, { Component } from 'react'
import { Input, Table, Grid, Header, Button, Message, Icon, Modal,Dropdown } from 'semantic-ui-react'
import { TempModal } from './common/customComponents';
import { pmData } from './common/commonData';
import update from 'immutability-helper';
import { updateStoreInput, validate } from './common/utils';

class StatisticalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFields: {
                pointInput: { value: '', type: 'select', required: false, error: false, show: true },
            },
            pointsCount: {
                "1": 4,
                "2": 6,
                "3": 7,
                "4": 5,
                "5": 9,
                "6": 5
            },
            votingDetails: {
                "Highest story point": 3,
                "Least story Point": 1,
                "Average story Point": 4,
                "People voted": 9,
                "People who didn't vote": 5
            },
            averagePoint: 8,
            open: false,
            formError:true
        }
    }
    handleClick = (e, data) => {
        if (e.target.innerText.trim() === 'Cancel') {
            this.setState({ open: false });
        }
        else if(e.target.innerText.trim()==='Submit'){

            this.setState({ open: false, averagePoint: this.state.inputFields.pointInput.value });
        }
        else{
            this.setState({ open: true });
            
        }

    }
    handleChange = (e, data) => {

        let srcElem = data;
        let key = srcElem.name;
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
    render() {
        const pointOptions = pmData[this.props.roomInfo.pointingMethod].map((item) =>
            ({ key: item, text: item, value: item }));
        return (
            <div>
                <Message color='orange' style={{ textAlign: 'center', marginTop: '10px' }}>
                    <span>Average Score : {this.state.averagePoint}</span>
                    <Icon style={{ marginLeft: '20px', cursor: 'pointer' }} name='edit' onClick={this.handleClick} />
                </Message>
                <Header textAlign='center' padded="true" as='h2'>Statistical View</Header>
                <Grid>
                    <Grid.Column width="8">
                        <Table celled size="small">
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Story points</Table.HeaderCell>
                                    <Table.HeaderCell>Number of People selected</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {Object.keys(this.state.pointsCount).map((key) => {
                                    return (
                                        <Table.Row key={key}>
                                            <Table.Cell>{key}</Table.Cell>
                                            <Table.Cell>{this.state.pointsCount[key]}</Table.Cell>
                                        </Table.Row>)
                                })}
                            </Table.Body>
                        </Table>
                    </Grid.Column >
                    <Grid.Column width="8">
                        <Table celled size="small">
                            <Table.Body>
                                {Object.keys(this.state.votingDetails).map((key) => {
                                    return (
                                        <Table.Row key={key}>
                                            <Table.Cell><b>{key}</b></Table.Cell>
                                            <Table.Cell>{this.state.votingDetails[key]}</Table.Cell>
                                        </Table.Row>)
                                })}
                            </Table.Body>
                        </Table>
                    </Grid.Column >
                    <Grid.Row>
                        <Grid.Column width={11}></Grid.Column>
                        <Grid.Column floated='right' width={5}>
                            <Button primary>Submit story</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <TempModal open={this.state.open}>
                    <Header icon='edit' content='Edit story point' />
                    <Modal.Content>
                        <p>You are about to edit the story point. Are you sure of this action?</p>
                        <Dropdown
                            inverted
                            value={this.state.inputFields.pointInput.value}
                            name="pointInput"
                            selection
                            options={pointOptions}
                            placeholder='New story point..'
                            onChange={this.handleChange}
                        />
                        {/* <Input inverted type='number' placeholder={'New story point..'} onChange={this.handleChange} />  */}
                    </Modal.Content>
                    <Modal.Actions floated='left'>
                        <Button floated='left' basic color='red' inverted onClick={this.handleClick}>
                            <Icon name='remove' /> Cancel
              </Button>

                        <Button color='green' inverted onClick={this.handleClick}>
                            <Icon name='checkmark' /> Submit
              </Button>

                    </Modal.Actions>
                </TempModal>
            </div>
        )

    }
}

export default StatisticalView;