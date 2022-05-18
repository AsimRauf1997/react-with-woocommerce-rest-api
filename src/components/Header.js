import "../App.css";
const Header = () => {
  return (
    <div className='header'>
      <a href='/' className='logo'>
        Demo Project For WooCommerce
      </a>
      <div className='header-right'>
        <a href='/'>Books</a>
        <a href='/crafts'>Crafts</a>
        <a href='/naturals'>Naturals</a>
        <a href='/orders'>Orders</a>
        <a href='/fav'>Favorites</a>
      </div>
    </div>
  );
};

export default Header;
