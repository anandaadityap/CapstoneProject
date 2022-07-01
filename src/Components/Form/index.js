import React from "react";
import "./Index.css";
import BackLogin from "../../assets/login.png";

const Form = () => {
  return (
    <div class="form-container m-5">
      <div class="row">
        <div class="col-md-6">
          <div className="box-form p-5">
            <div class="header mb-4">
              <div class="h4">LOGIN</div>
              <div class="h1">WELCOME</div>
            </div>
            <form>
              <div class="email">
                <label for="input-email">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan Nama Email"
                />
              </div>
              <div class="pwd">
                <label for="input-password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Masukkan Password"
                />
              </div>
              <div class="h5">OR</div>
              <p>
                <button type="button" class="btn btn-warning">
                  <img
                    className="icon"
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt="icon"
                    width="5%"
                  />{" "}
                  Masuk dengan Google
                </button>
              </p>
              <p>
                <button type="button" class="btn btn-info">
                  <img
                    className="icon"
                    src="https://i.pinimg.com/originals/8e/fb/55/8efb55e9efc12eb11bedf41caa7f33bb.png"
                    alt="icon"
                    width="5%"
                  />{" "}
                  Masuk dengan Facebook
                </button>
              </p>
              <p>
                <button type="submit" class="btn btn-primary">
                  LOGIN
                </button>
              </p>
              <div className="text">
                <a href="#.">
                  <small className="reset">Lupa Kata Sandi</small>
                </a>
                <p>
                  Belum Punya Akun?
                  <a href="#.">
                    <small className="reset mb-5">Daftar Sekarang</small>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>

        <div class="col-md-6">
          <img className="back-login" src={BackLogin} alt="Gambar Login" width="100%"/>
        </div>
      </div>
    </div>
  );
};

export default Form;
