import React, { Component } from 'react';
import styled from 'react-emotion';

import colors from 'utils/colors';

export class Textarea extends Component {
  handleKeyDown = e => {
    // allow for Tab to indent properly
    if (e.keyCode === 9) {
      e.preventDefault();
      this.props.onChange(e);
    }
  };

  render() {
    const { value, onChange, placeholder } = this.props;
    return (
      <Wrapper
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default Textarea;

const Wrapper = styled.textarea`
  background: ${colors.theme.nord6};
  border-bottom: 2px solid ${colors.theme.nord0};

  padding: 2rem;
  margin: 0 1rem 0 0;

  font-family: Courier;
  font-size: 0.8rem;
  color: inherit;
  line-height: 1.4;

  height: 100%;
  width: 100%;
  resize: none;
`;
