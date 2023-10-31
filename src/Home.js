import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  
  return (
    <>
      <div
        className="offcanvas offcanvas-start show sidebar"
        tabindex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <a href="/">
            <img className="resim" src="bilim.png"></img>
          </a>
        </div>
        <div className="offcanvas-body">
          <div>
            <button className="btn btn-success btn-lg" id="btn">
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
          <div>
            <button id="arama">
              <i className="bi bi-search"></i>
              <span id="textArama">Arama</span>
            </button>
          </div>
          <div id="etkinlik">
            <hr id="hr" />
            <p id="etkin_text">ETKİNLİK YÖNETİMİ</p>
          </div>
          <div id="arama">
            <button id="arama">
              <i className="bi bi-calendar-plus"></i>
              <span id="textArama">Etkinlik</span>
            </button>
          </div>
        </div>
      </div>

<div className="container">
<div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown" id="dropPosition">
                  <a
                    className="nav-link dropdown-toggle"
                    id="dropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-translate" style={{marginRight:"10px"}}></i>
                    <i className="bi bi-moon" style={{marginRight:"10px"}}></i>
                    <strong className="btn" style={{backgroundColor:"rgb(4, 184, 208)"}}>
                     <span style={{color:"white"}}>GİRİŞ YAP</span>  
                       </strong>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item btn">
                        <i class="bi bi-box-arrow-in-right mr-1"></i>
                        Log in
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item btn">
                        <i class="bi bi-sign-intersection mr-1"></i>
                        Sign in
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
        </nav>
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
        <select id="inputGroupSelect01">
          <option selected>Ne aramak istiyorsun ?</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

    <div className="hayal">
    <p>
        Profilinizi Tamamlayın Ve Hayalinizdeki Üniversiteye Başvurun
        <i className="bi bi-rocket-takeoff"></i>
      </p>
      <hr/>
      <div className="container">
      <div className="row">
        <div className="col-3">  
          <div className="circle1"></div>
          <a role="button" className="circle1-text">Kayıt Ol</a>
          <div className="row">
             
          <p className="circle1text">Kaydolun ve ilk adımınızı atın</p>
          <i class="bi bi-arrow-right"></i>
          </div>
         
        </div>
        <div className="col-3">
        <div className="circle2"></div>
          <a role="button" className="circle2-text">Bilgi</a>
          <p className="circle1text">Bilgileri doldurun</p>
          <i class="bi bi-arrow-right"></i>
        </div>
        <div className="col-3">
        <div className="circle2"></div>
          <a role="button" className="circle2-text">Belgeler</a>
          <p className="circle1text">Belgelerinizi yükleyin</p>
          <i class="bi bi-arrow-right"></i>
        </div>
        <div className="col-3">
        <div className="circle2"></div>
          <a role="button" className="circle2-text">Başvur</a>
          <p className="circle1text">Başvuruda bulunabilir ve maceranıza başlayabilirsiniz</p>
        </div>
      </div>
      </div>
      
    </div>
      

     <footer>
     <i className="bi bi-c-circle"><p>2023,Made by <span id="bilim">Antalya Bilim Üniversitesi</span></p></i>
     </footer>
     
</div>

    </>
  );
}

export default Home;
