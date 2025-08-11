import React from "react";

function PopularProductCard({category, title, rating, ratingCount, price, originalPrice, discountTag, tagType, images}) {
  return (
    <div className="col">
      <div className="product-card card card-product">
        <div className="card-body">
          <div className="text-center position-relative">
            <div className="sale-off position-absolute top-0 start-0">
              <div className="d-flex gap-1 flex-column">
                <span className="bg-danger badge">{tagType}</span>
                <span className="bg-success badge">{discountTag}</span>
              </div>
            </div>
            <a href="#" className="">
              <img src={images} className="mb-3 img-fluid" />
            </a>
            <div className="d-flex justify-content-center gap-1 card-product-action">
              <a href="#" className="btn-action eye">
                <span className="material-symbols-outlined">visibility</span>
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
            <a href="#" className="text-decoration-none text-muted">
              <small>{category}</small>
            </a>
          </div>
          <h2 className="fs-6">
            <a href="#" className="text-decoration-none text-dark">
              {title}
            </a>
          </h2>
          <div className="d-inline-flex align-items-center gap-1 review">
            <small className="text-warning">
              <div className="d-flex gap-1">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>
            </small>
            <span className="small">{rating}{ratingCount}</span>
          </div>
          <div className="justify-content-between d-flex mt-3 align-items-center">
            <div className="price">
              <span className="text-dark">${price}</span>
              <span className="text-decoration-line-through">${originalPrice}</span>
            </div>
            <div className="add-btn">
              <a href="#!" role="button" className="btn btn-primary">
                <i className="fa-solid fa-plus" width="16px"></i>&nbsp;&nbsp;Add
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularProductCard;
