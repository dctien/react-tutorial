import React, { Component } from 'react';
import Lession from './Lession';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Course extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShowOutline: false
        };
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleToogleOutline = this.handleToogleOutline.bind(this);
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
    handleToogleOutline(){
        this.setState({
            isShowOutline: !this.state.isShowOutline 
        });
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
        // console.log(this.state);
        let eleOutline = null;
        if(this.state.isShowOutline){
            eleOutline = <ul class="list-group list-group-flush">
                            <Lession />
                            <Lession />
                            <Lession />
                        </ul>;
        }
        return (
            <div className="col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">{this.props.name}</h3>
                    </div>
                    <div className="card-body">
                        <p>{this.props.name}</p>
                        <p>{this.props.children}</p>
                        <button onClick={this.handleToogleOutline} type="button" className="btn btn-success">Toogle Outline</button>
                    {/* <ul class="list-group list-group-flush">
                        <Lession />
                        <Lession />
                        <Lession />
                    </ul> */}
                        {eleOutline}
                    </div>
                    {this.showButtonFree()}
                </div>
            </div>
        )
    }
}

