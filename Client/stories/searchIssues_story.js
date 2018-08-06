import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchIssues from '../src/jsx/components/custom/spokersubviews/SearchIssues.jsx';
import issuesList from '../src/stubData/issues.json';
let actions = {
    setIssue:(id)=>{action('Clicked')(id)}
};
let initial = {
    issuesList:issuesList.issues,
    issue:null,
    actions
};

storiesOf('SearchIssues', module)
    .addDecorator(story => (
        <div style={{ margin:'5% auto', width: '700px', height: '400px', border: '2px solid red', position: 'relative' }}>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>

            {story()}
        </div>
    ))
    .add('initial', () => (
        <SearchIssues 
        
         {...initial}/>
    ))
    .add('selected', () => (
        <SearchIssues 
        
         {...Object.assign({},initial,{issue:'863793'})}/>
    ));