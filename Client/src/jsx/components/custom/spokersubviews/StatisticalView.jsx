import React, { Component } from 'react'
import {Input, Table, Grid, Header, Button, Message, Icon,Modal} from 'semantic-ui-react'
import {TempModal} from './common/customComponents';
class StatisticalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            averagePoint:8,
            open:false
        }
    }
    render() {
        return (
            <div>
                <Message color='orange' style={{textAlign:'center', marginTop:'10px'}}>
                    <span>Average Score : {this.state.averagePoint}</span>
                    <Icon style={{marginLeft:'20px',cursor:'pointer'}} name='edit' onClick={()=>{this.setState({open:true})}}/>
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
                    <Grid.Column  floated='right' width={5}>
                        <Button primary>Submit story</Button>
                    </Grid.Column>
                 </Grid.Row>
            </Grid>
            <TempModal open={this.state.open}>
                <Header icon='edit' content='Edit story point' />
            <Modal.Content>
              <p>You are about to edit the story point. Are you sure of this action?</p>
              <Input inverted type='number' placeholder={'New story point..'} />
            </Modal.Content>
            <Modal.Actions floated='left'>
              <Button floated='left' basic color='red' inverted>
                <Icon name='remove' /> Cancel
              </Button>

              <Button color='green' inverted>
                <Icon name='checkmark' /> Submit
              </Button>

            </Modal.Actions>
     </TempModal>
            </div>
        )

    }
}

export default StatisticalView;