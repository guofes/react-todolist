import React from 'react';
import Items from './items';
import { connect } from 'react-redux';
import { closePop } from '../actions';

class Tasks extends React.Component{
    constructor(props){
        super(props);
        // this.tototalChange = this.tototalChange.bind(this);
        // this.tofinishedChange = this.tofinishedChange.bind(this);

    }
    tototalChange(aa){
        console.log(aa);
		// this.props.totalChange1(aa);
    }
    tofinishedChange(bb){
        console.log(bb);
		// this.props.totalChange1(bb);
    }
    render() {
        const items = this.props.items;
        return (
            <ul>
           {items.map((item,index) =>
              <Items
            //   tototalChange={this.updateTotal}
            //   tofinishedChange={this.updateFinished} 
			item={item}  
			key={index}
              
              ></Items>
            )}
            </ul>
    )    
        }
    }
    function finditems(state){
        return{
            items: state.items
        }
    }
    
    export default connect(finditems)(Tasks);