import React, { useState } from "react";

const SubmitLinks = () => {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  return (
    <div>
      <section id="submitLinks" className="border border-primary">
        <p>
          Please use the form to submit website links that need to be taken
          down:
        </p>
        <form name="submitLinks" id="submitLinksForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="identityCode">Identity Code</label>
            <input
              type="text"
              className="form-control"
              name="identity"
              id="identityCode"
              placeholder="Enter your Identity code"
              required
            />
            <small id="identityCodeHelp" className="form-text">
              Identity code can be found in Subscription Payment Confirmation
              email
            </small>
          </div>
          <div className="form-group">
            <label for="urlLink">Links to be taken down</label>
            <input
              type="url"
              className="form-control"
              name="urlLink"
              id="urlLink"
              placeholder="Enter the website link"
              required
            />
            <input
              type="url"
              className="form-control"
              name="urlLink"
              id="urlLink"
              placeholder="Enter the website link"
            />
            <input
              type="url"
              className="form-control"
              name="urlLink"
              id="urlLink"
              placeholder="Enter the website link"
            />
            <small id="urlLinkHelp" className="form-text">
              Please use the comment section if you would like to submit more
              than three links
            </small>
          </div>
          <div className="form-group">
            <label for="comment">
              Comment <span className="clue">(optional)</span>
            </label>
            <textarea
              className="form-control"
              name="comment"
              id="comment"
              rows="3"
              placeholder="Enter your comments..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {submit ? (
            <div className="success-message bg-primary rounded-sm text-white">
              Thank you. We will send you a confirmation email when the links
              have been taken down successfully.
            </div>
          ) : null}
        </form>
      </section>
    </div>
  );
};

export default SubmitLinks;
