import { useDispatch, useSelector } from "react-redux";
import "./Menu.scss";
import { useNavigate } from "react-router-dom";
import userAction from "../../actions/userAction";

const Menu = () => {
  const userRedux = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changePage = (url) => {
    navigate(url);
  };
  return (
    <div id="custom-menu">
      <nav>
        <div className="wrapper">
          <div className="logo">
            <span onClick={() => changePage("/users")}>Bảo Anh IT</span>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>
            </label>
            <li>
              <span onClick={() => changePage("/users")}>
                Quản lý người dùng
              </span>
            </li>
            <li>
              <span className="desktop-item">{userRedux.user?.username}</span>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">
                {userRedux.user?.username}
              </label>
              <ul className="drop-menu">
                <li>
                  <span onClick={() => dispatch(userAction.logout())}>
                    Đăng xuất
                  </span>
                </li>
              </ul>
            </li>
            {/* <li>
              <span  className="desktop-item">
                Mega Menu
              </span>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Mega Menu
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    />
                  </div>
                  <div className="row">
                    <header>Design Services</header>
                    <ul className="mega-links">
                      <li>
                        <span >Graphics</span>
                      </li>
                      <li>
                        <span >Vectors</span>
                      </li>
                      <li>
                        <span >Business cards</span>
                      </li>
                      <li>
                        <span >Custom logo</span>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Email Services</header>
                    <ul className="mega-links">
                      <li>
                        <span >Personal Email</span>
                      </li>
                      <li>
                        <span >Business Email</span>
                      </li>
                      <li>
                        <span >Mobile Email</span>
                      </li>
                      <li>
                        <span >Web Marketing</span>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Security services</header>
                    <ul className="mega-links">
                      <li>
                        <span >Site Seal</span>
                      </li>
                      <li>
                        <span >VPS Hosting</span>
                      </li>
                      <li>
                        <span >Privacy Seal</span>
                      </li>
                      <li>
                        <span >Website design</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li> */}
            {/* <li>
              <span >Feedback</span>
            </li> */}
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
