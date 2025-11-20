import React from "react";

import Expert   from  "../../public/services/Expert.jpg";
import Carpenter    from  "../../public/services/Carpenter.jpg";
import House from  "../../public/services/House.jpg";

import Payment  from  "../../public/services/Payment.jpg";

import Convenient  from  "../../public/services/Convenient.jpg";


import {
  FaUsersCog,
  FaTools,
  FaBroom,
  FaMoneyBillWave,
  FaTint,
} from "react-icons/fa";

const ApartmentMaintenance = () => {
  return (
    <div className="container-fluid p-0">
      {/* Page Banner */}
       <section
        className="position-relative"
        style={{ height: "auto", width: "100%" }}
      >
        <img
          src="../src/assets/careers/apartment.jpg"
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
          height: "250px",
        }}
      >
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bold text-dark">APARTMENT MAINTENANCE</h1>
        </div>
      </div> */}

      {/* Services Icons */}
      <div className="container py-4">
        <div className="row text-center">
          <div className="col-6 col-md-2 mb-3">
            <FaUsersCog size={30} className=" mb-2"  style={{color:"#335393"}} />
            <p className="mb-0 small">Association Guidance</p>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <FaTools size={30} className=" mb-2"   style={{color:"#335393"}}/>
            <p className="mb-0 small">Carpentry & Plumbing</p>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <FaBroom size={30} className=" mb-2"   style={{color:"#335393"}}/>
            <p className="mb-0 small">Housekeeping Solutions</p>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <FaMoneyBillWave size={30} className=" mb-2"   style={{color:"#335393"}}/>
            <p className="mb-0 small">Rent Collection</p>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <FaTint size={30} className=" mb-2"   style={{color:"#335393"}}/>
            <p className="mb-0 small">Water Supply</p>
          </div>
        </div>
      </div>

      {/* Association Guidance */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h6 className="text-uppercase "  style={{color:"#335393"}}>
              Apartment Owners Association Guidance
            </h6>
            <h3>Expert Advice for Effective Management and Success</h3>
            <p>
              The Apartment Owners Association is a community of all the
              apartment or villa owners within the complex, responsible for
              maintaining the shared facilities and amenities. Sonachala plusplays a
              crucial role in assisting with various tasks related to the
              association, including registration processes, establishing board
              members, and handling necessary documentation and bylaws.
            </p>
            <p>
              Their expertise ensures timely and efficient collection of
              maintenance fees, hiring and supervising required personnel, and
              overseeing tasks like cleaning and motor operation. Sonachala plus’s
              guidance streamlines the management process, ensuring a well-run
              and pleasant living environment for all residents.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img
            src={Expert }
              alt="Association Guidance"
              className="img-fluid rounded w-50"
            />
          </div>
        </div>
      </div>

      {/* Carpentry & Plumbing */}
      <div className="container my-5">
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-7">
            <h6 className="text-uppercase "  style={{color:"#335393"}}>
              Carpentry & Plumbing Services
            </h6>
            <h3>Carpenter & Plumbing</h3>
            <p>
              Sonachala plusprovides excellent services in interior design,
              carpentry, and plumbing. Their skilled team delivers solutions to
              transform spaces, create elegant interiors, handle carpentry work,
              and ensure efficient plumbing. Whether it's remodeling, repairs,
              or renovations, they guarantee quality workmanship to meet your
              needs.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img
              src={Carpenter }
              alt="Carpentry and Plumbing"
              className="img-fluid rounded w-50"
            />
          </div>
        </div>
      </div>

      {/* Housekeeping */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h6 className="text-uppercase "  style={{color:"#335393"}}>
              Top-Notch Housekeeping Solutions
            </h6>
            <h3>House Keeping</h3>
            <p>
              Sonachala plusoffers comprehensive housekeeping services for houses,
              associations, and industries, ensuring cleanliness and hygiene.
              Their services include surface disinfection, window cleaning,
              appliance maintenance, furniture care, and outdoor area upkeep.
              Highly trained professionals use advanced techniques and eco-
              friendly products for efficient results.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img
              src={House}
              alt="House Keeping"
              className="img-fluid rounded w-50"
            />
          </div>
        </div>
      </div>

      {/* Rent Collection */}
      <div className="container my-5">
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-7">
            <h6 className="text-uppercase "  style={{color:"#335393"}}>
              Rent Collection for Tenants
            </h6>
            <h3>Convenient and Seamless Payment Solutions</h3>
            <p>
              Sonachala plussimplifies the rent payment process for property owners.
              Their modern payment methods and experienced team ensure timely
              rent collection, reminders for due dates, and follow-ups on
              outstanding amounts, ensuring consistent cash flow and peace of
              mind for property owners.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img
              src={Payment}
              alt="Rent Collection"
              className="img-fluid rounded w-50"
            />
          </div>
        </div>
      </div>

      {/* Water Supply */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h6 className="text-uppercase "  style={{color:"#335393"}}>
              Water Supply from Lorries
            </h6>
            <h3>Reliable and Convenient Water Delivery Services</h3>
            <p>
              Sonachala plusoffers efficient water supply services from lorries,
              delivering clean, potable water for residential, commercial, and
              industrial needs. Their well-maintained fleet ensures safe
              transportation and uninterrupted supply, meeting your demands even
              during scarcity or supply issues.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img
              src={Convenient}
              alt="Water Supply"
              className="img-fluid rounded w-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentMaintenance;
