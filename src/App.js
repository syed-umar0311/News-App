import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  pagesize = 5;
  render() {
    return (
      <BrowserRouter>
        <Navbar />

        <div>
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  pagesize={this.pagesize}
                  country="us"
                  category="general"
                />
              }
            />


           
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pagesize={this.pagesize}
                  country="us"
                  category="technology"
                />
              }
            />

           
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  pagesize={this.pagesize}
                  country="us"
                  category="science"
                />
              }
            />

            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  pagesize={this.pagesize}
                  country="us"
                  category="sports"
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}



















































