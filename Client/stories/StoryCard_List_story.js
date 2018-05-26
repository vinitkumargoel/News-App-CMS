import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryCards from '../src/jsx/components/custom/spokersubviews/StoryCards.jsx'
// let actions = {
//     selectPoint:(obj)=>{action('Clicked')(obj)}
// };
let StoryList = [{
    storyID: '221',
    epic: 'MBNA',
    storyflag: 'Medium',
    desc: 'This is regarding the blah blah blah ipsem lorem',
    size: 'L',
    highestStoryPoint: 4,
    leastStoryPoint: 5,
    topVotedPoint:3,
    averageStoryPoint: 6,
    peopleVoted: 4,
    peopleNotVoted: 2,
}, {
    storyID: '222',
    epic: 'MBNA',
    storyflag: 'Medium',
    desc: 'This issdf regarding the blah blah blah ipsem lorem',
    size: 'M',
    highestStoryPoint: 4,
    leastStoryPoint: 5,
    topVotedPoint:3,
    averageStoryPoint: 6,
    peopleVoted: 4,
    peopleNotVoted: 2,
}, {
    storyID: '223',
    epic: 'MBNA',
    storyflag: 'Medium',
    desc: 'This is fdgregarding the blah blah blah ipsem lorem',
    size: 'XL',
    highestStoryPoint: 4,
    leastStoryPoint: 5,
    averageStoryPoint: 6,
    topVotedPoint:3,
    peopleVoted: 4,
    peopleNotVoted: 2,

}, {
    storyID: '224',
    epic: 'MBNA',
    storyflag: 'Medium',
    desc: 'This issdf regarding the blah blah blah ipsem lorem',
    size: 'XXL',
    highestStoryPoint: 4,
    leastStoryPoint: 5,
    topVotedPoint:3,
    averageStoryPoint: 6,
    peopleVoted: 4,
    peopleNotVoted: 2,

}];

storiesOf('Story Cards List', module)
    .addDecorator(story => (
        <div style={{ width: '300px', height: '400px', border: '2px solid red', position: 'relative' }}>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>

            {story()}
        </div>
    ))
    .add('initial', () => (
        // <Parent />
        <StoryCards sizingMethod={'T - shirt'} storyList={StoryList} />

    ))


