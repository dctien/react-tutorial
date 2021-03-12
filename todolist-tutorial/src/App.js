import './App.css';
import React, { Component } from 'react';
import Title from './components/Title'
import Control from './components/Control'
import Form from './components/Form'
import List from './components/List'

// import library lodash 
import {filter, includes } from 'lodash'

import tasks from './Mock/Task'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: tasks, 
      isShowForm: false, 
      strSearch:''
    }

    this.handleToogleForm = this.handleToogleForm.bind(this);
    this.clockForm = this.clockForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  handleToogleForm(){
    this.setState({
      isShowForm : !this.state.isShowForm
    });
  }

  clockForm(){
    this.setState({
      isShowForm: false
    })
  }
  handleSearch(value){
    this.setState({strSearch: value})  
  }

  render() {
    // console.log(tasks);
    let itemOrigin = [...this.state.items];
    let items = [];
    let search = this.state.strSearch;
    let isShowForm = this.state.isShowForm;
    let eleForm = null;
    
    items = filter(itemOrigin,(item)=>{
      return includes(item.name, search)
    })
    
    if(isShowForm){
      eleForm = <Form onClickCancel={this.clockForm}/>
    }
    return (
      <div >
        {/* Title: start */}
        <Title />
        {/* Title: end */}

        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control 
          onClickSearchGo={this.handleSearch}
          isShowForm={isShowForm}
          onclickAdd={this.handleToogleForm}
        />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        
        {/* FORM : START */}
        {eleForm}
        {/* FORM : END */}

        {/* LIST : START */}
        <List items ={items}/>
      </div>
    );
  }
}

