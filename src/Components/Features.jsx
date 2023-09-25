import React from "react";

function Feature({ imgSrc, title }) {
  return (
    <div className="col-md-4 col-3 w-auto p-1 m-2 img-responsive img-thumbnail img-fluid shadow container">
      <img src={imgSrc} className="F-img rounded" alt="" />
      <h6 className="card-title">{title}</h6>
    </div>
  );
}

function Features() {
  const featuresData = [
    {
      imgSrc: "image/unsplash.jpg",
      title: "Free shipping",
    },
    {
      imgSrc: "image/online order.jpg",
      title: "Online order",
    },
    {
      imgSrc: "https://media.gettyimages.com/id/1044967460/photo/woman-with-coins-in-hand-with-purse.jpg?s=612x612&w=0&k=20&c=YydkpmWmOpnQe7SX6RQAQyRFzIgtFbbUKk_5NLbdkgs=",
      title: "Save Money",
    },
    {
      imgSrc: "https://media.gettyimages.com/id/1281297414/photo/artificial-intelligence-and-communication-network-concept.jpg?s=612x612&w=0&k=20&c=litNhHogb68Z7JH3QTOzabiZKWDyaJHcFaCbb9qpEj4=",
      title: "Discount Offers",
    },
    {
      imgSrc: "https://media.gettyimages.com/id/1369521969/photo/young-woman-paying-with-mobile-phone-at-a-street-market.jpg?s=612x612&w=0&k=20&c=0kjRe1MtWquAp1TNrGk6489OpNOj6JvulxEe1zDP10M=",
      title: "Happy Sell",
    },
    {
      imgSrc: "https://media.gettyimages.com/id/1319873303/photo/portrait-of-a-young-businessman-wearing-a-headset-while-working-in-an-office.jpg?s=612x612&w=0&k=20&c=iROKrjjjOTVfzoLlR7d-P_douQ_Z-9MjvhfJg70WcFk=",
      title: "24/7 Support",
    },
  ];

  return (
    <div className="container features container-fluid">
      <div className="row text-center mt-5 mx-auto me-auto justify-content-center align-items-center w-100">
        {featuresData.map((feature, index) => (
          <Feature key={index} imgSrc={feature.imgSrc} title={feature.title} />
        ))}
      </div>
    </div>
  );
}

export default Features;
