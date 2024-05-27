import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div
          className="col-md-6 d-none d-md-block bg-image"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundImage:
              "url('https://i.pinimg.com/originals/c4/07/fb/c407fb56ff4ac19f9760bd0bedd1de65.jpg')",
          }}
        ></div>

        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="p-5">
            <h2 className="mb-4">Login</h2>

            <div className="form-group">
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={handleLogin}
              className="btn btn-primary btn-block mt-3"
            >
              Login
            </button>

            <p className="text-muted mt-2">Forgot password?</p>

            <hr className="my-4" />

            <button className="btn btn-secondary btn-block">
              Register now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
