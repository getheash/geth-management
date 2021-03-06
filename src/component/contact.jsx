import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="border border-primary">
        <h3>Contact us</h3>
        <p>
          If you need more information or have queries regarding how we
          could protect your content, please contact us at{" "}
          <i style={{ color: "dodgerblue" }} className="fas fa-envelope"></i> : <u>contact@gethmanagement.com</u>
        </p>
        <p>
          If you are a subscriber, please mention your identity code in the
          subject line for quick assistance. We look forward to hear from you.
        </p>
      </section>
    </div>
  );
};

export default Contact;
