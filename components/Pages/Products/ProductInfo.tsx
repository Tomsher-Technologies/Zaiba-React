import React, { FC } from 'react';

const ProductInfo: FC = () => {
    return (
        <div className="col-md-5">
            <div className="zb-product-info-warpper">
                <div className="zb-product-info">
                    <h3>Dome Majesty Malachite Diamond Ring</h3>
                    <h5>
                        4,250.00 <span className="zb-actual-price">AED 4,550.00 AED</span>{" "}
                        <span className="zb-price-offer">( 10% Off )</span>
                    </h5>
                    <p>
                        The Dome 18K yellow gold diamond ring design uses bezel setting for the
                        beautiful rich green malachite stone which is known for its soothing
                        rich green colour and the spiritually inviting mo...
                    </p>
                </div>
                <div className="zb-product-size-prize-warpper">
                    <div className="zb-product-size">
                        <form action="#">
                            <label htmlFor="#">Available Size:</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected={true}>19</option>
                                <option value={1}>15</option>
                            </select>
                        </form>
                    </div>
                    <div className="zb-product-size">
                        <h4>Price Breakup:</h4>
                        <div className="zb-price-count-warpper">
                            <span className="gold-title">Gold</span>
                            <span className="gold-count">1172</span>
                        </div>
                    </div>
                    <div className="zb-product-size zb-product-price">
                        <h4>Price Breakup:</h4>
                        <div className="zb-price-count-warpper">
                            <span className="gold-title">Making</span>
                            <span className="gold-count">1172</span>
                        </div>
                    </div>
                </div>
                <div className="zb-product-quantity-warpper">
                    <div className="zb-product-quantity-input">
                        <button
                            className="zb-product-quantity-count zb-product-quantity-minus"
                            data-action="minus"
                            type="button"
                        >
                            -
                        </button>
                        <input
                            className="zb-product-quantity"
                            type="number"
                            name="zb-product-quantity"
                            min={1}
                            defaultValue={1}
                        />
                        <button
                            className="zb-product-quantity-count zb-product-quantity-add"
                            data-action="add"
                            type="button"
                        >
                            +
                        </button>
                    </div>
                    <a href="#" className="btn btn-cart">
                        Add to Cart
                    </a>
                </div>
                <div className="zb-product-wish-warpper">
                    <a href="#">
                        <i className="bi bi-heart" /> <span>Add To Wishlist</span>{" "}
                    </a>
                </div>
                <div className="product-short-details">
                    <h4>DETAILS</h4>
                    <div className="short-details-inner">
                        <ul>
                            <li>
                                Brands: <b>Dome</b>
                            </li>
                            <li>
                                Diamond: <b>0.8Ct</b>
                            </li>
                            <li>
                                Products: <b>Rings</b>
                            </li>
                            <li>
                                Metal color: <b>Yellow</b>
                            </li>
                            <li>
                                Diamond Clarity: <b>VS</b>
                            </li>
                            <li>
                                Diamond Color: <b>G-H</b>
                            </li>
                            <li>
                                Diamond Cut: <b>RB</b>
                            </li>
                            <li>
                                Other Stone: <b>Malachite - 13 Ct</b>
                            </li>
                            <li>
                                Metal Purity: <b>18k</b>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductInfo