import React from "react";

import {
    FaMinus,
    FaPlus
  } from "react-icons/fa";

class CreateSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      Question: "",
      count:1,
      Options: [{ id: 0 ,content : "" }]
     };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(i, e) {
    let Options = this.state.Options;
    Options[i][e.target.name] = e.target.value;
    this.setState({ Options });
  }

  handleChangeQuestion(e) {
    let Question = this.state.Question;
    Question = e.target.value;
    this.setState({ Question });
  }

  addFormFields() {
    this.setState( {count : this.state.count + 1})
    this.setState(({
      Options: [...this.state.Options, {id:this.state.count , content: "" }]
    }))
  }

  removeFormFields(i) {
    let Options = this.state.Options;
    Options.splice(i);
    this.setState({ Options });
    this.setState( {count : i })

  }

  handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state.Question));
    alert(JSON.stringify(this.state.Options));
  }

  render() {
    const Options = this.state.Options; 
    return (
        <div className="form-popup">
            <form className="form-container" onSubmit={this.handleSubmit}>
                <label for="question"><b>Question</b></label>
                <input type="text" placeholder="Enter Question" name="question" onChange={e => this.handleChangeQuestion(e)} required/>
                <label for="option"><b>Option</b></label>
                {Options.map((element, index) => (
                    <div className="remove-option" key={index}>
                    {
                        index ? 
                        <button type="button"  className="remove-btn" onClick={() => this.removeFormFields(index)}><FaMinus style={{padding:0}} /></button> 
                        : <button className="add-btn" type="button" onClick={() => this.addFormFields()}><FaPlus /></button>
                    }
                      
                      <input type="text" name="content" placeholder="Enter Option" value={ (element.Option!=="") ? element.Option : null } onChange={e => this.handleChange(index, e)} required/>
                    </div>
                ))}
                
                <button className="sumbit-btn" type="submit">send</button>
            </form>
        </div>
    );
  }
}
export default CreateSurvey;