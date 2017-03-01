import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import '../Contact.css';

class Contact extends Component {
  render() {
    return (
      <h1>Coolio</h1>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Contact.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
