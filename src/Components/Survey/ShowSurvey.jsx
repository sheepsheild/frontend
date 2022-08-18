import React from "react";

class ShowSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      question: "You shoud answer this Question",
      Options: [{ option : "" }]
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
    alert(JSON.stringify(this.state.Options));
  }

  NewOption(){
    for (let i = 0; i < this.state.Options.length; i++) {
      const value_option = this.state.Options[i];
      return(
        <li>
            <input type="radio" id="html" name="fav_language" value={value_option}/>
            <label for="html">{value_option}</label>
        </li>
    )
    }

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
                {this.state.Options.map((element, index) => (
                    <div className="option" key={index}>
                        <ul>
                            <li>
                                <input type="radio" id="html" name="fav_language" value="HTML"/>
                                <label for="html">First option</label>
                            </li>
                            <li>
                                <input type="radio" id="html" name="fav_language" value="HTML"/>
                                <label for="html">second option</label>
                            </li>
                            {
                                index ? 
                                this.NewOption()
                                : null
                            }
                        </ul>
                    </div>
                ))}
                
                <button className="sumbit-btn" type="submit">send</button>
            </form>
        </div>
    );
  }
}
export default ShowSurvey;