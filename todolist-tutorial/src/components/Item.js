import React, { Component } from 'react'

export default class Item extends Component {

    showElementLevel(level){
        let eleLevel = <span className="label label-danger">High</span>
        if(level===0){
            eleLevel = <span className="label label-default">Small</span>
        } else if(level === 1){
            eleLevel = <span className="label label-info">Medium</span>
        };
        return eleLevel;
    }

    render() {
        const {item} =this.props;
        const {index} =this.props;
        // hoặc const index =this.props.index;
        
        return (
            <tr>
                <td className="text-center">{index + 1 }</td>
                <td>{item.name}</td>
                <td className="text-center">{this.showElementLevel(item.level)}</td>
                <td>
                <button type="button" className="btn btn-warning">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}
