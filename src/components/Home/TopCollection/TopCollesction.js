import React from 'react'
import './TopCollection.css';
import top from '../../../images/tops.png';
import saree from '../../../images/saree.png';
import winter from '../../../images/winter.png';
import legenga from '../../../images/lagaynga.png';
import sara from '../../../images/sharaSuit.png';
import redKameez from '../../../images/Kameex.png';
import brown from '../../../images/kameezBrown.png';
import blue from '../../../images/sharaSuitBlue.png';
import kameezstyle from '../../../images/kameezStyle.png';
import backgroundImage from '../../../images/backgroundImage.png';
const TopCollesction = () => {
  return (
    <div className="py-5 mt-3  background-image" style={{ backgroundColor: "#EFEFEF" }}>
      <div className="d-flex justify-content-center">
        <div>
          <h4 className="text-center" style={{ color: "#9B758C" }}>Special Offer</h4>
          <h2 className="text-center underline">TOP COLLECTION</h2>
        </div>
      </div>
      <div class="container mb-4">
        <div class="row justify-content-center row-cols-1  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 ">
          <div class="col mt-5">
            <div class="card">
              <div className="container-card">
                <img className="w-100" src={top} alt="" />
                <div className="overlay-image">
                  <button className="shop-now-btn text">shop now</button>
                </div>
              </div>


            </div>
            <h6 className="text-center pt-3">Topas</h6>
          </div>
          <div class="col mt-5">
            <div class="card ">
              <div className="container-card">
                <img className="w-100" src={saree} alt="" />
                <div className="overlay-image">
                  <button className="shop-now-btn text">shop now</button>
                </div>
              </div>

            </div>
            <h6 className="text-center pt-3">Sharara Suit</h6>
          </div>
          <div class="col mt-5">
            <div class="card">
              <div className="container-card">
                <img className="w-100" src={winter} alt="" />
                <div className="overlay-image">
                  <button className="shop-now-btn text">shop now</button>
                </div>
              </div>

            </div>
            <h6 className="text-center pt-3">Winter</h6>
          </div>
          <div class="col mt-5">
            <div class="card">
              <div className="container-card">
                <img className="w-100" src={legenga} alt="" />
               
                <div className="overlay-image">
                  <button className="shop-now-btn text">shop now</button>
                </div>
              </div>

            </div>
            <h6 className="text-center pt-3">Lehenga Choli</h6>
          </div>
          <div class="col mt-5">
            <div class="card">

              <div className="container-card">
                <img className="w-100" src={sara} alt="" />
                <div className="overlay-image">
                  <button className="shop-now-btn text">shop now</button>
                </div>
              </div>
            </div>
            <h6 className="text-center pt-3">Sharara Suit</h6>
          </div>
          <div class="col mt-5">
            <div class="card">

              <div className="container-card">
                <img className="w-100" src={sara} alt="" />
                <div className="overlay-image">
                  <button className="shop-now-btn text">shop now</button>
                </div>
              </div>
            </div>
            <h6 className="text-center pt-3">Sharara Suit</h6>
          </div>
          <div class="col mt-5">
            <div class="card">
              <div className="container-card">
                <img className="w-100" src={redKameez} alt="" />
                <div className="overlay-image">
                  <button className="shop-now-btn text">shop now</button>
                </div>
              </div>

            </div>
            <h6 className="text-center pt-3"> Kameez Style Lehenga</h6>
           
          </div>
          <div class="col mt-5">
            <div class="card">
              <div className="container-card">
                <img className="w-100" src={brown} alt="" />
                <div className="overlay-image">
                  <button className="shop-now-btn text">shop now</button>
                </div>
              </div>

            </div>
            <h6 className="text-center pt-3"> Kameez Style Lehenga</h6>
          </div>
          <div class="col mt-5">
            <div class="card">
              <div className="container-card">
                <img className="w-100" src={blue} alt="" />
                <div className="overlay-image">
                  <button className="shop-now-btn text">shop now</button>
                </div>
              </div>

            </div>
            <h6 className="text-center pt-3"> Sharara Suit</h6>
          </div>
          <div class="col mt-5">
            <div class="card">
              <div className="container-card">
                <img className="w-100" src={kameezstyle} alt="" />
                <div className="overlay-image">
                  <button className="shop-now-btn text">shop now</button>
                </div>
              </div>

            </div>
            <h6 className="text-center pt-3"> Kameez Style Lehenga</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCollesction
