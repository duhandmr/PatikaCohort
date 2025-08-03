function ProductCard({ img, title, price }) {
  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <div className="product-info">
        <h3>{title}</h3>
        <div className="product-prices">
          <span className="price">{price}</span>
        </div>
        <button className="add-cart-btn">
          <span className="cart-icon">
            {/* SVG Sepet ikonu */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6H21L20 13H7"
                stroke="#222"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="8.5" cy="19.5" r="1.5" fill="#222" />
              <circle cx="17.5" cy="19.5" r="1.5" fill="#222" />
            </svg>
          </span>
          <span className="cart-btn-text">Add To Cart</span>
          <span className="cart-icon fake"></span>
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
