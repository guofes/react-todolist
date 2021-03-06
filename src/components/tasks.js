import React from 'react';
import Items from './items';
import './css/no-todo.css';
import { connect } from 'react-redux';

class Tasks extends React.Component{
    render() {
        const items = this.props.items;

        if(items.length == 0){
            return (
                <div className ="no-todo">
                    <h2>还没有添加任务，快去建立一个吧!</h2>
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
					<li className="numlist">总数 : {items.length}</li>
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
    
    export default connect(finditems)(Tasks);