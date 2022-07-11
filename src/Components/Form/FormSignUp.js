import React from 'react';
import './Index.css';

const FormSignUp = (props) => {
  const { src } = props;

  return (
    <div className="form-container pt-5 m-5">
      <div className="row">
        <div className="col-md-6">
          <div className="box-form p-5">
            <div className="header mb-4">
              <div className="h4">Register</div>
              <div className="h1">WELCOME</div>
            </div>
            <form>
              <div className="namalengkap mb-3">
                <input
                  type="Nama Lengkap"
                  className="form-control"
                  id="exampleInputNama"
                  aria-describedby="NamaHelp"
                  placeholder="Masukkan Nama Lengkap"
                />
              </div>
              <div className="email mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan Nama Email"
                />
              </div>
              <div className="pwd mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Masukkan Password"
                />
              </div>
              <div className="pwd mb-3">
                <input
                  type="ulangi password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Masukkan Password Kembali"
                />
              </div>

              <div className="h5">OR</div>
              <p>
                <button type="button" className="btn btn-warning">
                  <img
                    className="icon"
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt="icon"
                    width="5%"
                  />{' '}
                  Masuk dengan Google
                </button>
              </p>
              <p>
                <button type="button" className="btn btn-info">
                  <img
                    className="icon"
                    src="https://i.pinimg.com/originals/8e/fb/55/8efb55e9efc12eb11bedf41caa7f33bb.png"
                    alt="icon"
                    width="5%"
                  />{' '}
                  Masuk dengan Facebook
                </button>
              </p>
              <p>
                <button type="submit" className="btn btn-primary">
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

        <div className="col-md-6">
          <img
            className="back-login"
            src={src}
            alt="Gambar Login"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default FormSignUp;
