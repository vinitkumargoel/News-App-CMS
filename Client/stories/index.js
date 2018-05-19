import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectPointCard from '../src/jsx/components/custom/spokersubviews/SelectPointCard.jsx'
import selectVote from '../src/img/jpg/angry.jpg';
let actions = {
    selectPoint:(obj)=>{action(obj.toString())}
};
// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
//   ));   
storiesOf('SelectPointCard',module)
  .add('initial',()=>(
    <SelectPointCard point={1} image={selectVote} actions={actions}/>
  ))
  .add('selected',()=>(
    <SelectPointCard point={1} image={selectVote} actions={actions}/>
  ))
  .add('notSelected',()=>(
    <SelectPointCard point={1} image={selectVote} actions={actions}/>
  ));