import React from 'react';
class Delete extends React.Component{

  constructor(props) {
    super(props);
  }
    render(){
        return(
            <div>{this.props.items}</div>
        );
    }
}

export default Delete;
