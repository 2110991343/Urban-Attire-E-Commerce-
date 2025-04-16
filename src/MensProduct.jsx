import React from 'react';
import './MensProduct.css';
import { Link } from 'react-router-dom';

const MensProduct = () => {
  return (
    <div className="mensproduct-container">
      {/* Header Navigation */}
      <div className="utility-banner">
        <p>New Utility Collection: Explore-Ready Features On Your Fave Apparel <a href="/shop/men">Shop Men</a> | <a href="/shop/women">Shop Women</a></p>
        <button className="banner-next">→</button>
      </div>

      <div className="main-nav">
        <div className="nav-categories">
          <a href="/men" className="nav-link">MEN</a>
          <Link to="/shop-women" className="nav-link">WOMEN</Link>

          <a href="/accessories" className="nav-link">ACCESSORIES</a>
          <a href="/new-arrivals" className="nav-link">NEW ARRIVALS</a>
        </div>
        
        <div className="logo">
          <a href="/">
            <h1>Urban Attire</h1>
          </a>
        </div>
        
        <div className="nav-right">
          <a href="/sustainability" className="nav-link">SUSTAINABILITY</a>
          <a href="/collections" className="nav-link">COLLECTIONS</a>
          <a href="/stores" className="nav-link">STORES</a>
          <div className="nav-icons">
            <button className="icon-btn search">🔍</button>
            <button className="icon-btn account">👤</button>
            <Link to="/about" className="nav-link">
            <button className="icon-btn help">❓</button>
            </Link>
            <button className="icon-btn cart">🛒</button>
          </div>
        </div>
      </div>

      {/* Breadcrumb and Category Title */}
      <div className="breadcrumb">
        <a href="/">Home</a> /
      </div>

      <h1 className="category-title">Men's Clothing</h1>

      <div className="category-container">
        {/* Sidebar Navigation */}
        <div className="sidebar">
          <ul className="category-list">
            <li><a href="/men/tshirts">T-Shirts & Polos</a></li>
            <li><a href="/men/shirts">Button-Down Shirts</a></li>
            <li><a href="/men/pants">Trousers & Chinos</a></li>
            <li><a href="/men/jeans">Jeans</a></li>
            <li><a href="/men/outerwear">Jackets & Coats</a></li>
            <li><a href="/men/suits">Suits & Blazers</a></li>
            <li><a href="/men/activewear">Activewear</a></li>
            <li><a href="/men/bestsellers">Bestsellers</a></li>
            <li><a href="/men/sale">Sale Items</a></li>
          </ul>

          <div className="filter-section">
            <h3>Filter By:</h3>
            <hr />

            <div className="size-filter">
              <h4>SIZES</h4>
              <p className="size-info">Most of our clothing comes in standard sizes. If you're between sizes, we recommend sizing up for comfort.</p>
              
              <div className="size-buttons">
                <button className="size-btn">S</button>
                <button className="size-btn">M</button>
                <button className="size-btn">L</button>
                <button className="size-btn">XL</button>
                <button className="size-btn">XXL</button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          <div className="product-item">
            <div className="product-image">
              <span className="product-tag">NEW</span>
              <img src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Men's Classic Oxford Shirt" />
            </div>
            <h3 className="product-name">Men's Classic Oxford Shirt</h3>
            <p className="product-price">$85</p>
            <div className="product-colors">
              <button className="color-option white"></button>
              <button className="color-option navy"></button>
              <button className="color-option gray"></button>
              <button className="color-option beige"></button>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <span className="product-tag">NEW</span>
              <img src="https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80" alt="Men's Comfort Stretch Chinos" />
            </div>
            <h3 className="product-name">Men's Comfort Stretch Chinos</h3>
            <p className="product-price">$78</p>
            <div className="product-colors">
              <button className="color-option khaki"></button>
              <button className="color-option navy"></button>
              <button className="color-option black"></button>
              <button className="color-option olive"></button>
            </div>
          </div>

          {/* Additional Products */}
          <div className="product-item">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Casual Denim Shirt" />
            </div>
            <h3 className="product-name">Casual Denim Shirt</h3>
            <p className="product-price">$65</p>
            <div className="product-colors">
              <button className="color-option light-blue"></button>
              <button className="color-option dark-blue"></button>
              <button className="color-option black"></button>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <span className="product-tag">BESTSELLER</span>
              <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Slim Fit Cotton T-Shirt" />
            </div>
            <h3 className="product-name">Slim Fit Cotton T-Shirt</h3>
            <p className="product-price">$45</p>
            <div className="product-colors">
              <button className="color-option white"></button>
              <button className="color-option black"></button>
              <button className="color-option navy"></button>
              <button className="color-option olive"></button>
              <button className="color-option burgundy"></button>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80" alt="Relaxed Linen Pants" />
            </div>
            <h3 className="product-name">Relaxed Linen Pants</h3>
            <p className="product-price">$95</p>
            <div className="product-colors">
              <button className="color-option beige"></button>
              <button className="color-option navy"></button>
              <button className="color-option olive"></button>
              <button className="color-option white"></button>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" alt="Slim Fit Jeans" />
            </div>
            <h3 className="product-name">Slim Fit Jeans</h3>
            <p className="product-price">$89</p>
            <div className="product-colors">
              <button className="color-option light-blue"></button>
              <button className="color-option dark-blue"></button>
              <button className="color-option black"></button>
              <button className="color-option gray"></button>
            </div>
          </div>

          <div className="product-banner">
            <div className="banner-content">
              <h2>Up For Everything</h2>
              <p>Embrace spring with our durable Essential Collection.</p>
              <div className="banner-buttons">
                <a href="/shop/men" className="banner-btn">SHOP MEN</a>
                <a href="/shop/women" className="banner-btn">SHOP WOMEN</a>
              </div>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <span className="product-tag">NEW</span>
              <img src="https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Lightweight Bomber Jacket" />
            </div>
            <h3 className="product-name">Lightweight Bomber Jacket</h3>
            <p className="product-price">$120</p>
            <div className="product-colors">
              <button className="color-option black"></button>
              <button className="color-option navy"></button>
              <button className="color-option olive"></button>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1512400930990-e0bc0bd809df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Wool Blend Sweater" />
            </div>
            <h3 className="product-name">Wool Blend Sweater</h3>
            <p className="product-price">$110</p>
            <div className="product-colors">
              <button className="color-option gray"></button>
              <button className="color-option navy"></button>
              <button className="color-option burgundy"></button>
              <button className="color-option black"></button>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <span className="product-tag">SALE</span>
              <img src="https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" alt="Smart Casual Blazer" />
            </div>
            <h3 className="product-name">Smart Casual Blazer</h3>
            <p className="product-price"><span className="original-price">$175</span> $135</p>
            <div className="product-colors">
              <button className="color-option navy"></button>
              <button className="color-option charcoal"></button>
              <button className="color-option khaki"></button>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1589831494949-63e709a6aeac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Cotton Polo Shirt" />
            </div>
            <h3 className="product-name">Cotton Polo Shirt</h3>
            <p className="product-price">$55</p>
            <div className="product-colors">
              <button className="color-option white"></button>
              <button className="color-option navy"></button>
              <button className="color-option red"></button>
              <button className="color-option green"></button>
              <button className="color-option black"></button>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <span className="product-tag">BESTSELLER</span>
              <img src="https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Formal Dress Shirt" />
            </div>
            <h3 className="product-name">Formal Dress Shirt</h3>
            <p className="product-price">$75</p>
            <div className="product-colors">
              <button className="color-option white"></button>
              <button className="color-option light-blue"></button>
              <button className="color-option pink"></button>
              <button className="color-option black"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensProduct;