import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectPointCard from '../src/jsx/components/custom/spokersubviews/SelectPointCard.jsx'
import selectVote from '../src/img/jpg/angry.jpg';
import BackgroundEffect from '../src/jsx/components/custom/spokersubviews/common/background';
const colors=['#93CDB2','#BEDFCF','#E83666','#D9D9D9','#F9EEA7','#FFBE0B','#FB5607'];
let actions = {
    selectPoint:(obj)=>{action('Clicked')(obj)}
};

 
storiesOf('SelectPointCard', module)
    .addDecorator(story => (
        <div style={{ margin:'10% auto', width: '150px', height: '200px', border: '2px solid red', position: 'relative' }}>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>

            {story()}
        </div>
    ))
    .add('initial', () => (

        <SelectPointCard selected={null} point={1} image={selectVote} actions={actions} />
    ))
    .add('selected', () => (
        <SelectPointCard selected={true} point={1} image={selectVote} actions={actions} />
    ))
    .add('notSelected', () => (
        <SelectPointCard selected={false} point={1} image={selectVote} actions={actions} />
    ));

    storiesOf('background comp', module)
    .addDecorator(story => (
        <div style={{ margin:'5% auto', width: '700px', height: '400px', border: '2px solid red', position: 'relative' }}>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>

            {story()}
        </div>
    ))
    .add('initial', () => (

        <BackgroundEffect action = {action('clicked')}/>
    ));
  