import React, { Component } from 'react';

class Form extends Component {
    
  constructor(props) {
    super(props);

    this.initialState = {
      Name: '',
      Email: '',
      Address : '',
    };

    this.state = this.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
    
  }
//   componentDidMount()
// {
//     this.state.email="Email";
//     this.state.name="Name";
//     this.state.address="Address";
// }
// componentWillMount()
// {
//     this.state.email="";
//     this.state.name="";
//     this.state.address="";
// }
  render() {
    
    return (
      <form>
        <div className="text_area">
        <input  className="text_input" type="text" name="email"  defaultValue="Email" value={this.state.email} onChange={this.handleChange} />
        </div>
            <div className="text_area">
        <input  className="text_input" type="text" name="name" defaultValue="Name" value={this.state.name} onChange={this.handleChange} />
        </div>
        <div className="text_area">
        <input  className="text_input" type="text" name="address" defaultValue="Address" value={this.state.address} onChange={this.handleChange} />
        </div>
        
        <input   className="btn" type="button" value="JOIN" onClick={this.submitForm} />
         </form>
    );
  }
}

export default Form;