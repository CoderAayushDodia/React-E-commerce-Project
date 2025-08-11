import React from "react";
import BestSellerCard from "./BestSellerCard";

function BestSeller() {
  return (
    <section className="container best-seller container">
      <div className="row">
        <h3 className="mb-6 col-md-12">Daily Best Sells</h3>
      </div>
      <div className="g-4 row flex-nowrap row-cols-lg-4 row-cols-md-2 row-cols-1 responsive">
        <div className="col">
          <div className="pt-8 px-1 rounded px-xl-8 banner-deals ">
            <div className="p-4">
              <h3 className="fw-bold text-white">100% Organic Coffee Beans.</h3>
              <p className="text-white">Get the best deal before close.</p>
              <a href="#" className="btn btn-primary">
                Shop Now <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <BestSellerCard />
        <BestSellerCard />
        <BestSellerCard />
      </div>
    </section>
  );
}

export default BestSeller;
