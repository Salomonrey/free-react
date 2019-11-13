import React,{Component} from 'react';
import './Aboutus.css';
import {Link} from 'react-router-dom';
import Frees1 from './video/Frees1.mp4';
import Linnia from './img/Linnia.png';
import Postersecond from './img/Postersecond.png';
import en from '../content/en';
import ru from '../content/ru';
class Aboutus extends Component{
    constructor(props){
        super(props)
        this.state={
            content:{},
            href_contact:'/contact'
        }
    }
    componentDidMount(){
        let main_language = window.location.href.search('/en')
        if(main_language>0){
            this.setState({
                href_contact:'/en/contact',
                content:en.aboutus
            })
        }
        else{
            this.setState({
                content:ru.aboutus
            })  
        }
        window.scrollTo(0,0);
      }
    render(){

        return(
            <div>
            <div id="matroskin_kot_onas" className="blog_1112main_content1221"></div>
                <div className="flex_blox_for_abousu">
                    <div className="flex_blox_for_abousu_vidos">
                        <video  className="flex_blox_for_abousu_vidos1" controls poster={Postersecond} >
                        <source src={Frees1} type="video/mp4"/>
                        </video>
                        
                    </div>
                    <div className="flex_blox_for_abousu_textis">
                        <h1>
                        {this.state.content.title1}
                        </h1>
                        <p className="nameofsongoffight"><img src={Linnia}/></p>
                        <p className="nameofsongoffight11">
                        {this.state.content.article1}
                        </p>
                        <p className="nameofsongoffight12">
                            {this.state.content.article2}
                        </p>
                       <Link to={this.state.href_contact}> <p className="nameofsongoffight"><button>{this.state.content.article3}</button></p></Link>
                    </div>
                </div>
            
            </div>
        )
    }
}
export default Aboutus;

