// 

import React, { Component } from 'react';

class Table extends Component {
  maskEmail = (email) => {
    const atIndex = email.indexOf('@');
    const firstPart = email.slice(0, atIndex);
    const domain = email.slice(atIndex);
    const maskedChars = firstPart.substring(3).replace(/\S/g, '*');
    return email.substring(0, 3) + maskedChars + domain;
    // const atIndex = email.indexOf('@');
    // const firstPart = email.slice(0, atIndex);
    // const domain = email.slice(atIndex);
    // const maskedChars = firstPart.substring(1).replace(/\S/g, '*');
    // return firstPart.charAt(0) + maskedChars + domain;
    
  }; 
  convertToHexName = (name) => {
       for (let i = 0; i < name.length; i++) {
    }

    return name.substring(0, 5).padEnd(5, '0'); // Trim and pad to 16 characters
  };
  convertToHexemail = (email) => {
   

    for (let i = 0; i < email.length; i++) {
        }

    return email.substring(0, 8).padEnd(8, '0'); // Trim and pad to 16 characters
  };
  convertToHex = (address) => {
    const hexChars = '0123456789abcdef';
    let hexAddress = '';

    for (let i = 0; i < address.length; i++) {
      const charCode = address.charCodeAt(i);
      hexAddress += hexChars.charAt(charCode >> 4) + hexChars.charAt(charCode & 15);
    }

    return hexAddress.substring(0, 7).padEnd(7, '0'); // Trim and pad to 16 characters
  };
 
  render() {
    const { data } = this.props;

    return (

      <table className="custom-table">
        <thead className="custom-table-cell">
          <tr className="custom-table-cell">
          <th className='custom-table-cell'>Serial No</th>
            <th className='custom-table-cell'>Name</th>
          
            <th className='custom-table-cell'>Address </th>
            <th className='custom-table-cell'>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
            <td className='custom-table-cell'>#{index + 1}</td>
              <td className='custom-table-cell'>{this.convertToHexName(row.name)}</td>
           
              <td className='custom-table-cell'>{this.convertToHex(row.address)}</td>
              <td className='custom-table-cell'>{this.maskEmail (this.convertToHexemail(row.email))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
