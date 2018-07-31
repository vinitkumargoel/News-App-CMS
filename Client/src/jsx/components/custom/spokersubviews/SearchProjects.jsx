import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'



export default class SearchProjects extends Component {
   
    // {
    //     text: 'Jenny Hess',
    //     value: 'Jenny Hess',
    //     image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    //   }
    getProjectOptions = (projectArray) => {
        if (!Array.isArray(projectArray) || !projectArray.length)
            return null;

        let resultArr = projectArray.map((project) => {
            let result = (({ id: key, name: text, avatarUrls: { "32x32": image } }) => ({ value: `${key}:${text}`, key, text, image: { avatar: true, src: image } }))(project);
            return result;
        });
        return resultArr;
    }
    render() {
        // console.log('rendering');
        return <Dropdown placeholder='Select Project' fluid search
            selection options={this.getProjectOptions(this.props.projectsList)} />
    }
}

