import React, { Component } from 'react';
import { Dropdown,Icon,Button,List,Modal,Image,Header } from 'semantic-ui-react'
import { TempModal } from './common/customComponents';



export default class SearchIssues extends Component {
    constructor(props){
        super(props);
        this.state= {
            open:false
        }
    }
    handleLoadMore = () => {
        this.props.actions.setFetchIssues(true);
    }
    open =()=>{
        this.setState({open:true});   
    }
    close =()=>{
        this.setState({open:false});   
    }
    onChange = (e, data) => {
        this.props.actions.setIssue(data.id);
    }
    getIssuesOptions = (issuesArray) => {
        if (!Array.isArray(issuesArray) || !issuesArray.length)
            return null;

        let resultArr = issuesArray.reduce((AccuArr, issuePage) => {
            return AccuArr.concat(issuePage.issues);
        }, []);
        //resultArr = resultArr.map((issue) => {
        //    let result = (({ id: key, key: text, fields: { issuetype: { iconUrl: image } } }) => ({ value: `${key}`, key, text, image: { avatar: true, src: image } }))(issue);
        //    return result;
        //})
        return resultArr;
    }
    render() {
        let IssuesOptions = this.getIssuesOptions(this.props.issuesList);
        return (<div>
            <Button color='green' inverted onClick={this.open}>
                    <Icon name='checkmark' /> Select Issue
            </Button>
            <TempModal open={this.state.open} >
            <Header icon='exclamation' content='Oh!' />
            <Modal.Content>
                {(Array.isArray(IssuesOptions) && IssuesOptions.length)&&IssuesOptions.map((issue) => {
                    return (<List selection verticalAlign='middle'>
                        <List.Item onClick={this.onChange}>
                            <Image avatar src={issue.fields.issuetype.iconUrl} />
                            <List.Content>
                                <List.Header>{issue.key}</List.Header>
                                <List.Description>{issue.fields.summary}</List.Description>
                            </List.Content>
                            {issue.fields.assignee && <Image avatar title={issue.fields.assignee.displayName}
                                src={issue.fields.assignee.avatarUrls["32x32"]} />}
                        </List.Item>
                    </List>);
                })}
                <Button color='blue' inverted onClick={this.handleLoadMore}>
                    <Icon name='checkmark' /> Load More
                </Button>
            </Modal.Content>
            <Modal.Actions floated='right'>
                <Button color='green' inverted onClick={this.close}>
                    <Icon name='checkmark' /> Okay
                        </Button>

            </Modal.Actions>
        </TempModal></div>)

        //  <Dropdown placeholder='Select Issues' fluid search
        //     selection value={this.props.issue} options={this.getIssuesOptions(this.props.issuesList)}
        //     onChange={this.onChange} />
    }
}

