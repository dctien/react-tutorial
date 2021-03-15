import React, { Component } from 'react'
import Search from './Search'
import Sort from './Sort'

export default class Control extends Component {
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(){
        this.props.onclickAdd();
    }

    render() {
        let {orderBy, orderDir} = this.props

        // console.log(this.props.isShowForm)
        //https://qastack.vn/programming/40177331/what-is-the-shortcut-in-visual-studio-code-for-console-log
        let eleButton = <button onClick={this.handleAdd} type="button" className="btn btn-info btn-block">Add Task</button>;
        if(this.props.isShowForm){
            eleButton =  <button onClick={this.handleAdd} type="button" className="btn btn-success btn-block">Clock Task</button>
        }

        return (
            <div className="row">
                {/* SEARCH : START */}
                <Search onClickGo={this.props.onClickSearchGo}/>
                {/* SEARCH : END */}

                {/* SORT : START */}
                <Sort 
                    onClickSort={this.props.onClickSort}
                    orderBy={orderBy}
                    orderDir={orderDir}
                />
                {/* SORT : END */}

                {/* ADD : START */}
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                {eleButton}
                </div>
                {/* ADD : END */}
            </div> 
        )
    }
}
