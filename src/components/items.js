import React from 'react';
import './css/items.css';
import { connect } from 'react-redux';
import { completeTodo,deleteTodo } from '../actions';

class Items extends React.Component{
    constructor(props){
        super(props);
        this.types = {'uncompleted': 0, 'completed': 1, 'all': 2};
		// this.handleDelete = this.handleDelete.bind(this);
		// this.handleFinished = this.handleFinished.bind(this);
    }
    // handleDelete(){
	// 	this.props.tototalChange(this.props.item);
    // }
    // handleFinished (){
    //     var id = this.props.item.id;
    //     // status = (status === 0 ? 1 : 1);
    //     // var obj = {
	// 	// 	id: this.props.item.id,
	// 	// 	name: this.props.item.name,
	// 	// 	status: status
    //     // }
		
    //     // // this.props.finishedChange(obj);
    //     // console.log(obj)	


    // }

    render(){
        // const item = this.props.item;
        const { item, dispatch} = this.props;

		const unfinish = {
			backgroundColor: '#DFFCB5',
			color: '#2EB872',
		};

		const finish = {
			backgroundColor: '#FFFA9D',
			color: '#FF9A3C',
        }
        var itemStyle = item.status === 0 ? unfinish : finish;
        
        // let items = this.props.items;
        // console.log(this.props.items);
        return(
            <div>
        {/*  <li  key={item.id} style={itemStyle} > */}
        <li style={itemStyle} >
        <span 
                    // onClick={this.handleFinished} 
                    onClick={() => dispatch(completeTodo(item.id))} 
					id={item.id}
					className="check-btn"
					style={{backgroundColor: item.status === 0 ? '#fff' : '#A1EAFB'}}
				></span>
        
			<span>{ item.name}</span>
			
            {/* desc: <span>{ item.desc }</span>  */}
            <span onClick={() => dispatch(deleteTodo(item.id))}  className="delete-btn">删除</span>
        
        </li>
        </div>
        );

    }
}
function findid(state){
    return state
}

// export default Items;
export default connect(findid)(Items);