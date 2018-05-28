import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PublishStoryCard from '../src/jsx/components/custom/spokersubviews/PublishStoryCard.jsx'
// let actions = {
//     selectPoint:(obj)=>{action('Clicked')(obj)}
// };
let initStoryInfo = {
    storyID:'221',
    epic:'MBNA',
    storyflag:'Medium',
    desc:'This is regarding the blah blah blah ipsem lorem'
};
class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {showPublish:false}
    }
    componentDidMount(){
        window.setTimeout(function(){console.log(this.state);this.setState({showPublish:true})}.bind(this),4000)
        window.setTimeout(function(){console.log(this.state);this.setState({showPublish:false})}.bind(this),8000)
    }
    closePublish(){
        this.setState({showPublish:false})
    }
    render(){
        return this.state.showPublish?(<PublishStoryCard closeAction = {this.closePublish.bind(this)} initStoryInfo={initStoryInfo} />):'';
    }
}
storiesOf('PublishStoryCard', module)
    .addDecorator(story => (
        <div style={{ width: '300px', height: '400px', border: '2px solid red', position: 'relative' }}>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
            
            {story()}
        </div>
    ))
    .add('initial', () => (
        <Parent />
       
    ))


    