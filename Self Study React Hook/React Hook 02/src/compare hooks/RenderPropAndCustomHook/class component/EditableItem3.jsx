import { Component } from 'react'
import Toggler from './Toggler'

class EditableItem3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.initialValue
    }
  }

  setValue(newValue) {
    this.setState({
      value: newValue
    })
  }

  render() {
    return (
      <Toggler initialValue={false}>
        {(editorVisible, toggleEditorVisible) => (
          <main>
            <p>This is Editable Item 3</p>
            {editorVisible ? (
              <label>
                {this.props.label}
                <input
                  type='text'
                  value={this.state.value}
                  onChange={(event) => this.setValue(event.target.value)}
                />
              </label>
            ) : (
              <span>{this.state.value}</span>
            )}
            <button onClick={toggleEditorVisible}>{editorVisible ? 'Done' : 'Edit'}</button>
          </main>
        )}
      </Toggler>
    )
  }
}

export default EditableItem3
