import React from 'react';
import './styles/WomesProduct.css'; // Assuming you'll create a similar CSS file


const WomensProduct = () => {
  return (
    <div className="womensproduct-container">
      {/* Header Navigation */}
      <div className="utility-banner">
        <p>New Utility Collection: Explore-Ready Features On Your Fave Apparel <a href="/shop/men">Shop Men</a> | <a href="/shop/women">Shop Women</a></p>
        <button className="banner-next">→</button>
      </div>

      <div className="main-nav">
        <div className="nav-categories">
          <a href="/mens-products" className="nav-link">MEN</a>
          <a href="/shop-women" className="nav-link">WOMEN</a>
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
            <button className="icon-btn help">❓</button>
            <button className="icon-btn cart">🛒</button>
          </div>
        </div>
      </div>

      {/* Breadcrumb and Category Title */}
      <div className="breadcrumb">
        <a href="/">Home</a> /
      </div>

      <h1 className="category-title">Women's Clothing</h1>

      <div className="category-container">
        {/* Sidebar Navigation */}
        <div className="sidebar">
          <ul className="category-list">
            <li><a href="/women/tops">Tops & Blouses</a></li>
            <li><a href="/women/dresses">Dresses</a></li>
            <li><a href="/women/pants">Pants & Leggings</a></li>
            <li><a href="/women/jeans">Jeans</a></li>
            <li><a href="/women/outerwear">Jackets & Coats</a></li>
            <li><a href="/women/skirts">Skirts</a></li>
            <li><a href="/women/activewear">Activewear</a></li>
            <li><a href="/women/bestsellers">Bestsellers</a></li>
            <li><a href="/women/sale">Sale Items</a></li>
          </ul>

          <div className="filter-section">
            <h3>Filter By:</h3>
            <hr />

            <div className="size-filter">
              <h4>SIZES</h4>
              <p className="size-info">Most of our clothing comes in standard sizes. If you're between sizes, we recommend sizing up for comfort.</p>
              
              <div className="size-buttons">
                <button className="size-btn">XS</button>
                <button className="size-btn">S</button>
                <button className="size-btn">M</button>
                <button className="size-btn">L</button>
                <button className="size-btn">XL</button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          <div className="product-item">
            <div className="product-image">
              <span className="product-tag">NEW</span>
              <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" alt="Women's Silk Blouse" />
            </div>
            <h3 className="product-name">Women's Silk Blouse</h3>
            <p className="product-price">$88</p>
            <div className="product-colors">
              <button className="color-option white"></button>
              <button className="color-option navy"></button>
              <button className="color-option burgundy"></button>
              <button className="color-option beige"></button>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <span className="product-tag">NEW</span>
              <img src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="High-Waisted Trousers" />
            </div>
            <h3 className="product-name">High-Waisted Trousers</h3>
            <p className="product-price">$82</p>
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
              <img src="https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1726&q=80" alt="Casual Wrap Dress" />
            </div>
            <h3 className="product-name">Casual Wrap Dress</h3>
            <p className="product-price">$95</p>
            <div className="product-colors">
              <button className="color-option navy"></button>
              <button className="color-option burgundy"></button>
              <button className="color-option black"></button>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <span className="product-tag">BESTSELLER</span>
              <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Fitted Cotton T-Shirt" />
            </div>
            <h3 className="product-name">Fitted Cotton T-Shirt</h3>
            <p className="product-price">$42</p>
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
              <img src="https://images.unsplash.com/photo-1509182469511-7f0b50bfa63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" alt="Linen Blend Culottes" />
            </div>
            <h3 className="product-name">Linen Blend Culottes</h3>
            <p className="product-price">$78</p>
            <div className="product-colors">
              <button className="color-option beige"></button>
              <button className="color-option navy"></button>
              <button className="color-option olive"></button>
              <button className="color-option white"></button>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Slim Fit Jeans" />
            </div>
            <h3 className="product-name">Slim Fit Jeans</h3>
            <p className="product-price">$85</p>
            <div className="product-colors">
              <button className="color-option light-blue"></button>
              <button className="color-option dark-blue"></button>
              <button className="color-option black"></button>
              <button className="color-option gray"></button>
            </div>
          </div>

          <div className="product-banner">
            <div className="banner-content">
              <h2>Effortless Style</h2>
              <p>Discover our new collection of versatile pieces for any occasion.</p>
              <div className="banner-buttons">
                <a href="/shop-women" className="banner-btn">SHOP WOMEN</a>
                <a href="/mens-products" className="banner-btn">SHOP MEN</a>
              </div>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <span className="product-tag">NEW</span>
              <img src="https://images.unsplash.com/photo-1632573801508-4ede5a46c4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Tailored Blazer" />
            </div>
            <h3 className="product-name">Tailored Blazer</h3>
            <p className="product-price">$125</p>
            <div className="product-colors">
              <button className="color-option black"></button>
              <button className="color-option navy"></button>
              <button className="color-option beige"></button>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Cashmere Blend Sweater" />
            </div>
            <h3 className="product-name">Cashmere Blend Sweater</h3>
            <p className="product-price">$115</p>
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
              <img src="https://images.unsplash.com/photo-1551163943-3f6a855d1153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" alt="Pleated Midi Skirt" />
            </div>
            <h3 className="product-name">Pleated Midi Skirt</h3>
            <p className="product-price"><span className="original-price">$90</span> $68</p>
            <div className="product-colors">
              <button className="color-option navy"></button>
              <button className="color-option charcoal"></button>
              <button className="color-option khaki"></button>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1617953644310-e690da9be982?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Printed Silk Scarf" />
            </div>
            <h3 className="product-name">Printed Silk Scarf</h3>
            <p className="product-price">$58</p>
            <div className="product-colors">
              <button className="color-option navy"></button>
              <button className="color-option burgundy"></button>
              <button className="color-option pink"></button>
              <button className="color-option green"></button>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
              <span className="product-tag">BESTSELLER</span>
              <img src="https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Button-Down Shirt Dress" />
            </div>
            <h3 className="product-name">Button-Down Shirt Dress</h3>
            <p className="product-price">$89</p>
            <div className="product-colors">
              <button className="color-option white"></button>
              <button className="color-option light-blue"></button>
              <button className="color-option pink"></button>
              <button className="color-option olive"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomensProduct;