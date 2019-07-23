// SurveyNew shows SurveyForm and SurveyFormView
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyFrom from "./SurveyForm";
import SurveyFromReview from "./SurveyFormReview";

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFromReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SurveyFrom
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

// export default SurveyNew;
export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
