import React, { Component } from "react";
import axios from "axios";
import "./Constructor.css";
import $ from 'jquery';
import CKEditor from 'ckeditor4-react';
class Constructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massivestati: [],
      categories: [],
      errors: [],
      title: "",
      discription: "",
      file: null,
      main_foto:null,
      id: 1,
      namebutton: "Создать",
      changee: false,
      font: false,
      linkvalue: "",
      kategorii: "",
      podkategorii: "",
      valuer:'',
      loading:true
    };
  }
  async componentDidMount() {
    if (
      // eslint-disable-next-line
      localStorage.getItem("cool-jwt") == "undefined" ||
      // eslint-disable-next-line
      localStorage.getItem("cool-jwt") == undefined
    ) {
      this.props.history.replace("/");
    }

    const {
      match: { params }
    } = this.props;
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("cool-jwt");
    // eslint-disable-next-line
    if (params.postID == "new") {
      this.refresh_sel();
    } else {
      axios
        .post("http://185.154.53.105:1338/api/post", { id: params.postID })
        .then(response => {
          this.refresh_sel(response.data[0].category);
          this.create_sub_select(
            response.data[0].category,
            response.data[0].subcategory
          );
          let img = document.createElement("img");
          img.src = "http://185.154.53.105:1338/" +response.data[0].main_foto;
          img.classList.add('mainfoto')
          this.setState({
            main_foto: response.data[0].main_foto
          });
          document.getElementById("foto").appendChild(img); 
          // eslint-disable-next-line
          if (response.data[0] == null) {
            this.props.history.replace("/");
          } else {
            this.setState({
              changee: true,
              namebutton: "Изменить статью"
            });

            let div_for_changesse = document.createElement("div");
            div_for_changesse.innerHTML = response.data[0].body;
            this.setState({
              title: response.data[0].title,
              discription: response.data[0].description
            });
            let elementos = div_for_changesse.children;
            for (let i = 0, child; (child = elementos[i]); i++) {
             if(child.childNodes[0]) // eslint-disable-next-line
              if (child.childNodes[0].tagName == "IMG") {
                this.addimgforchange(child.childNodes[0]);
              }
              // eslint-disable-next-line
              // if (child.tagName == "PRE") {
              //   if (child.classList.contains("class_fonts_italica")) {
              //     document.getElementById("a_2").click();
              //   } else if (child.classList.contains("class_fonts_bold")) {
              //     document.getElementById("a_3").click();
              //   } else {
              //     document.getElementById("a_1").click();
              //   }
                this.state.valuer= child.innerHTML;
                document.getElementById("clickbutton").click();
                this.setState({
                  valuer:''
                })
              // }
            }
          }
        });
    }
  }
  addimgforchange(img) {
    let imgbutton_delete = document.createElement("button");
    let div_img = document.createElement("div");
    let imgbutton_ontop = document.createElement("button");
    let imgbutton_onbottom = document.createElement("button");
    let width_input = document.createElement("input");
    let height_input = document.createElement("input");
    width_input.classList.add("Remove_button");
    height_input.classList.add("Remove_button");
    imgbutton_delete.classList.add("Remove_button");
    imgbutton_ontop.classList.add("Remove_button");
    imgbutton_onbottom.classList.add("Remove_button");
    imgbutton_delete.innerHTML = "Удалить";
    imgbutton_ontop.innerHTML = "onTop";
    imgbutton_onbottom.innerHTML = "onBottom";
    width_input.classList.add("input_toggle");
    height_input.classList.add("input_toggle");
    width_input.setAttribute("id", "input_sizer1");
    width_input.addEventListener("change", e => {
      let sizzenn = e.target.value;
      if (sizzenn > 1000 || sizzenn <= 0) {
        console.log(e.target.value)
        alert("Размер фото не должен привышать 1000px");
      } else {
        img.classList.remove("class_imgaes");
        img.setAttribute("width", sizzenn + "px");
      }
    });
    height_input.setAttribute("id", "input_sizer2");
    height_input.addEventListener("change", e => {
      console.log(e.target)
      let sizzenn1 = e.target.value;
      if (sizzenn1 > 1000) {
        alert("Размер фото не должен привышать 1000px");
      } else {
        img.classList.remove("class_imgaes");
        img.setAttribute("height", sizzenn1 + "px");
      }
    });
    div_img.id = this.state.id;
    this.setState({
      id: this.state.id + 1
    });
    imgbutton_delete.addEventListener("click", e => {
      e.preventDefault();
      e.target.parentNode.remove();
      for (let i = e.target.parentNode.id; i <= this.state.id; i++) {
        let lm = document.getElementById(i);
        if (lm != null) {
          lm.id = lm.id - 1;
        }
      }
      this.setState({
        id: this.state.id - 1
      });
    });
    imgbutton_ontop.addEventListener("click", e => {
      var elemnts1 = e.target.parentNode.id;
      var elemnts2 = parseInt(e.target.parentNode.id) - 1;
      // eslint-disable-next-line
      if (elemnts1 == 1) {
        return console.log("123");
      }
      var success = document
        .getElementById("main_content")
        .insertBefore(
          document.getElementById(elemnts1),
          document.getElementById(elemnts2)
        );
      if (success) {
        document.getElementById(elemnts2).id =
          parseInt(document.getElementById(elemnts2).id) + 1;
        document.getElementById(elemnts1).id =
          parseInt(document.getElementById(elemnts1).id) - 1;
      }
    });
    imgbutton_onbottom.addEventListener("click", e => {
      var elemnts1 = e.target.parentNode.id;
      var elemnts2 = parseInt(e.target.parentNode.id) + 1;
      // eslint-disable-next-line
      if (elemnts1 == this.state.id - 1) {
        return console.log("123");
      }
      var success = document
        .getElementById("main_content")
        .insertBefore(
          document.getElementById(elemnts2),
          document.getElementById(elemnts1)
        );
      if (success) {
        document.getElementById(elemnts1).id =
          parseInt(document.getElementById(elemnts1).id) + 1;
        document.getElementById(elemnts2).id =
          parseInt(document.getElementById(elemnts2).id) - 1;
      }
    });
    var wi = img.width
    var he = img.height
    div_img.appendChild(img);
    div_img.appendChild(width_input);
    div_img.appendChild(height_input);
    div_img.appendChild(imgbutton_delete);
    div_img.appendChild(imgbutton_ontop);
    div_img.appendChild(imgbutton_onbottom);
    document.getElementById("main_content").appendChild(div_img);
  }
  removejwt() {
    this.props.history.push("/admin-panel");
  }
  onclickbuttontest(e) {
    let file = this.state.file;
    let formdata = new FormData();
    // var maxsize = 2 * 1024 * 1024;
    // var supportMimeTypes = ['image/jpg', 'image/jpeg', 'image/png'];
    // if (file['size'] > maxsize) {
    //      return alert('File is so more than 2 Mb');
    //    }
    // if(supportMimeTypes.indexOf(file['type']) == -1) {
    //      return alert('Unsupported mimetype');
    // }
    formdata.append("file", file);
    axios({
      url: "http://185.154.53.105:1338/api/upload",
      method: "POST",
      data: formdata
    }).then(response => {
      if(response.data.path){
        let imagges = document.createElement("img");
      imagges.src = "http://185.154.53.105:1338/" + response.data.path;
      this.addimgforchange(imagges);
    }else{
      alert('Недопустимый файл')
    }      
    });
  }
  onchangerfunk(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  selectfile(e) {
    let file = e.target.files[0];
    this.setState({
      file: file
    });
  }
  selectmainfoto(e) {
    let main_foto = e.target.files[0];
    this.setState({
      main_foto: main_foto
    });
  }
  oncreatearia(e) {
   
    let textus = this.state.valuer;
    let button_change = document.createElement("button");
    let button_delete = document.createElement("button");
    let button_ontop = document.createElement("button");
    let button_onbottom = document.createElement("button");
    button_ontop.innerHTML = "onTop";
    button_onbottom.innerHTML = "onBottom";
    button_delete.innerHTML = "Удалить";
    button_change.innerHTML = "Изменить";
    button_delete.classList.add("Remove_button");
    button_change.classList.add("Remove_button");
    button_ontop.classList.add("Remove_button");
    button_onbottom.classList.add("Remove_button");
    let article = document.createElement("div");
   
  
    article.id = this.state.id;
    this.setState({
      id: this.state.id + 1
    });
    button_delete.addEventListener("click", e => {
      e.preventDefault();
      e.target.parentNode.remove();
      for (let i = e.target.parentNode.id; i <= this.state.id; i++) {
        let lm = document.getElementById(i);
        if (lm != null) {
          lm.id = lm.id - 1;
        }
      }
      this.setState({
        id: this.state.id - 1
      });
    });
    button_ontop.addEventListener("click", e => {
      var elemnts1 = e.target.parentNode.id;
      var elemnts2 = parseInt(e.target.parentNode.id) - 1;
      // eslint-disable-next-line
      if (elemnts1 == 1) {
        return console.log("123");
      }
      var success = document
        .getElementById("main_content")
        .insertBefore(
          document.getElementById(elemnts1),
          document.getElementById(elemnts2)
        );
      if (success) {
        document.getElementById(elemnts2).id =
          parseInt(document.getElementById(elemnts2).id) + 1;
        document.getElementById(elemnts1).id =
          parseInt(document.getElementById(elemnts1).id) - 1;
      }
    });
    button_onbottom.addEventListener("click", e => {
      var elemnts1 = e.target.parentNode.id;
      var elemnts2 = parseInt(e.target.parentNode.id) + 1;
      // eslint-disable-next-line
      if (elemnts1 == this.state.id - 1) {
        return console.log("123");
      }
      var success = document
        .getElementById("main_content")
        .insertBefore(
          document.getElementById(elemnts2),
          document.getElementById(elemnts1)
        );
      if (success) {
        document.getElementById(elemnts1).id =
          parseInt(document.getElementById(elemnts1).id) + 1;
        document.getElementById(elemnts2).id =
          parseInt(document.getElementById(elemnts2).id) - 1;
      }
    });
    button_change.addEventListener("click", e => {
      article.innerHTML = "";
      let input_for_change = document.createElement("textarea");
      let button_for_change = document.createElement("button");
      button_for_change.innerHTML = "Изменить";
      button_delete.classList.add("Remove_button");
      button_change.classList.add("Remove_button");
      button_ontop.classList.add("Remove_button");
      button_onbottom.classList.add("Remove_button");
      button_for_change.classList.add("Remove_button");
      input_for_change.classList.add('dcclclddchange_button');
      input_for_change.value = textus;
      article.appendChild(input_for_change);
      article.appendChild(button_for_change);
      button_for_change.addEventListener("click", e => {
        let izmenenie = input_for_change.value;
        textus = izmenenie;
        article.innerHTML = "";
        article.innerHTML = input_for_change.value;
        article.appendChild(button_delete);
        article.appendChild(button_change);
        article.appendChild(button_ontop);
        article.appendChild(button_onbottom);
      });
    });
  
    article.innerHTML = textus;
    article.appendChild(button_delete);
    article.appendChild(button_change);
    article.appendChild(button_ontop);
    article.appendChild(button_onbottom);
    document.getElementById("main_content").appendChild(article);
  
  }
  submitallelements(e) {
  if(this.state.title== ''){
      return alert('Заполните поле title оно является обязательным для статьи')
    }
    else if(this.state.discription== ''){
      return alert('Заполните поле discription оно является обязательным для статьи')
    }
    else if (this.state.main_foto==null){
      return alert('Выбеите основное фото статьи')
    }
     else if (document.getElementById('main_content').innerHTML == ''){
      return alert('Добавьте текст основной статьи')
    }else{
    var removeone = document.getElementsByClassName("Remove_button");
    while (removeone[0]) {
      removeone[0].parentNode.removeChild(removeone[0]);
    }
    if (document.getElementById("main_content") != null) {
      var idPost = document.getElementById("main_content").innerHTML;
    }
    var jsonPost = {
      title: this.state.title,
      description: this.state.discription,
      main: idPost,
      src:  this.state.main_foto,
      category: document.getElementById("cat_select").value,
      subcategory: document.getElementById("sub_cat_select").value
    };
    
    if (this.state.changee) {
      jsonPost.id = this.props.match.params.postID;
      axios
        .post("http://185.154.53.105:1338/api/update", jsonPost)
        .then(response => {
          console.log(response);
          if (
            // eslint-disable-next-line
            response.status == 200 &&
            // eslint-disable-next-line
            document.getElementById("input007").value !== "" &&
            // eslint-disable-next-line
            document.getElementById("input008").value !== "" &&
            // eslint-disable-next-line
            document.getElementById("main_content").innerHTML !== ""
          ) {
            document.getElementById("main_content").innerHTML = "";
            this.props.history.replace("/admin-panel");
          } else {
            console.log("Ошибка");
          }
        });
    } else {
      axios
        .post("http://185.154.53.105:1338/api/addpost", jsonPost)
        .then(response => {
          console.log(response);
          if (
            // eslint-disable-next-line
            response.status == 200 &&
            // eslint-disable-next-line
            document.getElementById("input007").value !== "" &&
            // eslint-disable-next-line
            document.getElementById("input008").value !== "" &&
            // eslint-disable-next-line
            document.getElementById("main_content").innerHTML !== ""
          ) {
            document.getElementById("main_content").innerHTML = "";
            this.props.history.replace("/admin-panel");
          } else {
            console.log("Ошибка");
          }
        });
    }
  }
  }
  fontsfincktion(e) {
    this.setState({
      font: this.state.value
    });
    console.log(this.state.font);
  }
  // chekedonenormal() {
  //   document.getElementById("text_aria").classList.add("class_fonts_normal");
  //   document.getElementById("text_aria").classList.remove("class_fonts_bold");
  //   document
  //     .getElementById("text_aria")
  //     .classList.remove("class_fonts_italica");
  // }
  // chekedoneitalic() {
  //   document.getElementById("text_aria").classList.add("class_fonts_italica");
  //   document.getElementById("text_aria").classList.remove("class_fonts_bold");
  //   document.getElementById("text_aria").classList.remove("class_fonts_normal");
  // }
  // chekedonebold() {
  //   document.getElementById("text_aria").classList.add("class_fonts_bold");
  //   document
  //     .getElementById("text_aria")
  //     .classList.remove("class_fonts_italica");
  //   document.getElementById("text_aria").classList.remove("class_fonts_normal");
  // }
  linksendtomain() {
    let div = document.createElement("div");
    let linkstate = document.getElementById("link_inputzero").value;
    let linkformain = document.createElement("a");
    linkformain.innerHTML = linkstate;
    let hrefoutfor = document.getElementById("href_inputzero").value;
    linkformain.setAttribute("href", hrefoutfor);
    div.appendChild(linkformain)
    
  }
  otpravkakategorii(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  sendpodkategoriuvbazu(e) {
    axios.post("url", this.state.podkategorii).then(response => {
      console.log(response);
    });
  }
  sendkategoriuvbazu(e) {
    axios.post("url", this.state.kategorii).then(response => {
      console.log(response);
    });
  }
  refresh_sel(cat, sub) {
    axios.get("http://185.154.53.105:1338/api/categories").then(response => {
      var select = this.create_select(response.data, cat);
      select.id = "cat_select";
      this.setState({
        categories: response.data
      });
      this.refresh_subsel(response.data, sub);
      document.getElementById("cat_select_content").innerHTML = "";
      document.getElementById("cat_select_content").appendChild(select);
    });
  }
  refresh_subsel(data, subcat) {
    var select = this.create_select(data[0].subcategory, subcat);
    select.id = "sub_cat_select";
    document.getElementById("subcat_select_content").innerHTML = "";
    document.getElementById("subcat_select_content").appendChild(select);
  }
  create_select(data, cat) {
    let select = document.createElement("select");
    select.id = "cat_select";
    for (var i = 0; i < data.length; i++) {
      let option = document.createElement("option");
      option.id = '0ption_'+i;
      option.value = data[i].name;
      option.innerHTML = data[i].name;
      if (cat == data[i].name) {
        console.log(cat);
        option.setAttribute("selected", "selected");
      }
      select.appendChild(option);
    }
    select.addEventListener("change", e => {
      for (var i = 0; i < this.state.categories.length; i++) {
        if (this.state.categories[i].name == e.target.value) {
          this.refresh_subsel_ch(this.state.categories[i].subcategory);
        }
      }
    });
    return select;
  }

  create_sub_select(cat, subcat) {
    axios.get("http://185.154.53.105:1338/api/categories").then(response => {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].name == cat) {
          var select = this.create_select(response.data[i].subcategory, subcat);
          select.id = "sub_cat_select";
          document.getElementById("subcat_select_content").innerHTML = "";
          document.getElementById("subcat_select_content").appendChild(select);
        }
      }
    });
  }
  refresh_subsel_ch(data, subcat) { 
    var select = this.create_select(data, subcat); 
    select.id = "sub_cat_select"; 
    document.getElementById("subcat_select_content").innerHTML = ""; 
    document.getElementById("subcat_select_content").appendChild(select); 
    }

    setmainfoto(e){
    let file = this.state.main_foto;
    let formdata = new FormData();
    formdata.append("file", file);
    var maxsize = 2 * 1024 * 1024;
    var supportMimeTypes = ['image/jpg', 'image/jpeg', 'image/png'];
    if (file['size'] > maxsize) {
         return alert('Слишком большой файл (не может быть больше 2 Мб)');
       }
    if(supportMimeTypes.indexOf(file['type']) == -1) {
         return alert('Не подходящий формат файла');
    }

    if(this.state.loading){
      let flexdiv1 = document.createElement('div');
      let firstdot = document.createElement('div');
      let seconddot = document.createElement('div');
      let lastdot = document.createElement('div');
      let spinerr = document.createElement('p');
      spinerr.innerHTML="Loading";
      spinerr.classList.add('consturctortogler')
      flexdiv1.appendChild(spinerr);
      flexdiv1.appendChild(firstdot);
      flexdiv1.appendChild(seconddot);
      flexdiv1.appendChild(lastdot);
      flexdiv1.classList.add('flextogglerforloading')
      document.getElementById('foto').appendChild(flexdiv1)
      
 
    }
    
    axios({
      url: "http://185.154.53.105:1338/api/upload",
      method: "POST",
      data: formdata
    }).then(response => {
      
      let imagges = document.createElement("img");
      imagges.src = "http://185.154.53.105:1338/" + response.data.path;
      imagges.classList.add('mainfoto')
      this.setState({
        main_foto: response.data.path   
      });
      document.getElementById("foto").innerHTML = "";
      document.getElementById("foto").appendChild(imagges); 
     
    });

    }
    removejwt11(){
      this.props.history.push("/category");
    }
    // createintext(){
    //   if(document.getElementById("a_2").checked){
    //     document.getElementById("text_aria").value=document.getElementById("text_aria").value+"<span style='font-style: italic;'></span>"
    //   } else if(document.getElementById("a_3").checked){
    //     document.getElementById("text_aria").value=document.getElementById("text_aria").value+"<span style='font-weight: bold'></span>"
    //   }
    // }
    // createtext(){
    //   if(document.getElementById("a_1").checked){
    //     this.chekedonenormal()
    //   } else if(document.getElementById("a_2").checked){
    //     this.chekedoneitalic()
    //   }else if(document.getElementById("a_3").checked){
    //     this.chekedonebold()
    //   }
    // }
    ckeditrofun(e){
    
      this.setState({
        valuer:e.editor.getData()
      })
    }
  render() {
    
    return (
      <div className="div_panel_admin">
        <style>{"body { background-color:#F1F1F1; }"}</style>
        <h1 className="logo_admin1">
          Sal<span>Ger</span>.CMS
        </h1>
        <div className="maining">
          <button
            className="button_admin_panel"
            onClick={this.removejwt.bind(this)}
            type="button"
          >
            Назад
          </button>
          <button
            className="button_admin_panel"
            onClick={this.removejwt11.bind(this)}
            type="button"
          >
            Категории
          </button>
        </div>
        <div id="testdata" />
     
        <div>
        <div id='main_foto'>
          <div  id="foto" ></div>
          <input
              name="file"
              className="input_file_upload"
              type="file"
              onChange={e => {
                this.selectmainfoto(e);
              }}
            />
        <button
              id="buttonemitclick"
              className="button_submitinfoall"
              onClick={e => {
                this.setmainfoto(e);
              }}
            >
              Добавить главное фото
            </button>
        </div>
          <form id="pozhaluista">
            <div id="cat_select_content" />
            <br />
            <div id="subcat_select_content" />
            <br />
            <input
              name="title"
              placeholder="Название статьи"
              id="input007"
              value={this.state.title}
              onChange={e => {
                this.onchangerfunk(e);
              }}
            />
            <br />
            <input
              name="discription"
              placeholder="Краткое описание статьи"
              id="input008"
              value={this.state.discription}
              onChange={e => {
                this.onchangerfunk(e);
              }}
            />
            <br />
            <input
              name="file"
              className="input_file_upload"
              type="file"
              onChange={e => {
                this.selectfile(e);
              }}
            />
            <button
              className="button_img_upload"
              onClick={() => {
                this.onclickbuttontest();
              }}
              type="button"
            >
              Загрузить медиа файл
            </button>
            <br />
           
            <div className="ckeditor_nav">

         
              <CKEditor
                data={this.state.valuer}
             
                onChange={e=>{this.ckeditrofun(e)}}
              />
             
             </div>
           
            <p className="p_for_button_im">
              <button
                id="clickbutton"
                type="button"
                onClick={e => {
                  this.oncreatearia(e);
                }}
              >
                Добавить текст
              </button>
            </p>
          </form>
          <div className="div_ochen" id="main_content" />
          <p className="p_for_button_im">
            <button
              className="button_submitinfoall"
              onClick={e => {
                this.submitallelements(e);
              }}
            >
              {this.state.namebutton}
            </button>
          </p>
        </div>
     
      </div>
    );
  }
}
export default Constructor;
