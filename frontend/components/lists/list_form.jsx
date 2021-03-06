import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialState || { title: "", due: new Date() };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return (e) => {
      this.setState({[type]: e.target.value });
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    this.props.processForm(this.state)
      .then(() => this.props.toggleModal());
  }

  render() {
    let title = this.props.formType === "edit" ? "Edit this list!" : "Add a list!";
    let titleErrors = "";
    let dueErrors = "";
    if(this.props.errors) {
      if(this.props.errors.title){
        titleErrors = <p id="title-errors">{`Title ${this.props.errors.title}`}</p>;
      }

      if(this.props.errors.due) {
        dueErrors = <p id="title-errors">{`Due date ${this.props.errors.due}`}</p>;
      }
    }
    return (
      <div className="modal-screen" onClick={ this.props.toggleModal }>
        <div className="modal-content" onClick={ (e) => e.stopPropagation() }>
          <h1>{ title }</h1>

          { titleErrors }
          { dueErrors }
          <form onSubmit={ this.handleSubmit }>

            <input type="text"
              value={ this.state.title }
              placeholder="Title"
              onChange={ this.update("title") }/>

            <label> Due:
              <input type="date"
                value={ new Date(this.state.due).toISOString().substring(0,10) }
                onChange={ this.update("due") } />
            </label>

            <input id="list-sub" type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default ListForm;
