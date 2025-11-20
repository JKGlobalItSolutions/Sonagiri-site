import React from "react";
import teams from "../../public/careers/teams.jpg"; 

const Career = () => {
  return (
    <div className="min-vh-100 bg-light ">
 <section
        className="position-relative"
        style={{ height: "auto", width: "100%" }}
      >
        <img
          src={teams}
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



      {/* content */}
      <div className="container text-center mb-5">
        <h1
          className="fw-bold mb-3 mt-5"
          style={{ color: "#335393", fontSize: "2.5rem" }}
        >
          Join Our Team
        </h1>
        <p
          className="text-secondary fs-5 mx-auto"
          style={{ maxWidth: "700px" }}
        >
          At <strong> Sonagiri Property Management</strong>, we believe in
          building more than just properties — we build careers, relationships,
          and opportunities.
        </p>
      </div>

      <div className="container mb-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="bg-white p-4 rounded shadow h-100">
              <h2 className="h4 fw-semibold text-dark mb-3">
                Why Work With Us?
              </h2>
              <ul className="list-unstyled ps-3 text-secondary">
                <li className="mb-2">
                  • Collaborative and inclusive work culture
                </li>
                <li className="mb-2">
                  • Opportunities for growth and learning
                </li>
                <li className="mb-2">• Performance-based incentives</li>
                <li className="mb-2">• Flexible work environment</li>
                <li className="mb-2">
                  • Be part of transforming the real estate industry
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="rounded overflow-hidden shadow">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1050&q=80"
                alt="Career at Sonachala plus"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div
          className="bg-white p-5 rounded shadow mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <h3 className="h4 fw-semibold text-dark mb-4">Current Openings</h3>
          <p className="text-secondary mb-4">
            We’re always on the lookout for passionate individuals. If you're
            interested in a career in real estate, property management, customer
            support, or administration, we'd love to hear from you.
          </p>

          <form className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Full Name"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="tel"
                placeholder="Phone Number"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Position Interested In"
                className="form-control"
              />
            </div>
            <div className="col-12">
              <textarea
                placeholder="Tell us about yourself"
                rows="4"
                className="form-control"
              ></textarea>
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-success w-100 py-2 fw-bold"
                style={{ backgroundColor: "#335393" }}
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container mb-5">
        <div className="accordion" id="careerAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                Property Manager
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#careerAccordion"
            >
              <div className="accordion-body">
                Oversee property operations, tenant relations, maintenance
                scheduling, and financial management.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                Client Support Specialist
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#careerAccordion"
            >
              <div className="accordion-body">
                Handle customer inquiries, resolve service requests, and ensure
                excellent client experience.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                Maintenance Technician
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#careerAccordion"
            >
              <div className="accordion-body">
                Conduct routine maintenance and repair work across electrical,
                plumbing, HVAC, and building systems.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
              >
                Operations Manager
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#careerAccordion"
            >
              <div className="accordion-body">
                Lead day-to-day operations, manage vendor relationships, and
                streamline property management processes.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
              >
                Marketing & Content Coordinator
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#careerAccordion"
            >
              <div className="accordion-body">
                Develop marketing campaigns, manage social media presence, and
                create engaging property listings.
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Career;
