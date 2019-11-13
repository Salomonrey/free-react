import React,{Component} from 'react';
import './blogpagess.css';
import axios from 'axios';
import Header from '../headertop';
import Footer from '../footerbottom';
import { tsConstructSignatureDeclaration } from '@babel/types';
class Blogpagess extends Component{
  constructor(props){
    super(props)
    this.state={
      loadingbool:true
    }
  }
    componentDidMount(){
   
        window.scrollTo(0,0);
        const {
            match: { params }
          } = this.props;
    // eslint-disable-next-line
      axios
        .post("http://185.154.53.105:1338/api/post", { id: params.postID })
        .then(response => {
          this.setState({
            loadingbool:false
          })
          if (response.data[0] == null) {
            this.props.history.push("/");
          } else {
            let discription_div = document.createElement("div");
            let div_for_article = document.createElement("div");
            let div_title = document.createElement("div");
            div_title.classList.add("add_div_title");
            response.data[0].main_foto=response.data[0].main_foto.replace(response.data[0].main_foto.substring(6,7),'/')
            document.getElementById('fo1r_arti1cal_bl1ger_opendodoree').style.background="url('http://185.154.53.105:1338/"+response.data[0].main_foto+"')center center no-repeat";
            document.getElementById('fo1r_arti1cal_bl1ger_opendodoree').style.backgroundSize="cover"
            discription_div.innerHTML = response.data[0].description;
            discription_div.classList.add("add_div_disc_rip");
            div_title.innerHTML = response.data[0].title;
            div_for_article.innerHTML = response.data[0].body;
            div_for_article.classList.add("pooor_body_mainclass");
            div_for_article.id = response.data[0]._id;
            document.getElementById('fortune_fortune_tutle').appendChild(div_title);
            document.getElementById('fortune_fortune_discrue').appendChild(discription_div);
            document.getElementById("testdata").appendChild(div_for_article);
            div_for_article.classList.add("Game_of_throne");
          }
        });
    }
    render(){
      if(this.state.loadingbool){
       return(<React.Fragment>
        <Header/>
        <div className="loadingpokerface">Loading<div></div><div></div><div></div></div>
       </React.Fragment> )
      }
      else{
        return(
            <React.Fragment>
            <Header/>
            <div id="fo1r_arti1cal_bl1ger_opendodoree" className="for_artical_bloger_open">
     <h1  id="fortune_fortune_tutle" className="bloh_page_h1_one"></h1>
               <h2 id="fortune_fortune_discrue" className="bloh_page_h2_one"></h2>
   </div>
   <div id="testdata" className="testdata">

        </div>
            <Footer/>
           </React.Fragment>    
        )
      }
    }
}
export default Blogpagess;
