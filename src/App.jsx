import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Footer from "./components/Footer";
import StepTwo from "./components/StepTwo";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [errorPassword, setErrorPassword] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <div className="container">
      <div>
        {step === 1 ? (
          <h1>CREATE ACCOUNT</h1>
        ) : step === 2 ? (
          <h1>RESULTS</h1>
        ) : null}
        {step === 1 ? (
          <Form
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            error={error}
            setError={setError}
            errorPassword={errorPassword}
            setErrorPassword={setErrorPassword}
            step={step}
            setStep={setStep}
          />
        ) : step === 2 ? (
          <StepTwo
            setStep={setStep}
            name={name}
            email={email}
            password={password}
          />
        ) : null}
      </div>

      <Footer />
    </div>
  );
}

export default App;
