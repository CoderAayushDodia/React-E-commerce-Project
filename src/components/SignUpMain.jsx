import React from "react";

function SignUpMain() {
  return (
    <div>
      <main>
        <section className="my-lg-7">
          <div className="container">
            <div class="justify-content-center align-items-center row">
              <div class="col-lg-4 col-md-6 col-12 order-lg-1 order-2">
                <img
                  src="/main-container-images/signup-g.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div class="col-lg-4 col-md-6 col-12 order-lg-2 offset-lg-1 order-1">
                <div class="mb-lg-9 mb-5">
                  <h1 class="mb-1 h2 fw-bold">Get Start Shopping</h1>
                  <p>Welcome to FreshCart! Enter your email to get started.</p>
                </div>
                <form class="needs-validation">
                  <div class="g-3 row">
                    <div class="col">
                      <label
                        class="visually-hidden form-label"
                        for="formSignupfname"
                      >
                        First Name
                      </label>
                      <input
                        placeholder="First Name"
                        id="formSignupfname"
                        class="form-control"
                        type="text"
                        name="firstName"
                        fdprocessedid="aho8gj"
                      />
                    </div>
                    <div class="col">
                      <label
                        class="visually-hidden form-label"
                        for="formSignuplname"
                      >
                        Last Name
                      </label>
                      <input
                        placeholder="Last Name"
                        id="formSignuplname"
                        class="form-control"
                        type="text"
                        name="lastName"
                        fdprocessedid="86hxyc"
                      />
                    </div>
                    <div class="col-12">
                      <label
                        class="visually-hidden form-label"
                        for="formSignupEmail"
                      >
                        Email address
                      </label>
                      <input
                        placeholder="Email"
                        id="formSignupEmail"
                        class="form-control"
                        type="text"
                        name="email"
                        fdprocessedid="bo405"
                      />
                    </div>
                    <div class="col-12">
                      <label
                        class="visually-hidden form-label"
                        for="formSignupPassword"
                      >
                        Password
                      </label>
                      <div class="password-field position-relative">
                        <input
                          placeholder="*****"
                          id="formSignupPassword"
                          class="fakePassword form-control"
                          type="password"
                          name="password"
                          fdprocessedid="ap8du"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            class="bi bi-eye-slash passwordToggler position-absolute end-0 top-0 mt-2 me-2"
                          >
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"></path>
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"></path>
                            <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div class="d-grid col-12">
                      <button
                        type="submit"
                        class="btn btn-primary"
                        fdprocessedid="56gh4k"
                      >
                        Register
                      </button>
                    </div>
                    <p>
                      <small>
                        By continuing, you agree to our
                        <a href="#!" style={{ color: "#0AAD0A", textDecoration: "none" }}> Terms of Service</a> &amp;
                        <a href="#!" style={{ color: "#0AAD0A", textDecoration: "none" }}> Privacy Policy</a>
                      </small>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUpMain;
