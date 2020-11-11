import React from "react";

const SubmitLinks = () => {
  return (
    <div>
      <section id="submitLinks" className="border border-primary">
        <p>
          Please use the form to submit website links that need to be taken
          down:
        </p>
        <form
          name="submit-links"
          id="submitLinksForm"
          method="post"
        >
          <input type="hidden" name="form-name" value="submit-links" />
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
            <label for="links">
              Links to be taken down
            </label>
            <textarea
              className="form-control"
              name="links"
              id="links"
              rows="3"
              placeholder="Enter the website links..."
              required
            ></textarea>
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
        </form>
      </section>
    </div>
  );
};

export default SubmitLinks;
