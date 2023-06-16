import './App.css'

import "./components/LeftPanel/LeftPanel"

import codewars from "../src/img/codewars.svg"
import github from "../src/img/gitHub.svg"
import instagram from "../src/img/instagram.svg"
import linkedin from "../src/img/linkedin.svg"
import ExampleCss from './components/LeftPanel/LeftPanel'
import Content_component from "./components/Content_component/Content_com"

function App() {  


  // document.addEventListener("DOMContentLoaded", function(){
    // (function () {
    //   var square = document.querySelector('.square-wrapper');
      
    //   var observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //     var entrySquare = entry.target.querySelector('.square');
    //     if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
    //       return;
    //     }
      
    //     if (entry.isIntersecting) {
    //       entrySquare.classList.add('square-animation');
    //       return;
    //     }
      
    //     entrySquare.classList.remove('square-animation');
    //     });
    //   });
      
      
    //   observer.observe(square);
    // })();
  // });

  


  return (
    <div>
      <section className="Header">
        <ExampleCss />
        <h1 className="Logotipe"><a href="#home1">Logo</a></h1>
      </section>

      <section className="layers" id="home1">
        <div className="layers__container">
          <div className="layers__item layer-3">
            <div className="hero-content">
              <h1>Natural</h1>
              <div className="hero-content__p"></div>
              <a className="button-start" href="#section1">start</a>
            </div>
          </div>
          <div className="layers__item layer-4">
            <canvas className="rain"></canvas>
          </div>
        </div>
      </section>

      <section className="layers2" id="section1">
        <div className="layers__container2">
            <div className="stage">
              <div className="wrap">
                <div className="square-wrapper">
                  <div className="square">
                    <div className="row1">
                      <div className="block_1">
                        Content
                      </div>

                      <div className="block_2">
                        Content
                      </div>
                    </div>
                    <div className="row2">
                      <div className="block_3">
                        Content
                      </div>

                      <div className="block_4">
                        Content
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>

      <section className="layers3" id="section2">
        <div className="layers__container3">
        <Content_component />
        </div>
      </section>

      <section className="layers4" id="section3">
        <div className="layers__container4">
          <div className='lay4'>
            <h2 className='mail'>Mail</h2>
            <a>alexeykomarov2001@icloud.com</a>
            <h2 className='teleg'>Telegram</h2>
            <a>@dnnffff</a>
          </div>
        </div>
      </section>

      <section className="layers5" id="section3">
        <div className="layers__container5">
                <div className="social">
                    <a href="https://www.instagram.com/doneflory/?ysclid=liheucdd5485132824"><img src={instagram} alt="Link" /></a>
                    <a href="https://github.com/dnfff"><img src={github} alt="Link" /></a>
                    <a href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D0%BA%D0%BE%D0%BC%D0%B0%D1%80%D0%BE%D0%B2-690975279/"><img src={linkedin} alt="Link" /></a>
                    <a className="social_codew" href="https://www.codewars.com/users/dnff"><img src={codewars} alt="Link" /></a>
          </div>
          <div className="copyright">
              <h4>Prod by <span>dnfff</span></h4>
              <h5>© 2023</h5>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App
