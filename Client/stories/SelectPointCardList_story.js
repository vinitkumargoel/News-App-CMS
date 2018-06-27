import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectPointCardList from '../src/jsx/components/custom/spokersubviews/SelectPointCardList.jsx'
import selectVote from '../src/img/jpg/angry.jpg';
import update from 'immutability-helper'
let actions = {
    selectPoint:(obj)=>{action('Clicked')(obj)}
};
let playerInfo = {isMaster: true,
    'usrid': "",
    'email': "",
    'fileID': "",
    'joined': true,
    'pwd': "",
    'score': "",
    'id': 1,
    'from': "local1"
}
let pointingMethod = [
    'XS', 'S', 'M', 'L', 'XL', 'XXL',
    '?'
];
let votesOpen = true;
let initial = Object.assign({},{playerInfo},{votesOpen},{pointingMethod},{actions});




    storiesOf('SelectPointCardList', module)
    .addDecorator(story => (
        <div style={{ margin:'5% auto', width: '700px', height: '400px', border: '2px solid red', position: 'relative' }}>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>

            {story()}
        </div>
    ))
    .add('initial', () => (
        <SelectPointCardList 
         {...initial}/>
    ))
    .add('selected', () => (
        <SelectPointCardList
         {...update(initial,{playerInfo:{score:{$set:'M'}}})}
         />
    ))
    .add('Votes not open', () => (
        <SelectPointCardList
         {...update(initial,{votesOpen:{$set:false}})}
         />
    ));
