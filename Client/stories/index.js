import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectPointCard from '../src/jsx/components/custom/spokersubviews/SelectPointCard.jsx'
import selectVote from '../src/img/jpg/angry.jpg';
let actions = {
    selectPoint: (obj) => { action('clicked')(obj) }
};
 
storiesOf('SelectPointCard', module)
    .addDecorator(story => (
        <div style={{ width: '300px', height: '400px', border: '2px solid red', position: 'relative' }}>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>

            {story()}
        </div>
    ))
    .add('initial', () => (

        <SelectPointCard point={1} image={selectVote} actions={actions} />
    ))
    .add('selected', () => (
        <SelectPointCard point={1} image={selectVote} actions={actions} />
    ))
    .add('notSelected', () => (
        <SelectPointCard point={1} image={selectVote} actions={actions} />
    ));