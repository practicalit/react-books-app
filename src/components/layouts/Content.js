import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import List from "../members/List";
import Categories from "../books/Categories";

export default class Content extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <div className="row">
            <div className="col-md-12">
              <div className="box">
                  <div>
                    <ul>
                      <li>
                        {/* <Link to="/list">List members</Link> */}
                      </li>
                    </ul>
                    <hr />
                    <Switch>
                      <Route exact path="/list">
                        <List />
                      </Route>
                      <Route exact path="/categories">
                        <Categories />
                      </Route>
                    </Switch>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
