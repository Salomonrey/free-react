import React,{Component} from 'react';
import Erorin from '../erorindic';

class Erorba extends Component{
    constructor(props){
        super(props)
        this.state={
            hasEror:false
        }
        
    }
    componentDidCatch(){
        this.setState({
            hasEror:true
        })
    }
    render(){
        if(this.state.hasEror){
            return <Erorin/>
        }
        return this.props.children
    }
}
export default Erorba;