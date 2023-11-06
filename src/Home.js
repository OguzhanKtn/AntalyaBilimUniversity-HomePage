import React from "react";

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
        <div className="navbar">
          <div className="d-flex" id="buttonLogo">
          <div className="d-flex" id="translateMoon">
              <i className="bi bi-translate" style={{marginRight:"10px"}}></i>
              <i className="bi bi-moon" style={{marginRight:"10px"}}></i>
            </div>
            <div className="dropdown">
              <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">GİRİŞ YAP</button>
              <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
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
