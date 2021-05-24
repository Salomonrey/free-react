import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './footerbottom.css';
import FB from './img/FB.png';
import IN from './img/IN.png';
import PT from './img/PT.png';
import YOU from './img/YOU.png';
import en from "../content/en";
import ru from "../content/ru";

class Footer extends Component{
    constructor(props){
        super(props)
        this.state={
            content:{},
            href_main: "/",
            href_blog: "/blog",
            href_contact: "/contact",
            href_about: "/aboutus",
            href_search:'/search',
        }
    }
    componentDidMount(){
        let lang_menu = window.location.href.search('/en');
        if(lang_menu>0){
            this.setState({
                href_main: "/en",
                href_blog: "/en/blog",
                href_contact: "/en/contact",
                href_about: "/en/aboutus",
                href_search:'/en/search',
                content:en.footer
            })
        }  
        else{
            this.setState({
                content:ru.footer
            })
        }
    }
    render(){
      
  

    return(
        <footer className="footer_main_div_forall1">
                <div className="bottom_footer_panelnav1">
                    <nav className="div_for_ul_fronav1">
                        <ul className="ul_fronav_footer1">
                            <li >
                                <Link to ={this.state.href_main}>{this.state.content.title1}</Link>
                            </li>
                            <li className="ul_fronav_footer123_li">
                                <Link to ={this.state.href_blog}>{this.state.content.title2}</Link>
                            </li>
                            <li className="ul_fronav_footer123_li">
                            <Link to = {this.state.href_about}>
                            {this.state.content.title3}
                         </Link>
                            </li>
                             <li className="ul_fronav_footer123_li">
                             <Link to = {this.state.href_contact}>
                             {this.state.content.title4}
                         </Link>
                              </li>
                        </ul>
                    </nav>
                    <div className="bottom_gooter_phone1"><a href="tel:+77078337123">+7 707 833 71 23</a></div>
                </div>
                <div className="Logo_link_bottom_f1oter"><div><Link to={this.state.href_main}>freestyle studio</Link></div></div>
                <div className="last_div_for_fooe12ter">
                    
                    <div className="div_for_imf_ins">
                        <a href="https://www.facebook.com/design.studio.freestyle" target="_blank"><img className='div_for_imf_feds2as' src={FB} alt=""/></a>
                        <a href="https://www.instagram.com/freestyle.kazakhstan/" target="_blank"><img className='div_for_imf_ins2as' src={IN} alt=""/></a>
                        <a href="https://pin.it/a7smlt2pbp4e3l" target="_blank"><img className='div_for_imf_prints' src={PT} alt=""/></a>
                        <a href="https://m.youtube.com/channel/UCgC6nfGr90elEjIiAMYNi3g" target="_blank"><img className='div_for_imf_feds2as' src={YOU} alt=""/></a>
                        </div>
                </div>
        </footer>
    )
    }
}
export default Footer;