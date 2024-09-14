import React, { useState } from "react";
import Form from "../Components/Form";

const Contact = () => {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <section className="container-main">
      <div className="container">
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form setSubmittedData={setSubmittedData} />
        {submittedData && (
          <span>
            Gracias {submittedData.name}, te contactaremos cuando antes vía mail
          </span>
        )}
      </div>
    </section>
  );
};

export default Contact;
