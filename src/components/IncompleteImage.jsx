import React, { Component } from 'react';

class IncompleteImage extends Component {
  constructor() {
    super();
    this.state = {
      showInput: false,
      showAdd: true,
      textInput: '',
    };

    this.toggleClass = this.toggleClass.bind(this);
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (!this.state.textInput) return;
      this.props.getImages(this.state.textInput, this.props.numBox);
      this.setState({ textInput: '' });
    }
  };

  toggleClass = () => {
    this.setState({
      showInput: !this.state.showInput,
      showAdd: !this.state.showAdd,
    });
  };

  render() {
    return (
      <div className={`imagePlace ${this.props.newColor}`}>
        {this.state.showInput && (
          <>
            <label for="moodInput" className="sr-only">
              Word describing your mood
            </label>
            <input
              id="moodInput"
              className="moodInput"
              type="text"
              value={this.state.textInput}
              placeholder="Your mood"
              onChange={(e) => this.setState({ textInput: e.target.value })}
              onKeyPress={this.handleKeyPress}
            />
          </>
        )}
        {this.state.showAdd && (
          <label htmlFor="addButton">
            <button
              id="addButton"
              className="addButton"
              onClick={this.toggleClass}
              aria-label="Make input field appear"
            >
              <i className="fas fa-plus" />
            </button>
          </label>
        )}
      </div>
    );
  }
}

export default IncompleteImage;