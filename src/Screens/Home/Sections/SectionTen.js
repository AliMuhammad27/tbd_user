import React from "react";

function SectionTen() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row p-55-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center mt-100">
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/insta.png`}
                  className="img-fluid"
                  daata-aoos="fade-down"
                  daata-aoos-duration={800}
                />
                <br />
                <img
                  src={`${process.env.PUBLIC_URL}/img/logo.png`}
                  className="img-fluid"
                  daata-aoos="fade-up"
                  daata-aoos-duration={800}
                />
                <p
                  className="mt-10"
                  daata-aoos="fade-up"
                  daata-aoos-duration={800}
                >
                  With a passion for high-quality products and services
                </p>
                <div
                  className="btns mt-20"
                  daata-aoos="fade-down"
                  daata-aoos-duration={800}
                >
                  <a
                    href="https://www.instagram.com/oldentimesofficial/"
                    target="_blank"
                    className="btn-orange"
                  >
                    SHOP INSTAGRAM
                  </a>
                  <a
                    href="https://twitter.com/OldenTimesOffi1"
                    target="_blank"
                    className="btn-purple"
                  >
                    FOLLOW US
                  </a>
                </div>
              </div>

              <div className="col-lg-6 text-center">
                <img
                  src={`${process.env.PUBLIC_URL}/img/insta-ss.png`}
                  className="img-fluid"
                  daata-aoos="fade-down"
                  daata-aoos-delay={800}
                />
              </div>
              {/* <div className="container-fluid">
                <h2 style={{ textAlign: "center", color: "black" }}>Our Newsletter</h2>
                <p style={{ textAlign: "center", fontSize: 20 }}>Sign-up for free to receive the latest news, promotional deals, and discounts directly into your inbox.</p>
              </div> */}
              {/* <div className="container-fluid">
                <h2 style={{ textAlign: "center", color: "black" }}>Saint Shop </h2>
                <p style={{ textAlign: "center", fontSize: 20 }}>Saint Shop is a dedicated e-commerce store that provides the most innovative and quality products at the lowest prices, delivered straight to your door.</p>
              </div> */}
              {/* <div className="container-fluid">
                <h2 style={{ textAlign: "center", color: "black" }}>Contact Us</h2>
                <p style={{ textAlign: "center", fontSize: 20 }}>Contact us via email or phone if you have any concerns or queries regarding our products or services. Our Customer Support is active 24/7 to help resolve your issues promptly.</p>
              </div> */}
            </div>
          </div>
          {/* <div className="container-fluid" style={{ paddingLeft: "250px", marginTop: "100px" }}>
            <h1 style={{ color: "black" }}>About Us</h1>
            <p style={{ fontSize: 20 }}>Saint Shop is an online retail store offering a wide range of trendy outfits, fashion accessories, beauty products, consumer electronics, and the latest fitness tools and accessories collection. With passion, dedication, and honesty driving our desire to provide our customers with an exceptional shopping experience, we have managed to win the trust of our expanding customer base.
            Here, we courage every individual to sell their products on our platform!
            We have all you need, from the latest gadgets and fitness tools to fashion, home improvement, outdoors, and lifestyle products. We offer top-notch products at affordable prices and ensure quick delivery, 100% satisfaction, secure payment gateways, and a streamlined checkout process for our valued clients. Moreover, we offer a worldwide accessible shipping facility to ensure timely shipment.
It's time to have an online shopping experience like never before. </p>
            <h2 style={{ color: "blue" }}>Get the Best Shopping Experience NOW!</h2>
          </div> */}

          {/* <div className="container-fluid" style={{ paddingLeft: "250px", marginTop: "50px" }}>
            <h1 style={{ color: "black" }}>Categories </h1>
            <p style={{ fontSize: 20 }}>Get your hands on our exclusive products now and enjoy the amazing discounts.
We strive to offer our customers premium-quality products to cater to their daily needs. We don't compromise on the quality of our products or services, which is a testimony to our promise to provide exceptional customer service and 100% satisfaction </p>
            <h2 style={{ color: "blue" }}>Shop Now!</h2>
          </div> */}

          {/* <div className="container-fluid" style={{ paddingLeft: "250px", marginTop: "50px" }}>
            <h1 style={{ color: "black" }}> New Arrivals </h1>
            <p style={{ fontSize: 20 }}>We highlight brands making a difference and helping build a better place for us all.
            We offer high-quality products at an affordable price and ensure quick delivery, secure payment gateways, and a streamlined checkout process for our valued clients. It's time to have an online shopping experience like never before!
</p>
            <h2 style={{ color: "blue" }}>Check Our New Arrivals Now!</h2>
          </div> */}
          {/* <div className="container-fluid" style={{ paddingLeft: "250px", marginTop: "50px" }}>
            <h1 style={{ color: "black" }}>Featured Products  </h1>
            <p style={{ fontSize: 20 }}>Browse our popular product category and find everything you need with a few clicks. Your favorite and most desired products are made with 100% natural and high-quality materials, easy on the pocket, and quickly delivered to your doorstep.
 </p>
            <h2 style={{ color: "blue" }}>Browse, Select, Order, and Get It Delivered Now; Happy Shopping!</h2>
          </div> */}
          {/* <div className="container-fluid" style={{ paddingLeft: "250px", marginTop: "50px" }}>
            <h1 style={{ color: "black" }}>Gallery </h1>
            <p style={{ fontSize: 20 }}>Our blend of affordable and sustainable assortments of products distinguishes us from our competitors.

</p>
            <h2 style={{ color: "blue" }}>Visit Our Gallery Now!</h2>
          </div> */}
          {/* <div className="container-fluid" style={{ paddingLeft: "250px", marginTop: "50px" }}>
            <h1 style={{ color: "black" }}>Frequently Asked Questions </h1>
            <h3 style={{ fontSize: 20 }}><strong>What is the time duration for the reply to the email?</strong>

            </h3>
            <p style={{ marginTop: "10px", marginBottom: "10px" }}>We respond to emails within 24-48 hours. Please include your name, contact number, and order number in the email message to avoid delays.</p>

            <h3 style={{ fontSize: 20 }}><strong>I haven't received my order though it shows it was delivered. What do I do?</strong>

            </h3>
            <p style={{ marginTop: "10px", marginBottom: "10px" }}>Due to bad weather or heavy shipping volume, packages shipping through the economy may be delayed. Please allow us 10-15 business days after shipment for delivery. Reach out to our Customer Support if further assistance is required.</p>




            <h3 style={{ fontSize: 20 }}><strong>Can I have my order delivered to a hotel?</strong>

            </h3>
            <p style={{ marginTop: "10px", marginBottom: "10px" }}>We will ship orders to valid addresses. You will need to pay for the postage if the order is received at your provided address. We cannot change delivery addresses after the order has been processed.</p>


            <h3 style={{ fontSize: 20 }}><strong>What payment methods do you accept?</strong>

            </h3>
            <p style={{ marginTop: "10px", marginBottom: "10px" }}>We accept Cash on Delivery and online payments via Visa, American Express, MasterCard, Discover, PayPal, Venmo, Apple Pay, etc.</p>

          </div> */}
        </div>
      </div>
    </section>
  );
}

export default SectionTen;
