import React from 'react';
import Items from './items';

class Tasks extends React.Component{
    constructor(props){
        super(props);
        this.haada = this.haada.bind(this)

    }
    haada(){
        console.log(this.props.items);
        // console.log("111");
    }

    render() {

        // let items = this.props.items;
        return (
        <div onClick={this.haada}>这是子路由</div>
    )
    
        }
    }
    
    export default Tasks;