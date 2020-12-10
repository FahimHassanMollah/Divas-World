import React from 'react'
import './Brand.css'
import platium from '../../../images/platinum.png';
import premium from '../../../images/premium.png';
import emmerd from '../../../images/emerland.png';
import elegent from '../../../images/elegant.png';
import elegantTwo from '../../../images/elegantTwo.png'
const Brand = () => {
    return (
        <div className="py-5" style={{ backgroundColor: "#EFEFEF" }}>
            <div className="d-flex justify-content-center">
                <h2 className="underline-brand">TOP BRANDS</h2>
            </div>
            <div class="container mb-4">
        <div class="row justify-content-center row-cols-1  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 ">
          <div class="col mt-4">
            <div class="card border-0 bg-transparent">
              <div className="container-card text-center">
                <img className="w-50" src={platium} alt="" />
                
              </div>


            </div>
           
          </div>
          <div class="col mt-4">
            <div class="card border-0 bg-transparent ">
              <div className="container-card text-center">
                <img className="w-50" src={premium} alt="" />
              
              </div>

            </div>
          
          </div>
          <div class="col mt-4">
            <div class="card border-0 bg-transparent">
              <div className="container-card text-center" >
                <img className="w-50" src={emmerd} alt="" />
               
              </div>

            </div>
           
          </div>
          <div class="col mt-4">
            <div class="card border-0 bg-transparent">
              <div className="container-card text-center">
                <img className="w-50" src={elegent} alt="" />
               
                
              </div>

            </div>
          
          </div>
          <div class="col mt-4">
            <div class="card border-0 bg-transparent">

              <div className="container-card text-center">
                <img className="w-50" src={elegantTwo} alt="" />
               
              </div>
            </div>
           
          </div>
         
        </div>
      </div>
        </div>
    )
}

export default Brand
