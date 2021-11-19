import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate("/exam");
    }, 2000);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="mb-3 form-check">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Name
        </label>
        <input
          required
          type="name"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          required
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          required
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button
        style={{ marginTop: "2%" }}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default Login;
