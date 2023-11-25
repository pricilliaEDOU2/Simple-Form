import { useState } from "react";

useState;

const Form = ({
  name,
  email,
  password,
  confirmPassword,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  error,
  setError,
  errorPassword,
  setErrorPassword,
  step,
  setStep,
}) => {
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    if (isValidEmail(email)) {
      console.log("The email is valid");
    } else {
      setError("Pleaser Enter a valid Email");
    }
    if (
      password !== confirmPassword ||
      password === "" ||
      confirmPassword === ""
    ) {
      setErrorPassword(true);
      setErrorPassword("Please enter the same password");
    } else {
      setErrorPassword(false);

      setStep(2);

      // console.log("ce qu'il y a dans le state :", [name, email, password]);
    }
  };

  return (
    <div className="step1">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
          minLength={2}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="confirmPassword">Confirm your password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <input type="submit" value="Register" className="submit" />
        <hr />
        <h2 className="error">
          {error && <p style={{ color: "red" }}>{error}</p>}{" "}
          {errorPassword && <p style={{ color: "red" }}>{errorPassword}</p>}
        </h2>
        <hr />
      </form>
    </div>
  );
};
export default Form;
