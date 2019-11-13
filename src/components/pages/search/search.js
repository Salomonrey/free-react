import React,{Component} from 'react';
import axios from 'axios';
import './search.css';
import Header from '../headertop';
import Footer from '../footerbottom';
import en from '../content/en';
import ru from '../content/ru';
class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            elementskateg:[],
            postyforblogacttiv:[],
            new_key: "",
            content:{},
            loading:false,
            lang:""
        }
    }
    componentDidMount(){
      let main_language = window.location.href.search('/en');
      if(main_language>0){
        this.setState({
          content:en.search,
          lang:"/en"
        })
      }
      else{
        this.setState({
          content:ru.search
        })
      }
      window.scrollTo(0,0);
      axios.post("http://185.154.53.105:1338/api/posts")
        .then(response=>{
          this.setState({
            elementskateg:response.data
          })
        })   
              }
  onchangerfunk(e) {

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async search(){
    this.setState({
      loading:true
    })
    var result = document.getElementById("result");
    result.innerHTML = '';
    let str = this.state.elementskateg;
    let str1;
    let key = this.state.new_key;
    let arr = [];
    let insta1 = "матрасы диваны кровати instagram"
    let insta2 = "mattresses sofas beds"
    for (var i = 0; i < str.length; i++) {
    str[i].body='';
    }
    await axios.post("http://185.154.53.105:1338/api/posts")
        .then(response=>{
          str1 = response.data
          this.setState({
            loading:false
          })
        })
    if(key.length>2){
    str = await this.searching(key,str,str1);
    var insta_res1 = await insta1.search(key.toLowerCase(),"gi")
    var insta_res2 = await insta2.search(key.toLowerCase(),"gi")
    for (var i = 0; i < str.length; i++) {
    var regexp1 = new RegExp('<span style="color: red;">');
    var result = str[i].title.search(regexp1)
    var result_desc = str[i].description.search(regexp1)
    var result_body = str[i].body.search(regexp1)      
    if (result >= 0 || result_desc >= 0 || result_body >= 0){
      var regexp = new RegExp(key, "gi");
        if(str[i].body.search(regexp)<0){
        	let div = document.createElement("div");
      		div.innerHTML = str1[i].body;
            str[i].body = div.innerText.substring(0,100)+"..."
          }
          arr.push(str[i])
       }else {
        for(var m = key.length; m > 4; m--){
            key = key.substring(0, key.length - 1)
            str = this.searching(key,str,str1)
            var insta_res1 = await insta1.search(key.toLowerCase(),"gi")
            var insta_res2 = await insta2.search(key.toLowerCase(),"gi")
            var result = str[i].title.search(regexp1)
            var result_desc = str[i].description.search(regexp1)
            var result_body = str[i].body.search(regexp1)  
            if (result >= 0 || result_desc >= 0 || result_body >= 0){
              regexp = new RegExp(key, "gi");
              if(str[i].body.search(regexp)<0){
                let div = document.createElement("div");
	      		div.innerHTML = str1[i].body;
	            str[i].body = div.innerText.substring(0,100)+"..."
              }
              arr.push(str[i])
              break;
         }
        }
       }
     }
   }else{
    var result = document.getElementById("result");
      result.innerHTML = 'Не найдено';
      return;
   }
   if(insta_res1>=0){
        var result = document.getElementById("result");
        let divallhave =document.createElement("div");
        let div3 = document.createElement("div");
        let button1 = document.createElement("button");
        button1.classList.add('buttiondota2wering1')
        divallhave.classList.add('divallhave123')
        div3.innerHTML = 
        "Более подробно ознакомится с дизайнами матрасов, диванов, кроватей вы можете в нашем Instagram"
        button1.innerHTML = "Перейти"
        button1.addEventListener('click',(e)=>{
          window.open(
          "https://www.instagram.com/free.style.studio/",
          '_blank' // <- This is what makes it open in a new window.
        );
        })
        divallhave.appendChild(div3);
        divallhave.appendChild(button1);
        result.appendChild(divallhave);
      result.appendChild(document.createElement("br"));
      }
      if(insta_res2>=0){
        var result = document.getElementById("result");
        let divallhave =document.createElement("div");
        divallhave.classList.add('divallhave123')
        let div3 = document.createElement("div");
        let button1 = document.createElement("button");
        button1.classList.add('buttiondota2wering1')
        div3.innerHTML = 
        "You can get acquainted with the designs of mattresses, sofas, beds in more detail in our Instagram"
        button1.innerHTML = "Go to"
        button1.addEventListener('click',(e)=>{
          const url = 'https://www.instagram.com/free.style.studio/';
          window.open(
          "https://www.instagram.com/free.style.studio/",
          '_blank' // <- This is what makes it open in a new window.
        );
        })
        divallhave.appendChild(div3);
        divallhave.appendChild(button1);
        result.appendChild(divallhave);
      result.appendChild(document.createElement("br"));
      } 
    if(arr.length>0){

      for (var i = 0; i < arr.length; i++) {
      var result = document.getElementById("result");
      let divallhave =document.createElement("div");
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
      let button_inter = document.createElement("button");
      divallhave.classList.add('divallhave123')
      div1.innerHTML = arr[i].title;
      div2.innerHTML = arr[i].description;
      div3.innerHTML = arr[i].body;
      divallhave.id = arr[i]._id;
      button_inter.innerHTML = "Перейти"
      button_inter.addEventListener('click',(e)=>{
        window.open(
          this.state.lang+"/post/" + e.target.parentNode.id,
          '_blank' // <- This is what makes it open in a new window.
        );
        // this.props.history.push(
        //   this.state.lang+"/post/" + e.target.parentNode.id
        // );  
      })
      button_inter.classList.add('buttiondota2wering1')
      divallhave.appendChild(div1);
      divallhave.appendChild(div2);
      divallhave.appendChild(div3);
      divallhave.appendChild(button_inter);
      result.appendChild(divallhave);
      result.appendChild(document.createElement("br"));
      }
      axios.post("http://185.154.53.105:1338/api/posts")
        .then(response=>{
          this.setState({
          elementskateg:response.data
          })
         })
  }else {
    if(insta_res1<0 &&insta_res2<0){
      var result = document.getElementById("result");
      result.innerHTML = 'Не найдено';
    }  
  } 

  }
  searching(key,str,str1){
    const arr = [];
    for (var i = 0; i < str.length; i++) {
      try {
        var regexp = new RegExp(key, "gi");
      } catch (err) {
        console.log(err)
      }
      var regexp1 = new RegExp('<span style="color: red;">');
      var result = str[i].title.search(regexp)
      var result1 = str[i].title.search(regexp1)
      if(result >= 0 && result1 == -1){
      var sub = str[i].title.substring(result, result+key.length);
      str[i].title = str[i].title
      .replace(sub,'<span style="color: red;">'+sub+'</span>');
      }
      var result_desc = str[i].description.search(regexp);
      result1 = str[i].description.search(regexp1)

      if(result_desc >= 0 && result1 == -1){
      sub = str[i].description.substring(result_desc, result_desc+key.length);
      str[i].description = str[i].description
      .replace(sub,'<span style="color: red;">'+sub+'</span>');
      }
      let div = document.createElement("div");
      div.innerHTML = str1[i].body;
      let elementos = div.children;
      for (let j = 0; j < elementos.length ; j++) {
          if (elementos[j].tagName == "DIV") {
            var result_body = elementos[j].innerText.search(regexp);
            result1 = str[i].body.search(regexp1)
            if(result_body >= 0 && result1 == -1){
            var sub = (elementos[j].innerText.substring(result_body,result_body+ key.length))
            if(result_body==0){
              elementos[j].innerHTML= elementos[j].innerText.substring(result_body,100)
            }else if (result_body>0){
              for(let k = result_body; k > 0 ; k--){
              var s = elementos[j].innerText.substring(k,k-1)
              if(s=='.' || k==1){
                elementos[j].innerText = elementos[j].innerText.substring(k,result_body+100)
              }
             }
            }

            elementos[j].innerHTML = elementos[j].innerText
            .replace(sub,"<span style='color: red;'>"+sub+"</span>")
            str[i].body=str[i].body+elementos[j].innerHTML+'...<br>';   
              if(str[i].body.search(regexp)<0){
                str[i].body = ''
              }                          
            }
          }
          
        }
    }
    return str;
  }
  keyupfierstobe(e){
    if(e.keyCode == 13){
      e.preventDefault();
      document.getElementById('button_searcher1').click()
  }
  }
    render(){
      if(this.state.loading) {
       return( <React.Fragment>
            <Header/>
            <div className="search_main_container">
        
        <div>
        <h1 className="wordtext_h1_one">{this.state.content.title1}</h1>
        <h2 className="wordtext_h2_one">{this.state.content.title2}</h2>
        </div>
       <main className="inwput_fqqor_searchewr122r">
          <input
           
            name="new_key"
            placeholder={this.state.content.place1}
            id="new_key"
            value={this.state.new_key}
            onChange={e => {
              this.onchangerfunk(e);
            }}
            onKeyUp={(e)=>{this.keyupfierstobe(e)}}
          />
          <p> <button
            type="button"
            id="button_searcher1"
            onClick={() => {
              this.search();
            }}
          >
            {this.state.content.button1}
          </button></p>
        
       </main>
       <div className="loading_pages_aoe12">Loading<div></div><div></div><div></div></div>
   </div>
         <Footer/>
             </React.Fragment> ) 
      }
      else{return(
          <React.Fragment>
            <Header/>
            <div className="search_main_container">
        
        <div>
        <h1 className="wordtext_h1_one">{this.state.content.title1}</h1>
        <h2 className="wordtext_h2_one">{this.state.content.title2}</h2>
        </div>
       <main className="inwput_fqqor_searchewr122r">
          <input
           
            name="new_key"
            placeholder={this.state.content.place1}
            id="new_key"
            value={this.state.new_key}
            onChange={e => {
              this.onchangerfunk(e);
            }}
            onKeyUp={(e)=>{this.keyupfierstobe(e)}}
          />
          <p> <button
            type="button"
            id="button_searcher1"
            onClick={() => {
              this.search();
            }}
          >
            {this.state.content.button1}
          </button></p>
        
       </main>
       <div className="tyyyyysecond_screen" id="result"></div>
   </div>
         <Footer/>
             </React.Fragment>  
        )}
    }
}
export default Search;


