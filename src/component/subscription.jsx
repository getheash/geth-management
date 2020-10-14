import React, { useState } from "react";

const Subscription = () => {
  /* const [submit, setSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true); 
  }; */

  return (
    <div>
      <section id="subscription" className="border border-primary">
        <p>Please fill the required details for subscription:</p>
        <form
          name="subscribe"
          id="subscriptionForm"
          method="post"
        >
          <input type="hidden" name="form-name" value="subscribe" />
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Enter your first and last name"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="url">Copyright Website</label>
              <input
                type="url"
                className="form-control"
                name="website"
                id="url"
                placeholder="Enter your website url"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label for="urlOptional">
                <i>optional</i>
              </label>
              <input
                type="url"
                className="form-control"
                name="url-optional"
                id="urlOptional"
                placeholder="Enter your 2nd website url"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="copyrightTitle">Copyright Title</label>
            <input
              type="text"
              className="form-control"
              name="copyright-title"
              id="copyrightTitle"
              placeholder="Enter the title of your copyright content"
              required
            />
          </div>
          <div className="form-group">
            <label for="subscriptionPlan">Subscription Plan</label>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="subscription-plan" id="plan1" value="option1" checked />
            <label className="form-check-label" for="plan1">
                1 month subscription - $350 for unlimited takedowns
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="subscription-plan" id="plan2" value="option2" />
            <label className="form-check-label" for="plan2">
                3 month subscription - $900 ($150 off) for unlimited takedowns
            </label>
            </div>
          </div>
          <div className="form-group">
            <label for="referralCode">
              Referral Code <span className="clue">(optional)</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="referral-code"
              id="referralCode"
              placeholder="Enter referral code"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {/* {submit ? (
            <div className="success-message bg-primary rounded-sm text-white">
              Success! Look out for an email with payment info from us. Thank
              you.
            </div>
          ) : null} */}
        </form>
      </section>
    </div>
  );
};

export default Subscription;
