import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div class="section">
      <Link to={"/"} className="register_volver">
        <div>
          <button className="volver_button">Volver</button>
        </div>
      </Link>
      <div class="container">
        <div class="row full-height justify-content-center">
          <div class="col-12 text-center align-self-center py-5">
            <div class="section pb-5 pt-5 pt-sm-2 text-center">
              <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
              <label for="reg-log"></label>
              <div class="card-3d-wrap mx-auto">
                <div class="card-3d-wrapper">
                  <div class="card-front">
                    <div class="center-wrap">
                      <div class="section_front text-center">
                        <h4 class="mb-4 pb-3">Log In</h4>
                        <div class="form-group">
                          <input type="email" class="form-style" placeholder="Email" />
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input type="password" class="form-style" placeholder="Password" />
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" class="btn mt-4">
                          Login
                        </a>
                        <p class="mb-0 mt-4 text-center">
                          <a href="#" class="link">
                            Forgot your password?
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card-back">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <h4 class="mb-3 pb-3">Sign Up</h4>
                        <div class="form-group-back">
                          <input type="text" class="form-style" placeholder="Name" />
                          <i class="input-icon uil uil-user"></i>
                        </div>
                        <div class="form-group-back mt-2">
                          <input type="email" class="form-style" placeholder="Email" />
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group-back mt-2">
                          <input type="password" class="form-style" placeholder="Password" />
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" class="btn-register mt-4">
                          Register
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
