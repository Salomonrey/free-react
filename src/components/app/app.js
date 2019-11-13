import React from "react";
import { Route, Switch } from "react-router-dom";
import { Admin, HomePage } from "../pages";
import Blogpage from "../pages/blogpage";
import Constructor from "../pages/constructor";
import AdminPanel from "../pages/adminpanel";
import Header from "../pages/headertop";
import Footer from "../pages/footerbottom";
import Aboutus from "../pages/aboutuspage";
import Contactns from "../pages/contactfrees";
import Category from "../pages/category";
import Blogpagess from "../pages/blogpagess";
import Search from "../pages/search";
import "./app.css";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <React.Fragment>
              <Header />
              <HomePage />
              <Footer />
            </React.Fragment>
          )}
        />

        <Route
          path="/aboutus"
          component={() => (
            <React.Fragment>
              <Header />
              <Aboutus />
              <Footer />
            </React.Fragment>
          )}
        />
        <Route
          path="/contact"
          component={() => (
            <React.Fragment>
              <Header />
              <Contactns />
              <Footer />
            </React.Fragment>
          )}
        />
        <Route path="/post/:postID" component={Blogpagess} />
        <Route path="/blog" component={Blogpage} />
        <Route path="/search" component={Search} />
        <Route path="/admin" component={Admin} />
        <Route path="/admin-panel" component={AdminPanel} />
        <Route path="/constructor/:postID" component={Constructor} />
        <Route path="/category" component={Category} />
        <Route
          path="/:locale(en)"
          render={({ match: { url } }) => (
            <>
              <Route
                path={`${url}/`}
                component={() => (
                  <React.Fragment>
                    <Header />
                    <HomePage />
                    <Footer />
                  </React.Fragment>
                )}
                exact
              />
              <Route path={`${url}/search`} component={Search} />
              <Route path={`${url}/blog`} component={Blogpage} />
              <Route path={`${url}/post/:postID`} component={Blogpagess} />
              <Route path={`${url}/admin`} component={Admin} />
              <Route path={`${url}/admin-panel`} component={AdminPanel} />
              <Route
                path={`${url}//constructor/:postID`}
                component={Constructor}
              />
              <Route path={`${url}/category`} component={Category} />
              <Route
                path={`${url}/aboutus`}
                component={() => (
                  <React.Fragment>
                    <Header />
                    <Aboutus />
                    <Footer />
                  </React.Fragment>
                )}
              />
              <Route
                path={`${url}/contact`}
                component={() => (
                  <React.Fragment>
                    <Header />
                    <Contactns />
                    <Footer />
                  </React.Fragment>
                )}
              />
            </>
          )}
        />
      </Switch>
    </React.Fragment>
  );
};
export default App;
