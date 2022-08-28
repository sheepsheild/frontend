import React from "react";

class ShowSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      questions: [],
      Options: [],
      isLoaded: false,
      error:"",
      title:"",
      result: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

  componentDidMount() {
    fetch("http://127.0.0.1:8000/room/api/polls/2/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            questions: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  // componentDidMount() {
  //   fetch("http://127.0.0.1:8000/room/api/choices/23/")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           questions: result.polls
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }

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
    let items = Object.values(this.state.questions)[this.state.questions.length-1];
    if (items!=null)
    {
      let id = Object.values(items)[0];
      this.setState({title: Object.values(items)[1]});
      let status = Object.values(items)[2];
    }
    return (
        <div className="form-popup">
            <form className="form-container" onSubmit={this.handleSubmit}>
                <label for="question"><b>Question</b></label>
                <p>
                    {this.state.title}
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