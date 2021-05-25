import React,{Component} from 'react';
import './contactns.css';
import Elli121pse from './img/Elli121pse.png'
import axios from 'axios';
import en from '../content/en';
import ru from '../content/ru';

class Contactns extends Component{
    constructor(props){
        super(props)
        this.state={
            phonenumbercustomer:'',
            namecustomer:'',
            content:{}
        }
    }
    componentDidMount(){
        let main_language = window.location.href.search('/en')
        if(main_language>0){
            this.setState({
                content:en.contact
            })
        }
        else{
            this.setState({
                content:ru.contact
            })
        }
        window.scrollTo(0,0);
      }
      phoneandnamecustomer(e){
          this.setState({
              [e.target.name]:e.target.value
          })
        
      }
      butonforsendcustomer(e){
        document.getElementById('truesught_gem').value = "";
        document.getElementById('truesught_gem1').value = "";
        axios.post("http://185.154.53.105:1338/api/sendmail",{number:this.state.phonenumbercustomer,name:this.state.namecustomer})
        .then(response=>{
            console.log(response.data)
           alert('Ожидайте звонка')
        })
      }
    render(){

        return(
            <main>
            <div className="contacts_1112main_content1221"></div>
                <section className="flexbox_forcontact_forma97">
                        <div className="arteria_flexboxa817">
                            <h1>{this.state.content.title1}</h1>
                            <h3>{this.state.content.title2}</h3>
                        </div>
                        <div className="forn_fort_fromcont1">
                            <form className="forn_fort_fromcont">
                                <div className="inpit_center_mode1">
                                <input id="truesught_gem" value={this.state.phonenumbercustomer} name="phonenumbercustomer" onChange={(e)=>{this.phoneandnamecustomer(e)}} className="forn_fort_fromcont_inp1" placeholder="+7 (___) ___ __ __" />
                                <input id="truesught_gem1" value={this.state.namecustomer} name="namecustomer" onChange={(e)=>{this.phoneandnamecustomer(e)}} className="forn_fort_fromcont_inp112" placeholder={this.state.content.place1}/>
                                <p className="forn_fort_fromcont_btn1"><button type="button" onClick={(e)=>{this.butonforsendcustomer(e)}}>{this.state.content.button1}</button></p>
                                </div>
                                <p className="forn_fort_fromcont_otn1">{this.state.content.article1}</p>
                            </form>
                        </div>
                </section>
                <section className="difffh2h2h21xacr">
                    <h2>{this.state.content.title3}</h2>
                    <h3>{this.state.content.title55}</h3>


                    <div className="difffh2h2h21xacr12">
                        <div className="difffh2h2h21xacr12s">
                          <p className="text_01_for_cont">{this.state.content.article2}</p> 
                          <p className="text_02_for_cont">{this.state.content.article3}<br/>
			{this.state.content.tel}<a href="tel:77272379833"> +7 (727) 237-98-33</a><br/>
							<a href="tel:77078337123"> +7 (707) 833-71-23</a><br/>
                          email: <a href="mailto:info@fsstudio.kz">info@fsstudio.kz</a></p>
                        </div>

    
                        <div className="difffh2h2h21xacr121s">
                        <p className="text_01_for_cont"> {this.state.content.article4}</p>  
                          <p className="text_02_for_cont">{this.state.content.article5}<br/>
                          {this.state.content.tel}<a href="tel:77073404113"> +7 (707) 340-41-13</a><br/>
				
                          email: <a href="mailto:armada@free-style.kz">armada@free-style.kz</a>
                          </p>
                        </div>
                    </div>    
                </section>
  
            <section className="nash_ofic_lichshe1">
              <h4>{this.state.content.article6}</h4> 
              <div className="nash_ofic_lichshe1div">
                  <div><p>{this.state.content.tel}
		  <a href = "tel:+77273122455"> +7 (727) 312-24-55</a></p></div>
                   
                  <div><p><a href = "mailto:info@free-style.kz">info@free-style.kz</a></p></div>

              </div>
              <p className="nash_ofic_lichshe1divppp">{this.state.content.article7}</p>
            </section>
            <div className="width_frame1s">
            <p><iframe src="https://yandex.ru/map-widget/v1/?um=constructor:cfe5b566ac9c3aa78ee513ef2c11aa157a9d4923c4170ebcd047dd5730986b7a&amp;source=constructor" >
            </iframe></p></div>
            </main>
        )
    }
}
export default Contactns;

