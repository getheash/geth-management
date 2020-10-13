import React from "react";

const Features = () => {
  return (
    <div>
      <section id="features">
        <p id="intro">
          Are you tired of people posting your copyright content online without
          your consent? Don't you worry because we got your back.
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
                We search for copyright infringement of your content on the
                world wide web with various tools at our disposal. If there is a
                place where your copyright content been posted without your
                consent, we will find it.
              </p>
            </div>
          </div>
          <div className="feature-box">
            <div className="step">
              Step 2:
              <span className="icon">
                <i className="fas fa-window-close"></i>
              </span>
            </div>
            <div className="description">
              <p>
                We send DMCA takedown requests for copyright infringement so
                that you don't have to worry about people accessing them. Once
                we have successfully taken down the content for copyright
                infringement, we will notify you with email confirmation.
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
                We continuously monitor the internet for any copyright
                infringement while you can have a piece of mind and spend your
                valuable time as you please. You can also submit links for
                takedown using{" "}
                <a className="text-dark" href="#submitLinks">
                  Submit Links
                </a>{" "}
                section
              </p>
            </div>
          </div>
        </div>
        <p id="notice">
          <i>Please note that we do not provide any kind of legal advice.</i>
        </p>
      </section>
    </div>
  );
};

export default Features;
