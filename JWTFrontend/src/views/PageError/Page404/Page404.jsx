import { useNavigate } from "react-router-dom";
import "./Page404.scss";
const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div id="page404">
      <section className="page_404">
        <div className="row">
          <div className="col-sm-12 col-sm-offset-1  text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center ">404</h1>
            </div>
            <div className="contant_box_404">
              <button className="btn btn-success" onClick={() => navigate("/")}>
                Về trang chủ
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page404;
