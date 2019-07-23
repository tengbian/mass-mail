import _ from "lodash";

import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

// const FIELDS = [
//   { label: "Survey Title", name: "title" },
//   { label: "Subject Line", name: "subject" },
//   { label: "Email Body", name: "body" },
//   { label: "Recipient List", name: "emails" }
// ];

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons rightl">done</i>
          </button>
        </form>
      </div>
    );
  }
}

// if error is null, everything is well to go
// attributes of error is the same of values
function validate(values) {
  const errors = {};
  errors.recipients = validateEmails(values.emails || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value for ${name}`;
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
