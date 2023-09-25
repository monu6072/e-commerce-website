import React, { useState } from 'react';

function Footer() {
  const [appInstalled, setAppInstalled] = useState(false);

  const installApp = () => {
    setAppInstalled(true);
  };

  return (
    <footer className="bg-light text-dark py-4 ms-auto mx-auto" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h4>Contact</h4>
            <p><strong>Address:</strong> Gurugram, Haryana</p>
            <p><strong>Phone:</strong> +91 8607721438</p>
            <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
          </div>

          <div className="col-md-3 col-sm-6">
            <h4>About</h4>
            <ul className="list-unstyled">
              <li><a href="ok">About us</a></li>
              <li><a href="ok">Delivery Information</a></li>
              <li><a href="ok">Privacy Policy</a></li>
              <li><a href="ok">Terms & Conditions</a></li>
              <li><a href="ok">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h4>My Account</h4>
            <ul className="list-unstyled">
              <li><a href="ok">Sign In</a></li>
              <li><a href="ok">View Cart</a></li>
              <li><a href="ok">My Wishlist</a></li>
              <li><a href="ok">Track My Order</a></li>
              <li><a href="ok">Help</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 text-center">
            <h4>Install App</h4>
            {!appInstalled ? (
              <>
                <p>From App Store or Google Play</p>
                <div className="row">
                  <img src="/image/play1.png" alt="" height="50px" width="100px" />
                  <img src="/image/play2.png" alt="" height="50px" width="100px" />
                </div>
                <p>Secured payment Gateways</p>
                <img src="/image/payment.png" alt="" height="100px" />
                <button onClick={installApp} className="btn btn-primary mt-2">Install Now</button>
              </>
            ) : (
              <p>App Installed</p>
            )}
          </div>
        </div>
        <div className="row">
          <div className=" text-center">
            <p>Ecommerce Website Developed by Monu Verma</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
