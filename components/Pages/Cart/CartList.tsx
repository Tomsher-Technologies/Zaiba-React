import React, { FC } from 'react';
import Link from 'next/link';

const CartList: FC = () => {
    return (
        <div className="col-md-8">
            <div className="zb-cart-list">
                <div className=" zb-cart-list-title ">
                    <span className="pull-right">
                        {" "}
                        Cart(<b>5</b>)
                    </span>
                </div>
                <div className="zb-cart-content">
                    <div className="table-responsive">
                        <table className="table shoping-cart-table">
                            <tbody>
                                <tr>
                                    <td width={90}>
                                        <div className="zb-cart-product-thumb">
                                            <img
                                                src="/images/image 13.png"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </td>
                                    <td className="zb-cart-product-info">
                                        <h3>Dome Majesty Malachite Diamond Ring</h3>
                                        <ul>
                                            <li>Size: 19</li>
                                            <li>Price Breakup:1172</li>
                                        </ul>
                                        <div className="zb-cart-action">
                                            <a href="#" className="zb-cart-action">
                                                <i className="bi bi-heart" /> <span>Move to Wishlist</span>
                                            </a>
                                            <a href="#" className="zb-cart-action">
                                                <i className="bi bi-trash3" /> <span>Remove</span>
                                            </a>
                                        </div>
                                    </td>
                                    <td width={65} className="zb-product-cart-count">
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
                                        </div>
                                    </td>
                                    <td className="zb-product-cart-price">
                                        <h4>AED180,00</h4>
                                        <small className="text-muted">AED230,00</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td width={90}>
                                        <div className="zb-cart-product-thumb">
                                            <img
                                                src="/images/image 13.png"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </td>
                                    <td className="zb-cart-product-info">
                                        <h3>Dome Majesty Malachite Diamond Ring</h3>
                                        <ul>
                                            <li>Size: 19</li>
                                            <li>Price Breakup:1172</li>
                                        </ul>
                                        <div className="zb-cart-action">
                                            <a href="#" className="zb-cart-action">
                                                <i className="bi bi-heart" /> <span>Move to Wishlist</span>
                                            </a>
                                            <a href="#" className="zb-cart-action">
                                                <i className="bi bi-trash3" /> <span>Remove</span>
                                            </a>
                                        </div>
                                    </td>
                                    <td width={65} className="zb-product-cart-count">
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
                                        </div>
                                    </td>
                                    <td className="zb-product-cart-price">
                                        <h4>AED180,00</h4>
                                        <small className="text-muted">AED230,00</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td width={90}>
                                        <div className="zb-cart-product-thumb">
                                            <img
                                                src="/images/image 13.png"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </td>
                                    <td className="zb-cart-product-info">
                                        <h3>Dome Majesty Malachite Diamond Ring</h3>
                                        <ul>
                                            <li>Size: 19</li>
                                            <li>Price Breakup:1172</li>
                                        </ul>
                                        <div className="zb-cart-action">
                                            <a href="#" className="zb-cart-action">
                                                <i className="bi bi-heart" /> <span>Move to Wishlist</span>
                                            </a>
                                            <a href="#" className="zb-cart-action">
                                                <i className="bi bi-trash3" /> <span>Remove</span>
                                            </a>
                                        </div>
                                    </td>
                                    <td width={65} className="zb-product-cart-count">
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
                                        </div>
                                    </td>
                                    <td className="zb-product-cart-price">
                                        <h4>AED180,00</h4>
                                        <small className="text-muted">AED230,00</small>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="zb-product-cart-bottom">
                <Link className="shopping-btn" href="/product-lists">
                    <i className="bi bi-arrow-left" /> Continue shopping
                </Link>
                <Link href="/checkout" className="btn btn-login">
                    Checkout
                </Link>
            </div>
        </div>

    )
}

export default CartList