import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./headertop.css";
import Lnterfase from "./img/Lnterfase.png";
import Search from "./img/Search.png";
import Menuphone from "./img/Menuphone.png";
import Close from "./img/Close.png";
import en from "../content/en";
import ru from "../content/ru";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastScrollY: 0,
      href_main: "/",
      href_blog: "/blog",
      href_contact: "/contact",
      href_about: "/aboutus",
      href_search:'/search',
      content:{}
    };
  }
  componentDidMount() {
    var result_body = window.location.href.search("/en");
    if (result_body > 0) {
      document.getElementById('classforselectlanguage').classList.remove('toggleClass')
      document.getElementById('classforselectlanguage1').classList.add('toggleClass')
      this.setState({
        href_main: "/en",
        href_blog: "/en/blog",
        href_contact: "/en/contact",
        href_about: "/en/aboutus",
        href_search:'/en/search',
        content:en.header
      });
    } else {     
      this.setState({content:ru.header})
      
    }
  }
  finbutburger(e) {
    document
      .getElementById("yellowcardmusic1")
      .classList.add("pos1122absltor_me1122nutop");
    document
      .getElementById("omg_close_foricon1")
      .classList.add("roooflerrrodlroooflerrrodl");
    document
      .getElementById("omg_close_foricon111")
      .classList.add("invis_for_norwistnwidt");
    document
      .getElementById("yellowcardmusic1")
      .classList.remove("pos1122absltor_me1s2122nutop2s");
  }
  finbutburgercloser(e) {
    document
      .getElementById("omg_close_foricon111")
      .classList.remove("invis_for_norwistnwidt");
    document
      .getElementById("omg_close_foricon1")
      .classList.remove("roooflerrrodlroooflerrrodl");
    document
      .getElementById("yellowcardmusic1")
      .classList.remove("pos1122absltor_me1122nutop");
    document
      .getElementById("yellowcardmusic1")
      .classList.add("pos1122absltor_me1s2122nutop2s");
  }
  changeLan(e) {
    if (e.target.innerHTML == "En" && window.location.href.search('/en')<0 ) {
  
      window.location.href = "/en"+window.location.pathname;
    } else if (e.target.innerHTML == "Ru") {
      window.location.href = window.location.href.replace('/en','');
    }
  }
  render() {
    
    return (
      <header id="" className="header_top_for_all">
        <div className="header_top_for_div_out">
          <div className="button_burger_meni_fe">
            <img
              id="omg_close_foricon111"
              onClick={e => {
                this.finbutburger(e);
              }}
              src={Menuphone}
              alt=""
            />
            <img
              id="omg_close_foricon1"
              className="roooflerrrodl"
              onClick={e => {
                this.finbutburgercloser(e);
              }}
              src={Close}
            />
          </div>

          <div className="header_top_for_div_text1">
            <h1>
              <Link to={this.state.href_main}>freestyle studio</Link>
            </h1>
          </div>
          <div className="for_searcher_header">
          <div className="for_change_languafe">
            
                <p className="toggleClass" id="classforselectlanguage" onClick={(e)=>{this.changeLan(e)}}>
                  Ru
                </p>
                <p>
                  |
                </p>
                <p id="classforselectlanguage1" onClick={(e)=>{this.changeLan(e)}}>
                  En
                </p>
             
            </div>
            <div className="for_searcher_header_onbe">
              <Link to={this.state.href_contact}>
                <img src={Lnterfase} alt="" />
              </Link>
            </div>
            <div>
              <Link to={this.state.href_search}>
                <img src={Search} alt="" />
              </Link>
            </div>
         
          </div>
        </div>
        <div id="yellowcardmusic1" className="posabsltor_menutop">
          <nav className="dddlll_llooeel">
            <ul id="" className="">
              <li>
                <Link to={this.state.href_main}>{this.state.content.title1}</Link>
              </li>
              <li className="">
                <Link to={this.state.href_blog}>{this.state.content.title2}</Link>
              </li>
              <li className="">
                <Link to={this.state.href_about}>{this.state.content.title3}</Link>
              </li>
              <li className="">
                <Link to={this.state.href_contact}>{this.state.content.title4}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;
