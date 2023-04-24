import React from "react";

class AuthForm extends React.Component {
  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.fieldNames = ['Email', 'Password'];
  }
  /**
   * 
   * @param {*} e 
   */
  onChangeText(e) {
    this.setState((prevState) => prevState[e.target.name] = e.target.value)
  }
  /**
   * 
   * @returns 
   */
  renderFields() {
    return this.fieldNames.map((fieldName) => (
      <div className={`input-field ${this.props.errors ? 'errors' : ''}`}>
        <input 
          placeholder={fieldName}
          type={fieldName.toLowerCase} 
          name={fieldName.toLowerCase()} 
          value={this.state[fieldName.toLowerCase()]} 
          onChange={(e) => onChangeText(e)} 
        />
      </div>
    ));
  }
  /**
   * 
   * @param {*} e 
   */
  onSubmitForm(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }
  /**
   * 
   */
  render() {
    <div className="row">
      <form className="col s6" onSubmit={this.onSubmitForm.bind(this)}>
        {renderFields()}
        <div className="errors">
          {this.props.errors.map((error) => <div key={error}>{error}</div>)}
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
    
  }
}
export default AuthForm;