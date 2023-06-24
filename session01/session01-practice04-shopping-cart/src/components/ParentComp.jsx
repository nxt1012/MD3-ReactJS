import React, { Component } from "react";
import ProductItem from "./ProductItem";
import CardComp from "./CardComp";
import NavBar from "./NavBar";
import CartTitle from "./CartTitle";
export default class ParentComp extends Component {
  render() {
    return (
      <div>
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-lg-7">
                        <NavBar />
                        <hr />
                        <CartTitle />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                      </div>
                      <CardComp />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
