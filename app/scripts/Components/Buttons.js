import React from 'react';

export default React.createClass({

  render(){
  let addButton;
  let removeButton;

  if(this.props.add) {
    addButton = <button type="button" onClick={this.handleAdd}> Add To Workout </button>;
  } else
    addButton = '';
  if(this.props.remove) {
    removeButton = <button type="button" onClick={this.handleRemove}> Remove From Workout </button>;
  } else
    removeButton = '';

  return (
      <div className='buttons'>
        {addButton}
        {removeButton}
      </div>
    );
  },

  handleAdd(e){
    e.preventDefault;
    this.props.add();

  },

  handleRemove(e){
    e.preventDefault;
    this.props.remove();
  }
});
