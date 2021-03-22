import React, { Component } from 'react';
import Title from './components/Title'
import Control from './components/Control'
import Form from './components/Form'
import List from './components/List'
// import tasks from './Mock/Task'
// import library lodash, uuid
import {filter, includes, orderBy as funcOrderBy, remove, reject} from 'lodash'
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items     : null, 
      isShowForm: false, 
      strSearch :'',
      orderBy   : 'Name',
      orderDir  : 'ASC',
      itemSelect: null
    }

    // this.handleToogleForm = this.handleToogleForm.bind(this);
    this.clockForm        = this.clockForm.bind(this);
    this.handleSearch     = this.handleSearch.bind(this);
    // this.handleSort       = this.handleSort.bind(this);
    this.handleDelete     = this.handleDelete.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
    this.handleEdit       = this.handleEdit.bind(this);
  }

  componentWillMount(){
    let item = JSON.parse(localStorage.getItem('task'))
    this.setState({items: item})
  }

  handleSubmit(item){
    let {items} = this.state;
    let id = null;
    if(item.id !== ''){ //edit
      items = reject(items, { id: item.id });
      id = item.id
    }else{  //add
      id = uuidv4();
    }
    items.push({
      id    : id, 
      name  : item.name,
      level : +item.level // with + convert string to number
    })
    this.setState({
      items: items,
      isShowForm: false
    })

    localStorage.setItem('task',JSON.stringify(items))
  }
  handleToogleForm = () =>{
    this.setState({
      isShowForm : !this.state.isShowForm,
      itemSelect: null
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
  handleSort = (orderBy, orderDir) => {
    this.setState({
      orderBy   : orderBy,
      orderDir  : orderDir
    })
  }
  handleDelete(id){
    let items = this.state.items
    remove(items,(item)=>{
      return item.id === id
    })
    this.setState({
      items: items
    })
  }
  handleEdit(item){
    this.setState({
      itemSelect: item,
      isShowForm: true
    })
  }

  render() {
    // console.log(tasks);
    let itemOrigin =(this.state.items!==null) ? [...this.state.items] : [];
    let items = [];
    // let search = this.state.strSearch;
    // let isShowForm = this.state.isShowForm;
    let eleForm = null;
    let {orderBy, orderDir, isShowForm, strSearch, itemSelect} = this.state; 
    
    // Search
    items = filter(itemOrigin,(item)=>{
      return includes(item.name.toLowerCase(), strSearch.toLowerCase());
    });

    //Sort
    items = funcOrderBy(items,[orderBy], [orderDir]);

    if(isShowForm){
      eleForm = <Form 
        itemSelect   = {itemSelect} 
        onClickSubmit={this.handleSubmit} 
        onClickCancel={this.clockForm}/>
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
        <List 
          onClickDelete={this.handleDelete}
          onClickEdit={this.handleEdit}
          items ={items}/>
      </div>
    );
  }
}

