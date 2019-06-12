import React from 'react'

// import styled from 'styled-components'

class FilterTodo extends React.Component {
    constructor(){
        super();
        this.state={
            activeBtn:'all',
            btns:[
                {
                    name:'all'
                },
                {
                    name:'completed'
                },
                {
                    name:'active'
                },
            ]
        }

        this.toggleBtn = this.toggleBtn.bind(this)
    }

    toggleBtn(stateName){
        this.setState({
            activeBtn:stateName
        })
        this.props.getData(stateName)
    }

    render(){
        return(
            
            <div style={divStyle}>
                {
                    this.state.btns.map((btn, index)=>{
                        return <button key={index} onClick={()=>this.toggleBtn(btn.name)} style={this.state.activeBtn === btn.name ? activeBtn : inactiveBtn}>{btn.name.toLocaleUpperCase()}</button>
                    })
                }
            </div>
            
        );
    }
}

//style components
const divStyle = {
    padding:10,

};
const activeBtn = {
    fontSize: '15px',
    fontWeight:'bold',
    textAlign: 'center',
    backgroundColor:'#9E3FB0',
    color:'white',
    height:'35px',
    width:'120px',
    border:"none"
};

const inactiveBtn = {
    fontSize: '15px',
    fontWeight:'bold',
    textAlign: 'center',
    backgroundColor:'#ffffff',
    color:'#6f6f6f',
    height:'35px',
    width:'120px',
    border:"none"
};

export default FilterTodo
