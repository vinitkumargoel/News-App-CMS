import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectPointCardList from '../src/jsx/components/custom/spokersubviews/SelectPointCardList.jsx'
import selectVote from '../src/img/jpg/angry.jpg';
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




    storiesOf('SelectPointCardList', module)
    .addDecorator(story => (
        <div style={{ margin:'5% auto', width: '700px', height: '400px', border: '2px solid red', position: 'relative' }}>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>

            {story()}
        </div>
    ))
    .add('initial', () => (

        <SelectPointCardList playerInfo = {playerInfo}
         pointingMethod={pointingMethod} actions={actions}/>
    ))
    .add('selected', () => (

        <SelectPointCardList playerInfo = {Object.assign({},playerInfo,{'score':'M'})}
         pointingMethod={pointingMethod} actions={actions}/>
    ));
