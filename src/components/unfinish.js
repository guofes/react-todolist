import React from 'react';
import Items from './items';
import './css/no-todo.css';
import { connect } from 'react-redux';

class unfinish extends React.Component{
    render() {
        const unfi = this.props.items.length;
        const items = this.props.items.filter(item => item.status==0);
        if(items.length == 0){
            return (
                <div className ="no-todo">
                    <h2>真不错，没有没完成的任务!</h2>
                </div>)
        }
        else{
        return (
            <div>
            <ul>
           {items.map((item,index) =>
              <Items
			item={item}  
			key={index}
              
              ></Items>
            )}
            </ul>
			<li className="numlist">待做:{items.length}/总数:{unfi}</li>
            </div>
    )  
}  
        }
    }
    function finditems(state){
        return{
            items: state.items
        }
    }
    
    export default connect(finditems)(unfinish);