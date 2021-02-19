import React, { Component } from 'react';
import Lession from './Lession';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Course extends Component {
    render() {
        return (
            <div>
                <div className="card card-headig">
                        <h3 className="card-title">reactjs</h3>
                    </div>
                    <div className="card-body">
                        <Course />
                        <ul>
                            <Lession />
                            <Lession />
                            <Lession />
                            {/* <li className="list-group-item">Item 1</li>
                            <li className="list-group-item">Item 2</li>
                            <li className="list-group-item">Item 3</li> */}
                        </ul>
                    </div>
            </div>
        )
    }
}

