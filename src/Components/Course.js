import React, { Component } from 'react';
import Lession from './Lession';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Course extends Component {
    constructor(props){
        super(props);
        this.handleClick3 = this.handleClick3.bind(this);
    }
    handleClick(){
        alert("Vũ Thị Khánh Chi");
    }
    handleClick2(content){
        alert(content);
    }
    handleClick3(){
        alert(this.props.name);
    }
    showButtonFree(){
        const isFree = this.props.free;
        if(isFree === true){
            return <div className="card-footer">
                <div className="btn-group">
                <button onClick={this.handleClick} type="button" className="btn btn-warning">view1</button>
                <button onClick={()=>this.handleClick2("btn")} type="button" className="btn btn-danger">view2</button>
                <button onClick={this.handleClick3} type="button" className="btn btn-success">view3</button>
                </div>
            </div>
        } 
    }
    render() {
        return (
            <div className="col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">{this.props.name}</h3>
                    </div>
                    <div className="card-body">
                        <p>{this.props.name}</p>
                        <p>{this.props.children}</p>
                    <ul class="list-group list-group-flush">
                        <Lession />
                        <Lession />
                        <Lession />
                    </ul>
                    </div>
                    {this.showButtonFree()}
                </div>
            </div>
        )
    }
}

