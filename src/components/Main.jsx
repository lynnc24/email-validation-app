import React, { Component } from 'react';
import axios from 'axios';
import InputForm from './InputForm';
import ValidationTable from './ValidationTable';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      validationResult: {},
      errorMsg: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async validateEmail(email) {
    const validationRes = await axios.post('/api/validate-email', { email });

    return validationRes;
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      errorMsg: '',
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { email } = this.state;

    if (!email) {
      this.setState({
        errorMsg: 'Please enter a valid email address.',
      });
    } else {
      this.validateEmail(email)
        .then((validationRes) => {
          const { validationResult } = validationRes.data;

          this.setState({
            validationResult,
            email: '',
          });
        })
        .catch((validationError) => {
          this.setState({
            errorMsg: 'Sorry, your request failed.  Please try again later.',
          });
        })
    }
  }

  render() {
    const { email, validationResult, errorMsg } = this.state;
    const validationResultKeys = Object.keys(validationResult);
    let validationTable = null;

    if (validationResultKeys.length > 0) {
      validationTable = validationResultKeys.map((key, index) => {
        const validationKey = key.includes('_') ? key.replace(/_/g, ' ') : key;
        const validationValue = validationResult[key];
        let displayData = validationResult[key];

        if (validationValue === '' || validationValue === null) {
          displayData = 'Not Available';
        } else if (validationValue === true) {
          displayData = 'Yes';
        } else if (validationValue === false) {
          displayData = 'No';
        }

        return (
          <tr key={validationKey}>
            <td className="table-left-col">{validationKey}</td>
            <td>{displayData}</td>
          </tr>
        )
      });
    }

    return (
      <div>
        <InputForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          email={email}
          errorMsg={errorMsg}
        />
        {validationTable ? <ValidationTable validationTable={validationTable} /> : null}
      </div>
    );
  }
}

export default Main;
