import React from "react";


import Handled  from  "../assets/services/Handled.jpg";

import Reliable   from  "../assets/services/Reliable.jpg";
import Assistance  from  "../assets/services/Assistance.jpg";




import { FaBoxOpen, FaShippingFast, FaHandshake } from "react-icons/fa";

const PackersMovers = () => {
  return (
    <div className="container-fluid p-0">
      {/* Banner */}

       <section
        className="position-relative"
        style={{ height: "auto", width: "100%" }}
      >
        <img
          src="../src/assets/careers/packers.jpg"
          alt="Managed Property Building"
          className="w-100 h-100 object-fit-cover"
          style={{ objectPosition: "center" }}
        />
        {/* <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
          <h1 className="text-white display-4 fw-bold text-center px-4">
            Welcome to Sonagiri Property Management
          </h1>
        </div> */}
      </section>
      {/* <div
        className="position-relative text-center text-white"
        style={{
          backgroundImage: 'url("/your-banner.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="position-absolute top-50 start-50 translate-middle text-dark">
          <h1 className="fw-bold">Trusted Packers & Movers</h1>
          <p>Your seamless, stress-free relocation partner</p>
        </div>
      </div> */}

      {/* Icon Highlights */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <FaBoxOpen size={40} className=" mb-2"   style={{color:"#335393"}}/>
            <h5>Safe Packing</h5>
            <p>Top-grade materials to keep your belongings secure.</p>
          </div>
          <div className="col-md-4">
            <FaShippingFast size={40} className=" mb-2"  style={{color:"#335393"}}/>
            <h5>Fast Delivery</h5>
            <p>Timely pickup and on-schedule delivery every time.</p>
          </div>
          <div className="col-md-4">
            <FaHandshake size={40} className=" mb-2"   style={{color:"#335393"}}/>
            <h5>Trusted Support</h5>
            <p>Friendly staff to assist you throughout the move.</p>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="container-fluid py-5 bg-light">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h6 className="text-uppercase"  style={{color:"#335393"}}>
              Safe Packing Solutions
            </h6>
            <h3>Expert Packing, Every Item Handled with Care</h3>
            <p>
              Our team uses industry-approved packing techniques and high-quality materials 
              to ensure your valuables stay safe from start to finish.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={Handled}
              alt="Safe Packing"
              className="img-fluid rounded w-50"
              style={{ borderRadius: "0 50px 50px 0" }}
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container-fluid py-5">
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <h6 className="text-uppercase "  style={{color:"#335393"}}> 
              On-Time Delivery
            </h6>
            <h3>Reliable Transportation, Always On Schedule</h3>
            <p>
              From local to interstate moves, we guarantee timely delivery with fully insured 
              vehicles and experienced drivers for total peace of mind.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={Reliable }
              alt="Timely Delivery"
              className="img-fluid rounded w-50"
              style={{ borderRadius: "50px 0 0 50px" }}
            />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="container-fluid py-5 bg-light">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h6 className="text-uppercase "  style={{color:"#335393"}}>
              Dedicated Customer Care
            </h6>
            <h3>Transparent Service & Friendly Assistance</h3>
            <p>
              Our customer-first approach means clear communication, honest pricing,
              and prompt support before, during, and after your move.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={Assistance}
              alt="Customer Care"
              className="img-fluid rounded w-50"
              style={{ borderRadius: "0 50px 50px 0" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackersMovers;
