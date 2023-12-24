import React, { Component } from 'react';
import "./App.css";

import Table from './Table';
import Form from './Form';

const data = [
  { name: 'Data 1', email: 'Data A', address: 'Data a' },
  { name: 'Data 2', email: 'Data B', address: 'Data b' },
  { name: 'Data 3', email: 'Data C', address: 'Data c' },
  // Add more rows as needed
];
class Signin extends Component {
  state = {
    data: [],
  };

  removeData = (index) => {
    const newData = [...this.state.data];
    newData.splice(index, 1);
    this.setState({ data: newData });
  

    // this.setState({
    //   data: data.filter((data, i) => {
    //     return i !== index;
    //   }),
    // });
  }

  handleSubmit = (formData) => {
    const newData = {
      name: formData.name,
      email: formData.email,
      address: formData.address, // Assuming you have a field for the address in formData
    };
    this.setState({ data: [...this.state.data, newData] });
  }
  render() {
    return (
      <div className='content'>
      <div className="login">
        <form>
        <table>
        <thead>
          <tr>
          <th>
          <tr>
          <th className='designjoin'>Join</th>
          <th className='designjoinee1'>Unique</th>
          </tr>
        <th className='designjoinee2'>Schools</th>
       
        <Form handleSubmit={this.handleSubmit} />
      </th>
 
      <tr className="container2">
      <th className='design4'  colSpan="4">4</th>
      <th className='designjoinee'>Joinee's</th>
                  </tr>
    <th className="container1"  colSpan="4">
    
        <Table data={this.state.data} removeData={this.removeData} /></th>
        </tr>
        
        </thead>
        </table>
      </form>
      </div>
      </div>
       )
      }
    }
    
    export default Signin; 
       