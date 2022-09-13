import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getRandomCategoriesHome } from "../../../Apis/Home";
import { query_stale_time } from "../../../Helpers/Helpers";

function SectionFour() {

  return (
    <section style={{ marginTop: 60 }}>
      <div className="container-fluid">
        <div className="row p-55-0">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 col-sm-12 col-xs-12 text-center"
                style={{ marginBottom: 30 }}
              >
                <h1
                  className="ff-thunder fc-orange"
                  daata-aoos="fade-down"
                  daata-aoos-duration={800}
                >
                  Sustainable Products
                </h1>
                <p
                  className="mt-20 fc-gray"
                  daata-aoos="fade-up"
                  daata-aoos-duration={800}
                  style={{ marginBottom: 20 }}
                >
                  Your desired items are made with 100% natural and high-quality materials, easy on the pocket, and quickly delivered. We make your shopping experience worthwhile.
                </p>
                <Link
                  className="btn-orange mt-20 text-left"
                  daata-aoos="zoom-in"
                  to="/about"
                >
                  Shop Now!
                </Link>
              </div>
              <div
                className="col text-center"
                daata-aoos="fade-up"
                daata-aoos-duration={400}
              >
                <div className="serviceBx">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/icons/s1.png`}
                    className="img-fluid"
                  />
                  <h5 className="ff-thunder fc-orange mt-10">Organic</h5>
                </div>
              </div>
              <div
                className="col text-center"
                daata-aoos="fade-up"
                daata-aoos-duration={600}
              >
                <div className="serviceBx">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/icons/s2.png`}
                    className="img-fluid"
                  />
                  <h5 className="ff-thunder fc-orange mt-10">100% Natural</h5>
                </div>
              </div>
              <div
                className="col text-center"
                daata-aoos="fade-up"
                daata-aoos-duration={800}
              >
                <div className="serviceBx">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/icons/s3.png`}
                    className="img-fluid"
                  />
                  <h5 className="ff-thunder fc-orange mt-10">
                    Handmade With Care
                  </h5>
                </div>
              </div>
              <div
                className="col text-center"
                daata-aoos="fade-up"
                daata-aoos-duration={1000}
              >
                <div className="serviceBx">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/icons/s4.png`}
                    className="img-fluid"
                  />
                  <h5 className="ff-thunder fc-orange mt-20">Fairtrade</h5>
                </div>
              </div>
              <div
                className="col text-center"
                daata-aoos="fade-up"
                daata-aoos-duration={1200}
              >
                <div className="serviceBx">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/icons/s5.png`}
                    className="img-fluid"
                  />
                  <h5 className="ff-thunder fc-orange mt-10">
                    Recycled Materials
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
