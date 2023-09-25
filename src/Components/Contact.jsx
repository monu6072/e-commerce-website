import React from "react";

function Contact() {
  return (
    <div>
      {" "}
      <section id="newsletters" class="section-p1 section-m1">
        <div class="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            get E-mail updates about our latest shop and{" "}
            <span>special offers</span>
          </p>
        </div>
        <div class="form">
          <input type="text" placeholder="your email address" />
          <button>Sign up</button>
        </div>
      </section>
    </div>
  );
}

export default Contact;
