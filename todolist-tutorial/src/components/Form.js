import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      task_id:'',
      task_name: '',
      task_level: 0
    }
    this.handleCacel = this.handleCacel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }
  
  componentWillMount(){
    return this.updateItem(this.props.itemSelect)
  } 
  componentWillReceiveProps(nextProps){
    return this.updateItem(nextProps.itemSelect)
    
  }

  updateItem(item){
    if(item !== null){
      this.setState({
        task_id     : item.id,
        task_name   : item.name,
        task_level  : item.level
      })
    }
  }
  /**
   * Thay thế componentWillReceiveProps bằng getDerivedStateFromProps trong React
   * https://viblo.asia/p/thay-the-componentwillreceiveprops-bang-getderivedstatefromprops-trong-react-Do754QBBKM6
   */

  handleCacel(){
    this.props.onClickCancel();
  }  

  handleChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    let item = {
      id: this.state.task_id,
      name: this.state.task_name,
      level: this.state.task_level
    }
    this.props.onClickSubmit(item);
    event.preventDefault();
  }
  render() {
    return (
      <div className="row">
      <div className="col-md-offset-7 col-md-5">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-group">
            <label className="sr-only">label</label>
            <input name="task_name" value={this.state.task_name} onChange={this.handleChange} type="text" className="form-control" placeholder="Task Name" />
          </div>
          <div className="form-group">
            <label className="sr-only">label</label>
            <select name="task_level" value={this.state.task_level} onChange={this.handleChange} className="form-control" required="required" >
              {/* Small */}
              <option value={0}>Small</option>
              <option value={1}>Medium</option>
              <option value={2}>High</option>
            </select>
          </div>
          <button type="submit" value="submit" className="btn btn-primary">Submit</button>
          <button onClick={this.handleCacel} type="button" className="btn btn-default">Cancel</button>
        </form>
      </div>
    </div>
    )
  }
}
