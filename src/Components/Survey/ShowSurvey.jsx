import React from "react";

class ShowSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      question: "You shoud answer this Question",
      Options: [
        {"id":1, "Content" : "First Option"},
        {"id":2, "Content" : "second Option"}],
      result: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  ReadForm(){
    this.setState({question :  this.state.question
    })
  }

  addFormFields() {
    this.setState(({
      Options: [...this.state.Options, { option: "" }]
    }))
  }

  // removeFormFields(i) {
  //   let Options = this.state.Options;
  //   Options.splice(i, 1);
  //   this.setState({ Options });
  // }

  handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state.result));
  }

  render() {

    return (
        <div className="form-popup">
            <form className="form-container" onSubmit={this.handleSubmit}>
                <label for="question"><b>Question</b></label>
                <p>
                    {this.state.question}
                </p>
                <label for="option"><b>Option</b></label>
                <ul className="option">
                  {this.state.Options.map(Option => (
                    <li key={Option.id} >
                      <input type="radio" id={Option.Content} name="OptionList" value={Option.Content} onChange={e => {this.state.result = e.target.value}}/>
                      <label for={Option.Content}>{Option.Content}</label>
                    </li>
                  ))}
                </ul>
                
                <button className="sumbit-btn" type="submit">send</button>
            </form>
        </div>
    );
  }
}
export default ShowSurvey;