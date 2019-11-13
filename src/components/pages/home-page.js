import React, { Component } from "react";
import "./home-page.css";
import { Link } from "react-router-dom";
import Header from "./headertop";
import Footer from "./footerbottom";
import F1lorence3 from "./img/F1lorence3.jpg";
import F2lorence3 from "./img/F2lorence3.jpg";
import F3lorence3 from "./img/F3lorence3.jpg";
import Frees from "./video/Frees.mp4";
import Kuhna from "./img/Kuhna.jpg";
import Line1 from "./img/Line1.jpg";
import Ellips1e from "./img/Ellips1e.jpg";
import Hole from "./img/Hole.jpg";
import Vannaua from "./img/Vannaua.jpg";
import Gray2 from "./img/Gray2.jpg";
import Divanuui from "./img/Divanuui.jpg";
import Krovatit from "./img/Krovatit.jpg";
import Matrasci from "./img/Matrasci.jpg";
import Line228 from "./img/Line228.jpg";
import Posterforv from "./img/Posterforv.jpg";
import en from "./content/en";
import ru from "./content/ru";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { content: {} };
  }
  componentDidMount() {
    var result_body = window.location.href.search("/en");
    if (result_body > 0) {
      this.setState({
        content: en.main
      });
    } else {
      this.setState({
        content: ru.main
      });
    }
    window.scrollTo(0, 0);
    document.getElementById("slide1").click();
    document.getElementById("you112you112twe").style.cursor = "pointer";
    document.getElementById("you112you112twe1").style.cursor = "pointer";
    document.getElementById("you112you112twe2").style.cursor = "pointer";
  }
  functionlive() {
    window.location.href = "https://www.instagram.com/free.style.studio/";
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <input type="radio" name="point" id="slide1" />
          <input type="radio" name="point" id="slide2" />
          <input type="radio" name="point" id="slide3" />
          <div className="slider">
            <div className="slides slide1">
              <div>
                <img src={F2lorence3} alt="Free-styly studio" />
              </div>
              <div className="phone_adaptedstyle_01">
                <h1 className="first_slide_txt_file">
                  {this.state.content.title1}
                </h1>
                <p className="first_slide_txt2_file">
                  {this.state.content.article1}
                </p>
              </div>
            </div>
            <div className="slides slide2">
              <div>
                <img src={F1lorence3} alt="Free-styly studio" />
              </div>
              <div className="phone_adaptedstyle_01">
                <h1 className="first_slide_txt_file">
                  {this.state.content.title2}
                </h1>
                <p className="first_slide_txt2_file">
                  {this.state.content.article2}
                </p>
              </div>
            </div>
            <div className="slides slide3">
              <div>
                <img src={F3lorence3} alt="Free-styly studio" />
              </div>
              <div className="phone_adaptedstyle_01">
                <h1 className="first_slide_txt_file">
                  {this.state.content.title3}
                </h1>
                <p className="first_slide_txt2_file">
                  {this.state.content.article3}{" "}
                 
                  {this.state.content.article4}
                </p>
              </div>
            </div>
          </div>
          <div className="controls">
            <label htmlFor="slide1" />
            <label htmlFor="slide2" />
            <label htmlFor="slide3" />
          </div>
        </div>
        <p className="predator_line_for_2ds">
          <img src={Line228} alt="Free-styly studio" />
        </p>
        <main>
          <section className="aside_forp_xte1_fathervid">
            <video
              className="aside_forp_xte1_videos1"
              controls
              poster={Posterforv}
            >
              <source src={Frees} type="video/mp4" />
            </video>
            <div className="firth3teg_in_homepage2">
              <h3>{this.state.content.title4}</h3>
            </div>
          </section>
          <section className="mebel_na_zakaz_homepage">
            <h1>{this.state.content.title5}</h1>
            <div className="flex_div_kuhnia_homepage">
              <div className="flex_div_kuhnia_immg">
                <a
                  href="https://www.instagram.com/free.style.studio/"
                  target="_blank"
                >
                  <img src={Kuhna} alt="Free-styly studio" />
                </a>
              </div>
              <div className="flex_div_kuhniah22">
                <h2>{this.state.content.title6}</h2>
                <img
                  className="line1_png_formain"
                  src={Line1}
                  alt="Free-styly studio"
                />
                <br />
                <img
                  className="ellipse_png_formain"
                  alt="Free-styly studio"
                  src={Ellips1e}
                />
              </div>
              <div className="flex_div_kuhniah22221">
                <h3> {this.state.content.title7}</h3>
                <p className="text_div_kuhna_1">
                  {this.state.content.article5}
                </p>
                <p className="text_div_kuhna_1">
                  {this.state.content.article6}
                </p>
                <p className="text_div_kuhna_2">
                  {this.state.content.article7}
                </p>
              </div>
            </div>
            <div className="flex_div_kuhnia_homepage1">
              <div className="right_to_left_div_hole">
                <h3> {this.state.content.title8}</h3>
                <p className="text_div_kuhna_1">
                  {this.state.content.article8}
                </p>
              </div>
              <div className="oracle_dotahref1">
                <h2>{this.state.content.title9}</h2>
                <img
                  className="latin_lane_for_underline"
                  alt="Free-styly studio"
                  src={Line1}
                />
                <br />
                <img
                  className="sharik_vniz_for_hole"
                  alt="Free-styly studio"
                  src={Ellips1e}
                />
              </div>
              <div className="flex_div_kuhnia_immg">
                <a
                  href="https://www.instagram.com/free.style.studio/"
                  target="_blank"
                >
                  <img src={Hole} alt="Free-styly studio" />
                </a>
              </div>
            </div>
            <div className="roof_for_last_one_rei19">
              <div className="flex_div_kuhnia_immg">
                <a
                  href="https://www.instagram.com/free.style.studio/"
                  target="_blank"
                >
                  <img src={Gray2} alt="Free-styly studio" />
                </a>
              </div>
              <div className="oracle_dotahref1">
                <h2>{this.state.content.title10}</h2>
                <img
                  className="latin_lane_for_underline"
                  alt="Free-styly studio"
                  src={Line1}
                />
                <br />
                <img
                  className="sharik_vniz_for_hole"
                  alt="Free-styly studio"
                  src={Ellips1e}
                />
              </div>
              <div className="fixedlasonepropblecm">
                <h3> {this.state.content.title11}</h3>
                <p className="text_div_kuhna_1">
                  {this.state.content.article9}
                </p>
              </div>
            </div>
            <div className="flex_div_kuhnia_homepage1">
              <div className="right_to_left_div_hole">
                <h3> {this.state.content.title12}</h3>
                <p className="text_div_kuhna_1">
                  {this.state.content.article10}
                </p>
                <p className="text_div_kuhna_1">
                  {" "}
                  {this.state.content.article11}
                </p>
              </div>
              <div className="oracle_dotahref1">
                <h2>{this.state.content.title13}</h2>
                <img
                  className="latin_lane_for_underline"
                  alt="Free-styly studio"
                  src={Line1}
                />
                <br />
                <img
                  className="sharik_vniz_for_hole"
                  alt="Free-styly studio"
                  src={Ellips1e}
                />
              </div>
              <div className="flex_div_kuhnia_immg">
                <a
                  href="https://www.instagram.com/free.style.studio/"
                  target="_blank"
                >
                  <img src={Vannaua} alt="Free-styly studio" />
                </a>
              </div>
            </div>
          </section>
          <section className="mebel_na_zakaz_homepage">
            <h1>{this.state.content.title14}</h1>
            <div className="flex_for_divani_matraci">
              <div
                id="you112you112twe"
                className="flex_for_divanielement1"
                onClick={() => {
                  this.functionlive();
                }}
              >
                <h4>{this.state.content.title15}</h4>
                <img src={Matrasci} alt="Free-styly studio" />
              </div>
              <div
                id="you112you112twe1"
                className="flex_for_divanielement2"
                onClick={() => {
                  this.functionlive();
                }}
              >
                <h4>{this.state.content.title16}</h4>
                <img src={Divanuui} alt="Free-styly studio" />
              </div>
              <div
                id="you112you112twe2"
                className="flex_for_divanielement3"
                onClick={() => {
                  this.functionlive();
                }}
              >
                <h4>{this.state.content.title17}</h4>
                <img src={Krovatit} alt="Free-styly studio" />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
export default HomePage;
