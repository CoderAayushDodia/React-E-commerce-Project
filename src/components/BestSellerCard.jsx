import React from 'react'

function BestSellerCard() {
  return (
    <div className="col">
          <div className="product-card card card-product">
            <div className="card-body">
              <div className="text-center position-relative">
                <a href="#">
                  <img src="/main-container-images/product-img-11.jpg" className="mb-3 img-fluid" />
                </a>
                <div className="card-product-action d-flex gap-1 justify-content-center">
                  <a href="#" className="btn-action eye">
                    <span className="material-symbols-outlined" title="Quick View">
                      visibility
                    </span>
                  </a>
                  <a href="#" className="btn-action eye">
                    <span className="material-symbols-outlined">favorite</span>
                  </a>
                  <a href="#" className="btn-action eye">
                    <span className="material-symbols-outlined">sync_alt</span>
                  </a>
                </div>
              </div>
              <div className="text-small mb-1">
                <a href="#" className="text-muted text-decoration-none">
                  Tea, Coffee & Drinks
                </a>
              </div>
              <h2 className="fs-6">
                <a href="#" className="text-dark text-decoration-none">
                  Roast Ground Coffee
                </a>
              </h2>
              <div className="d-flex justify-content-between mt-3 align-items-center">
                <div>
                  <span className="text-dark">$13.5</span>
                  <span className="text-decoration-line-through text-muted">
                    $13.5
                  </span>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <small className="text-warning">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </small>
                  <span>
                    <small>4.3</small>
                  </span>
                </div>
              </div>
              <div className="d-grid mt-2">
                <a href="#" className="btn btn-primary">
                  <i className="fa-solid fa-plus"></i> Add to cart
                </a>
              </div>
              <div className="d-flex justify-content-center text-center mt-3">
                <div className="deals-countdown w-100">
                  <span className="countdown-section text-center">
                    <span className="countdown-amount fs-6 hover-up">1179</span>
                    <span className="countdown-period">days</span>
                  </span>
                  <span className="countdown-section text-center">
                    <span className="countdown-amount fs-6">1179</span>
                    <span className="countdown-period">days</span>
                  </span>
                  <span className="countdown-section text-center">
                    <span className="countdown-amount fs-6">1179</span>
                    <span className="countdown-period">days</span>
                  </span>
                  <span className="countdown-section text-center">
                    <span className="countdown-amount fs-6">1179</span>
                    <span className="countdown-period">days</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default BestSellerCard
