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
      // count:1,
      Options: [{ content : "" }]
     };
    this.handleSetQuestion = this.handleSetQuestion.bind(this)
  }
  
  handleChange(i, e) {
    let Options = this.state.Options;
    Options[i]= e.target.value;
    this.setState({ Options });
  }

  handleChangeQuestion(e) {
    let Question = this.state.Question;
    Question = e.target.value;
    this.setState({ Question });
  }

  addFormFields() {
    // this.setState( {count : this.state.count + 1})
    this.setState(({
      Options: [...this.state.Options, { content: "" }]
    }))
  }

  removeFormFields(i) {
    let Options = this.state.Options;
    Options.splice(i);
    this.setState({ Options });
    // this.setState( {count : i })

  }

  handleSetQuestion = (event) => {
    alert("set alert");
    event.preventDefault();
    fetch('http://127.0.0.1:8000/room/api/create_poll/', {
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "user": 1,
        "room": 2,
        "status":true,
        "title": this.state.Question
        })
    })
    this.handleSetOptions(); 
  }

  handleSetOptions = () => {

      var content = this.state.Options.join('-')
      fetch('http://127.0.0.1:8000/room/api/create_choice/', {
        method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "status": true,
            "vote": 23,
            "content": content
            })
        })
  }



  render() {
    const Options = this.state.Options; 
    return (
        <div className="form-popup">
            <form className="form-container" onSubmit={this.handleSetQuestion}>
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