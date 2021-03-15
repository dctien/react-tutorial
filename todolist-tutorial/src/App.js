import './App.css';
import React, { Component } from 'react';
import Title from './components/Title'
import Control from './components/Control'
import Form from './components/Form'
import List from './components/List'
import tasks from './Mock/Task'
// import library lodash 
import {filter, includes, orderBy as funcOrderBy} from 'lodash'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items     : tasks, 
      isShowForm: false, 
      strSearch :'',
      orderBy   : 'Name',
      orderDir  : 'ASC'
    }

    this.handleToogleForm = this.handleToogleForm.bind(this);
    this.clockForm        = this.clockForm.bind(this);
    this.handleSearch     = this.handleSearch.bind(this);
    this.handleSort       = this.handleSort.bind(this);
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
  handleSort(orderBy, orderDir){
    this.setState({
      orderBy   : orderBy,
      orderDir  : orderDir
    })
  }

  render() {
    // console.log(tasks);
    let itemOrigin = [...this.state.items];
    let items = [];
    // let search = this.state.strSearch;
    // let isShowForm = this.state.isShowForm;
    let eleForm = null;
    let {orderBy, orderDir, isShowForm, strSearch} = this.state;
    
    // Search
    items = filter(itemOrigin,(item)=>{
      return includes(item.name.toLowerCase(), strSearch.toLowerCase());
    });

    //Sort
    items = funcOrderBy(items, [orderBy], [orderDir]);

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
          orderBy         ={orderBy}
          orderDir        ={orderDir}
          onClickSort     ={this.handleSort}
          onClickSearchGo ={this.handleSearch}
          isShowForm      ={isShowForm}
          onclickAdd      ={this.handleToogleForm}
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

