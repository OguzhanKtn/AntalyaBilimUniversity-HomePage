import React from "react";

function Home() {
  return (
    <>
      <div className="d-flex">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" id="menu">
          <div>
            <a href="/">
              <img className="resim" src="bilim.png"></img>
            </a>
          </div>
          <div className="mt-3">
            <button className="btn btn-lg" id="btn">
              <i
                className="bi bi-house"
                style={{ color: "rgb(4, 184, 208)" }}
              ></i>
              <span id="anasayfa">Anasayfa</span>
            </button>
          </div>
          <div id="üniversite">
            <hr id="hr" />
            <p id="üni">ÜNİVERSİTE</p>
          </div>
          <div className="d-flex arama" id="">
            <i className="bi bi-search"></i>
            <button id="arama">
              <span id="textArama">Arama</span>
            </button>
          </div>
          <div id="etkinlik">
            <hr id="hr" />
            <p id="etkin_text">ETKİNLİK YÖNETİMİ</p>
          </div>
          <div className="d-flex etkinlik">
            <i className="bi bi-calendar-plus"></i>
            <button id="arama">
              <span id="textArama">Etkinlik</span>
            </button>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" id="home">
          <div className="navbar">
            <div className="d-flex" id="buttonLogo">
              <div className="d-flex" id="translateMoon">
                <i
                  className="bi bi-translate"
                  style={{ marginRight: "10px" }}
                ></i>
                <i className="bi bi-moon" style={{ marginRight: "10px" }}></i>
              </div>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle btnGiris"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span style={{ color: "white" }}> GİRİŞ YAP</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container resim2">
            <h4 id="resim2text">
              <strong>Hayallerinizdeki Programları Bulun</strong>
            </h4>
            <h6 id="resim2text2">
              <strong>
                Herhangi bir konuyu,her zaman çalışın.Şimdi binlerce uzman
                tarafından hazırlanan programlar arasından seçim yapın.
              </strong>
            </h6>
            <select className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" id="inputGroupSelect01">
              <option selected>Ne aramak istiyorsun ?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="hayal mt-3">
            <p>
              Profilinizi Tamamlayın Ve Hayalinizdeki Üniversiteye Başvurun
              <i className="bi bi-rocket-takeoff"></i>
            </p>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                  <div className="circle1"></div>
                  <div>
                    <a role="button" className="circle1-text">
                      Kayıt Ol
                    </a>
                    <p className="circle1text">
                      Kaydolun ve ilk adımınızı atın
                    </p>
                    <i class="bi bi-arrow-right"></i>
                  </div>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                  <div className="circle2"></div>
                  <div>
                    <a role="button" className="circle2-text">
                      Bilgi
                    </a>
                    <p className="circle1text">Bilgileri doldurun</p>
                    <i class="bi bi-arrow-right"></i>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                  <div className="circle2"></div>
                  <div>
                    <a role="button" className="circle2-text">
                      Belgeler
                    </a>
                    <p className="circle1text">Belgelerinizi yükleyin</p>
                    <i class="bi bi-arrow-right"></i>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                  <div className="circle2"></div>
                  <div>
                    <a role="button" className="circle2-text">
                      Başvur
                    </a>
                    <p className="circle1text">
                      Başvuruda bulunabilir ve maceranıza başlayabilirsiniz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <i className="bi bi-c-circle">
              <p>
                2023,Made by <span id="bilim">Antalya Bilim Üniversitesi</span>
              </p>
            </i>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;
