import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PropertyContext } from "../usecontext/PropertyContext"; // ✅ correct path

const PropertyListings = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    category: "",
    type: "",
    minBeds: "",
    minBaths: "",
  });

  const { setSelectedProperty } = useContext(PropertyContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/properties`
        );

        // Ensure response.data is an array
        let propertiesArray = [];
        if (Array.isArray(response.data)) {
          propertiesArray = response.data;
        } else if (response.data && response.data.properties && Array.isArray(response.data.properties)) {
          // Handle case where API returns { properties: [...] }
          propertiesArray = response.data.properties;
        } else {
          console.error("API response is not an array:", response.data);
          propertiesArray = [];
        }

        setProperties(propertiesArray);
        setFilteredProperties(propertiesArray);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setProperties([]);
        setFilteredProperties([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Dynamic filtering effect with debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filtered = properties.filter((property) => {
        return (
          (searchFilters.location === "" ||
            property.location?.area
              ?.toLowerCase()
              .includes(searchFilters.location.toLowerCase()) ||
            property.location?.city
              ?.toLowerCase()
              .includes(searchFilters.location.toLowerCase())) &&
          (searchFilters.category === "" ||
            property.propertyType
              .toLowerCase()
              .includes(searchFilters.category.toLowerCase())) &&
          (searchFilters.type === "" ||
            property.status
              .toLowerCase()
              .includes(searchFilters.type.toLowerCase())) &&
          (searchFilters.minBeds === "" ||
            property.bedrooms >= parseInt(searchFilters.minBeds || 0)) &&
          (searchFilters.minBaths === "" ||
            property.bathrooms >= parseInt(searchFilters.minBaths || 0))
        );
      });
      setFilteredProperties(filtered);
    }, 300); // 300ms debounce delay

    return () => clearTimeout(timeoutId);
  }, [searchFilters, properties]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = properties.filter((property) => {
      return (
        (searchFilters.location === "" ||
          property.location?.area
            ?.toLowerCase()
            .includes(searchFilters.location.toLowerCase()) ||
          property.location?.city
            ?.toLowerCase()
            .includes(searchFilters.location.toLowerCase())) &&
        (searchFilters.category === "" ||
          property.propertyType
            .toLowerCase()
            .includes(searchFilters.category.toLowerCase())) &&
        (searchFilters.type === "" ||
          property.status
            .toLowerCase()
            .includes(searchFilters.type.toLowerCase())) &&
        (searchFilters.minBeds === "" ||
          property.bedrooms >= parseInt(searchFilters.minBeds)) &&
        (searchFilters.minBaths === "" ||
          property.bathrooms >= parseInt(searchFilters.minBaths))
      );
    });
    setFilteredProperties(filtered);
  };

  const handleChange = (e) => {
    setSearchFilters({ ...searchFilters, [e.target.name]: e.target.value });
  };

  const clearFilters = () => {
    setSearchFilters({
      location: "",
      category: "",
      type: "",
      minBeds: "",
      minBaths: "",
    });
    setFilteredProperties(properties);
  };

  const handleCardClick = (property) => {
    setSelectedProperty(property);
    navigate(`/PropertyDetails/${property._id}`);
  };

  const location = useLocation();

  // This will be true when path is "/"
  const isHomePage = location.pathname === "/";

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-9">
          <h2 className="mb-2">PROPERTY LISTINGS</h2>
          <p className="text-muted mb-4">
            {filteredProperties.length} properties found
            {properties.length > 0 && filteredProperties.length !== properties.length && (
              <small className="text-primary ms-2">
                (filtered from {properties.length} total)
              </small>
            )}
          </p>

          {loading ? (
            <p>Loading properties...</p>
          ) : (





            <div className="row">
              {filteredProperties.map((property) => (
                <div
                  key={property._id}
                  className="col-lg-4 col-md-6 mb-4"
                  onClick={() => handleCardClick(property)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className="card h-100 rounded-4 overflow-hidden"
                    style={{
                      border: "1px solid #f1f1f1",
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div className="position-relative">
                      <img
                        src={
                          property.imageUrls?.length > 0
                            ? (property.imageUrls[0].startsWith("http://") ||
                              property.imageUrls[0].startsWith("https://")
                              ? property.imageUrls[0]
                              : `${import.meta.env.VITE_API_BASE_URL}${property.imageUrls[0]}`)
                            : "https://via.placeholder.com/400x230?text=No+Image"
                        }
                        alt={property.title || "Property Image"}
                        className="card-img-top"
                        style={{
                          height: "230px",
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      />

                      {/* Gradient overlay */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                        }}
                      ></div>

                      {/* Badges */}
                      <span
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          background: "linear-gradient(45deg, #007bff, #6610f2)",
                          color: "#fff",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        {property.propertyType || "Flat"}
                      </span>

                      <span
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          background: "linear-gradient(45deg, #ffdf7e, #ffc107)",
                          color: "#333",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        {property.status || "Rent"}
                      </span>

                      <span
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          left: "10px",
                          background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
                          color: "#fff",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          fontSize: "15px",
                          fontWeight: 600,
                          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                        }}
                      >
                        ₹{property.price || 0}
                      </span>
                    </div>

                    <div className="card-body" style={{ padding: "16px" }}>
                      <h5 className="card-title" style={{ fontWeight: 700, marginBottom: "6px", color: "#212529" }}>
                        {property.title}
                      </h5>
                      <p className="text-muted small" style={{ marginBottom: "8px" }}>
                        📍 {property.location?.area}, {property.location?.city}
                      </p>

                      <ul
                        className="list-unstyled mb-3 small"
                        style={{ color: "#6c757d", marginBottom: "10px" }}
                      > 
                        <li>
                          📏 {property.sizeSqFt} sq ft | 🛏 {property.bedrooms} BR | 🚿{" "}
                          {property.bathrooms} Bath
                        </li>
                        <li>
                          🏢 {property.floor} | 🌅 {property.facing}
                        </li>
                      </ul>

                      <div className="d-flex justify-content-between align-items-center">
                        <p className="small text-muted mb-0">
                          Available:{" "}
                          {property.availabilityDate
                            ? new Date(property.availabilityDate).toLocaleDateString()
                            : "N/A"}
                        </p>

                        <button
                          className="btn btn-sm"
                          style={{
                            background: "linear-gradient(45deg, #ff4b2b, #ff416c)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "20px",
                            padding: "6px 16px",
                            fontWeight: 500,
                            transition: "background 0.3s ease",
                          }}
                          onMouseEnter={(e) =>
                          (e.currentTarget.style.background =
                            "linear-gradient(45deg, #ff6a00, #ee0979)")
                          }
                          onMouseLeave={(e) =>
                          (e.currentTarget.style.background =
                            "linear-gradient(45deg, #ff4b2b, #ff416c)")
                          }
                        >
                          ENQUIRE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>






          )}
        </div>

        {/* ADVANCED SEARCH */}

        {!isHomePage && (
          <div className="col-md-3">
            <div className="bg-info text-white p-3 rounded mb-4">
              <h5 className="fw-bold">ADVANCED SEARCH</h5>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  name="location"
                  value={searchFilters.location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="category"
                  value={searchFilters.category}
                  onChange={handleChange}
                  placeholder="Property Category"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="type"
                  value={searchFilters.type}
                  onChange={handleChange}
                  placeholder="Property Type"
                  className="form-control mb-2"
                />
                <div className="row mb-2">
                  <div className="col">
                    <input
                      type="number"
                      name="minBeds"
                      value={searchFilters.minBeds}
                      onChange={handleChange}
                      placeholder="Min Beds"
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      name="minBaths"
                      value={searchFilters.minBaths}
                      onChange={handleChange}
                      placeholder="Min Baths"
                      className="form-control"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-warning w-100 fw-bold mb-2">
                  SEARCH
                </button>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="btn btn-secondary w-100 fw-bold"
                >
                  CLEAR FILTERS
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListings;
