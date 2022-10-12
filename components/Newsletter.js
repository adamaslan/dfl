import React, { useState } from "react";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const FORM_URL = `https://app.convertkit.com/forms/3690183/subscriptions`;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event);

    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      });

      setEmail("");
      const json = await response.json();

      if (json.status === "success") {
        setStatus("SUCCESS");
        return;
      }
    } catch (err) {
      setStatus("ERROR");
      console.log(err);
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  return (
    <div>
      {status === "SUCCESS" && (
        <>
          <p>
            Welcome aboard{name ? `, ${name}` : ""}{" "}
            <span role="img" aria-label="Ship">
              🚢
            </span>
          </p>
          <p>Please check your inbox to confirm the subscription!</p>
        </>
      )}
      {status === "ERROR" && (
        <>
          <p>Oops, something went wrong...</p>
          <p>
            Please, <button onClick={() => setStatus(null)}>try again.</button>
          </p>
        </>
      )}
      {status === null && (
        <form onSubmit={handleSubmit}>
          <input
            aria-label="Your first name"
            name="fields[name]"
            placeholder="Your name"
            type="text"
            onChange={handleNameChange}
            value={name}
          />
          <input
            aria-label="Your email address"
            name="email_address"
            placeholder="Your email address"
            required
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
          <button>SUBSCRIBE</button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
