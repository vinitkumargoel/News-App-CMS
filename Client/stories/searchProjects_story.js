import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchProjects from '../src/jsx/components/custom/spokersubviews/SearchProjects.jsx';
import projectsList from '../src/stubData/projects.json';

let initial = {
    projectsList,
};

storiesOf('SearchProjects', module)
    .addDecorator(story => (
        <div style={{ margin:'5% auto', width: '700px', height: '400px', border: '2px solid red', position: 'relative' }}>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>

            {story()}
        </div>
    ))
    .add('initial', () => (
        <SearchProjects 
         {...initial}/>
    ));