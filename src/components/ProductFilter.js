import React from 'react';
import './productFilter.css';

const ProductFilter = () => {
    return (
        <div className="filter-container">
            <div className="filter-section">
                <h3>Category</h3>
                <div>
                    <input type="checkbox" id="furniture" />
                    <label htmlFor="furniture">Furniture</label>
                </div>
                <div>
                    <input type="checkbox" id="lighting" />
                    <label htmlFor="lighting">Lighting</label>
                </div>
                <div>
                    <input type="checkbox" id="decoration" />
                    <label htmlFor="decoration">Decoration</label>
                </div>
                <div>
                    <input type="checkbox" id="bedding" />
                    <label htmlFor="bedding">Bedding</label>
                </div>
                <div>
                    <input type="checkbox" id="bath-shower" />
                    <label htmlFor="bath-shower">Bath & Shower</label>
                </div>
                <div>
                    <input type="checkbox" id="curtains" />
                    <label htmlFor="curtains">Curtains</label>
                </div>
                <div>
                    <input type="checkbox" id="toys" />
                    <label htmlFor="toys">Toys</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Price Range</h3>
                <div className="price-range">
                    <span>$0</span>
                    <input type="range" min="0" max="1500" />
                    <span>$1500</span>
                </div>
            </div>

            <div className="filter-section">
                <h3>Brand</h3>
                <div>
                    <input type="checkbox" id="poliform" />
                    <label htmlFor="poliform">Poliform</label>
                </div>
                <div>
                    <input type="checkbox" id="roche-bobois" />
                    <label htmlFor="roche-bobois">Roche Bobois</label>
                </div>
                <div>
                    <input type="checkbox" id="edra" />
                    <label htmlFor="edra">Edra</label>
                </div>
                <div>
                    <input type="checkbox" id="kartell" />
                    <label htmlFor="kartell">Kartell</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Ratings and Reviews</h3>
                <div>
                    <input type="radio" id="4stars" name="ratings" />
                    <label htmlFor="4stars">4 stars & up</label>
                </div>
                <div>
                    <input type="radio" id="3stars" name="ratings" />
                    <label htmlFor="3stars">3 stars & up</label>
                </div>
                <div>
                    <input type="radio" id="2stars" name="ratings" />
                    <label htmlFor="2stars">2 stars & up</label>
                </div>
                <div>
                    <input type="radio" id="1star" name="ratings" />
                    <label htmlFor="1star">1 star & up</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Discounts and Offers</h3>
                <div>
                    <input type="checkbox" id="discounts" />
                    <label htmlFor="discounts">Discounts Available</label>
                </div>
                <div>
                    <input type="checkbox" id="offers" />
                    <label htmlFor="offers">Offers</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>New Arrivals</h3>
                <div>
                    <input type="checkbox" id="new-arrivals" />
                    <label htmlFor="new-arrivals">New Arrivals</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Best Sellers</h3>
                <div>
                    <input type="checkbox" id="best-sellers" />
                    <label htmlFor="best-sellers">Best Sellers</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Availability</h3>
                <div>
                    <input type="radio" id="onStock" name="availability" />
                    <label htmlFor="onStock">On Stock</label>
                </div>
                <div>
                    <input type="radio" id="outOfStock" name="availability" />
                    <label htmlFor="outOfStock">Out of Stock</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Product Type</h3>
                <div>
                    <input type="checkbox" id="small" />
                    <label htmlFor="small">Small</label>
                </div>
                <div>
                    <input type="checkbox" id="medium" />
                    <label htmlFor="medium">Medium</label>
                </div>
                <div>
                    <input type="checkbox" id="large" />
                    <label htmlFor="large">Large</label>
                </div>
                <div>
                    <input type="checkbox" id="xl" />
                    <label htmlFor="xl">XL</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Color</h3>
                <div>
                    <input type="checkbox" id="red" />
                    <label htmlFor="red">Red</label>
                </div>
                <div>
                    <input type="checkbox" id="blue" />
                    <label htmlFor="blue">Blue</label>
                </div>
                <div>
                    <input type="checkbox" id="green" />
                    <label htmlFor="green">Green</label>
                </div>
                <div>
                    <input type="checkbox" id="black" />
                    <label htmlFor="black">Black</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Size/Dimensions</h3>
                <div>
                    <input type="checkbox" id="small-size" />
                    <label htmlFor="small-size">Small</label>
                </div>
                <div>
                    <input type="checkbox" id="medium-size" />
                    <label htmlFor="medium-size">Medium</label>
                </div>
                <div>
                    <input type="checkbox" id="large-size" />
                    <label htmlFor="large-size">Large</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Material</h3>
                <div>
                    <input type="checkbox" id="cotton" />
                    <label htmlFor="cotton">Cotton</label>
                </div>
                <div>
                    <input type="checkbox" id="polyester" />
                    <label htmlFor="polyester">Polyester</label>
                </div>
                <div>
                    <input type="checkbox" id="wool" />
                    <label htmlFor="wool">Wool</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Features</h3>
                <div>
                    <input type="checkbox" id="waterproof" />
                    <label htmlFor="waterproof">Waterproof</label>
                </div>
                <div>
                    <input type="checkbox" id="fire-resistant" />
                    <label htmlFor="fire-resistant">Fire Resistant</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Compatibility</h3>
                <div>
                    <input type="checkbox" id="compatible-brand1" />
                    <label htmlFor="compatible-brand1">Brand 1</label>
                </div>
                <div>
                    <input type="checkbox" id="compatible-brand2" />
                    <label htmlFor="compatible-brand2">Brand 2</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Model/Year</h3>
                <div>
                    <input type="checkbox" id="2020" />
                    <label htmlFor="2020">2020</label>
                </div>
                <div>
                    <input type="checkbox" id="2021" />
                    <label htmlFor="2021">2021</label>
                </div>
                <div>
                    <input type="checkbox" id="2022" />
                    <label htmlFor="2022">2022</label>
                </div>
                <div>
                <input type="text" id="year" placeholder="Enter Year" />
                </div>
            </div>

            <div className="filter-section">
                <h3>Location/Delivery Options</h3>
                <div>
                <input type="text" id="location" placeholder="Enter Location" />
                </div>
            </div>

            <div className="filter-section">
                <h3>Seller</h3>
                <div>
                <input type="text" id="sellerName" placeholder="Enter Seller Name" />
                </div>
            </div>

            <div className="filter-section">
                <h3>Payment Options</h3>
                <div>
                    <input type="checkbox" id="credit-card" />
                    <label htmlFor="credit-card">Credit Card</label>
                </div>
                <div>
                    <input type="checkbox" id="paypal" />
                    <label htmlFor="paypal">PayPal</label>
                </div>
                <div>
                    <input type="checkbox" id="cod" />
                    <label htmlFor="cod">Cash on Delivery</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Customer Demographics</h3>
                <div>
                    <input type="checkbox" id="male" />
                    <label htmlFor="male">Male</label>
                </div>
                <div>
                    <input type="checkbox" id="female" />
                    <label htmlFor="female">Female</label>
                </div>
                <div>
                    <input type="checkbox" id="kids" />
                    <label htmlFor="kids">Kids</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Usage</h3>
                <div>
                    <input type="checkbox" id="casual" />
                    <label htmlFor="casual">Casual Wear</label>
                </div>
                <div>
                    <input type="checkbox" id="formal" />
                    <label htmlFor="formal">Formal Wear</label>
                </div>
                <div>
                    <input type="checkbox" id="outdoor" />
                    <label htmlFor="outdoor">Outdoor Gear</label>
                </div>
            </div>

            <div className="filter-section">
                <h3>Occasion</h3>
                <div>
                    <input type="checkbox" id="wedding" />
                    <label htmlFor="wedding">Wedding</label>
                </div>
                <div>
                    <input type="checkbox" id="party" />
                    <label htmlFor="party">Party</label>
                </div>
                <div>
                    <input type="checkbox" id="holiday" />
                    <label htmlFor="holiday">Holiday</label>
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;
