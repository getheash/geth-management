import React from "react";

const Features = () => {
  return (
    <div>
      <section id="features" className="border border-primary">
        <p id="intro">
          Are you tired of people posting your copyrighted content online without
          your consent? Don't worry we have your back. Protecting your content from illegal distribution helps protect your business. Here's what we do for you:
        </p>
        <div className="feature">
          <div className="feature-box">
            <div className="step">
              Step 1:
              <span className="icon">
                <i className="fas fa-search"></i>
              </span>
            </div>
            <div className="description">
              <p>
              With various tools, we search the web to locate your pirated content.
              </p>
            </div>
          </div>
          <div className="feature-box">
            <div className="step">
              Step 2*:
              <span className="icon">
                <i className="fas fa-window-close"></i>
              </span>
            </div>
            <div className="description">
              <p>
                Once your pirated content is located, we submit DMCA Takedown Requests to have your content removed. Once
                we have successfully taken down copyright infringing content, we will notify you with email confirmation.
              </p>
            </div>
          </div>
          <div className="feature-box">
            <div className="step">
              Step 3:
              <span className="icon">
                <i className="fas fa-briefcase-medical"></i>
              </span>
            </div>
            <div className="description">
              <p>
                We continuously monitor the internet for your pirated content,so you can achieve a peace of mind and spend your
                valuable time as you please. You can also submit links for
                takedown using the{" "}
                <a className="text-dark" href="#submitLinks">
                  "Submit Links"
                </a>{" "}
                section
              </p>
            </div>
          </div>
        </div>
        <p className="notice"><i>*We cannot guarantee removal for all websites, only those who cooperate. Although, not all companies comply with DMCA, most do. Submitting a DMCA Takedown Request can still be beneficial with protecting your brand from a high volume of piracy.</i></p>
        <p className="notice">
          <i>Please note, we do not provide any kind of legal service.</i>
        </p>
      </section>
    </div>
  );
};

export default Features;
