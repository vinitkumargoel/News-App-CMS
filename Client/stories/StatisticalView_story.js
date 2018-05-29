import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StatisticalView from '../src/jsx/components/custom/spokersubviews/StatisticalView'
let actions = {
    selectPoint:(obj)=>{action('Clicked')(obj)}
};
let pointList = [{
score:1,
},{
    score:2,

},
{
    score:1,

},
{
    score:3,

}];
let roomInfo={
    roomnum:234234,
    roomname:'sdfsdf',
    pwd:'dd',
    adminName:'manoj',
    fileID:'222',
    pointingMethod:'Exponential',
    id:0,
    from:'local0'
};
let playerList = ['ravi','apurva','rohit'];
storiesOf('StatisticalView', module)
    .addDecorator(story => (
        <div style={{ width: '300px', height: '400px', border: '2px solid red', position: 'relative' }}>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>

            {story()}
        </div>
    ))
    .add('initial', () => (

        <StatisticalView pointList={pointList} roomInfo={roomInfo} playerList={playerList}
         actions={actions} />
    ))
