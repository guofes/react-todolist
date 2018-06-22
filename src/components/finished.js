import React from 'react';
import Items from './items';
import { connect } from 'react-redux';
import './css/no-todo.css';

class finished extends React.Component{
    render() {
        const fi = this.props.items.length
        const items = this.props.items.filter(item => item.status==1);

        if(items.length == 0){
            return (
                <div className ="no-todo">
                    <h2>加油，去完成任务吧!</h2>
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
            {/* <div>这是所有已经完成的</div> */}
            </ul>
			<li className="numlist">完成:{items.length}/总数:{fi}</li>
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
    
    export default connect(finditems)(finished);
    // export default finished;