<template>
  <div>
    <div id="preloader">
      <div class="loader"></div>
    </div>
    <!-- preloader area end -->
    <!-- login area start -->
    <div class="login-area">
      <div class="container" style="margin-bottom: 0px">
        <div class="login-box ptb--100">
          <form @submit.prevent="loginUser">
            <div class="login-form-head">
              <h4 class="sign">SIGN IN</h4>
              <p class="hello">
                Hello there, Sign in and start managing your Admin <br />
                Template
              </p>
            </div>
            <div class="login-form-body">
              <div class="form-gp">
                <label class="fromto email">Email</label> <br />
                <input
                  class="form-control"
                  type="email"
                  v-model="email"
                  placeholder="Your Email address"
                  required
                />
              </div>
              <label class="fromto Password">Password</label> <br />
              <div class="form-gp">
                <input
                  class="form-control"
                  type="password"
                  v-model="password"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div class="row mb-4 rmber-area">
                <div class="col-6">
                  <div class="custom-control custom-checkbox mr-sm-2">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customControlAutosizing"
                    />
                    <label
                      class="custom-control-label"
                      for="customControlAutosizing"
                      >Remember Me</label
                    >
                  </div>
                </div>
                <div class="col-6 text-right">
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
              <div class="submit-btn-area">
                <button id="form_submit" type="submit">
                  Submit <i class="arrow-right"></i>
                </button>
                <div class="login-other row mt-4">
                  <div class="col-6 facebook">
                    <a class="fb-login" href="#"
                      >Log in with
                      <span
                        style="
                          font-weight: bold;
                          font-size: 15px;
                          text-transform: lowercase;
                        "
                      >
                        f</span
                      ></a
                    >
                  </div>
                  <div class="col-6 google">
                    <a class="google-login" href="#"
                      >Log in with
                      <span style="font-weight: bold; font-size: 15px">
                        G</span
                      ></a
                    >
                  </div>
                </div>
              </div>
              <div class="form-footer text-center mt-5">
                <p class="text-muted">
                  Don't have an account?
                  <router-link to="/register"><a>Sign up</a></router-link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'loginPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async loginUser() {
  const loginData = {
    email: this.email,
    password: this.password
  };

  try {
    const response = await axios.post('http://localhost:5000/api/login', loginData);
    // Handle the response from the server
    console.log(response.data); // Example: Assuming the server returns a token
    
    // Redirect to the map page with the token
    this.$router.push({ path: '/', query: { token: response.data.token } });
  } catch (error) {
    // Handle error
    console.error(error);
    // Display an alert or error message to the user
    alert('Login failed. Please check your credentials.');
  }
}

  },
};
</script>

<style>
.form-gp input::placeholder {
  font-weight: bold;
  opacity: 0.5;
  color: rgb(89, 88, 88);
  font-size: 12px;
}

.arrow-right {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.login-area {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f8fb;
}

.sign,
.hello {
  text-align: center;
  color: black;
  font-family: "Poppins", sans-serif;
}

.login-form-head {
  /* background-color: #8655FC; */
  padding: 20px;
}

.login-form-head h4 {
  text-transform: uppercase;
  /* font-weight: 600px; */
  margin-bottom: 7px;
  font-size: 1.5rem;
}

.hello {
  line-height: 22px;
}

form {
  background-color: white;
  border-radius: 30px;
  padding: 40px;
}

.fromto {
  font-size: 16px;
  font-family: "Poppins", sans-serif;
}

.form-gp {
  margin-bottom: 17px;
}

.form-control {
  height: 40px;
  font-size: 16px;
  border-radius: 4px;
  padding: 5px;
  border: 1px solid #ced4da;
  padding-right: 200px;
  margin-top: 10px;
  font-family: "Poppins", sans-serif;
}

.rmber-area {
  display: flex;
}

.rmber-area > div {
  flex: 1;
}

.rmber-area .col-6.text-right {
  display: flex;
  justify-content: flex-end;
}

.custom-control-label {
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  margin-left: 5px;
}

.rmber-area a {
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  color: #007bff;
  font-size: 12px;
}

#form_submit {
  width: 100%;
  height: 50px;
  border: none;
  background: #4336fb;
  color: white;
  border-radius: 40px;
  text-transform: uppercase;
  letter-spacing: 0;
  font-weight: 600;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  margin: 18px 0 18px 0;
}

.arrow-right {
  border-right: solid white !important;
  border-bottom: solid white !important;
}

.login-other.row {
  display: flex;
  /* justify-content: space-between; */
}

.login-other .col-6 {
  flex: 1;
}

.facebook {
  background: #8655fc;
  text-align: center;
  display: block;
  width: 100%;
  max-width: 160px;
  height: 43px;
  line-height: 43px;
  border-radius: 40px;
  text-transform: capitalize;
  letter-spacing: 0;
  font-weight: 600;
  font-size: 12px;
  margin-left: 20px;
}

.facebook a {
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
}

.google {
  background: #fb5757;
  text-align: center;
  display: block;
  width: 100%;
  max-width: 160px;
  height: 43px;
  line-height: 43px;
  border-radius: 40px;
  text-transform: capitalize;
  letter-spacing: 0;
  font-weight: 600;
  font-size: 12px;
  margin-left: 35px;
}

.google a {
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
}

.text-muted {
  font-family: "Poppins", sans-serif;
  color: #6c757d;
}

.form-footer {
  margin-top: 3rem;
  text-align: center;
}

.form-footer a {
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  color: #007bff;
}
</style>
