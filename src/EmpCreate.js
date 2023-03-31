import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";


const EmpCreate = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [roadtype, roadtypechange] = useState("");
  const [pincode, pincodechange] = useState("");
  const [district, districtchange] = useState("");
  const [state, statechange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);
  const [lat, latchange] = useState("");
  const [lng, lngchange] = useState("");



  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      latchange(lat);
      lngchange(lng);
      handlesubmit(null, lat, lng); // call handlesubmit with lat and lng
    },
    (error) => {
      if (error.code === 1) {
        alert("Please allow geolocation access");
      } else {
        alert("Cannot get current location");
      }
    }
  );
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { name, email, roadtype, pincode, district, state, active, lat, lng };

    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Pothole Data </h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={name}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {name.length == 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        required
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Pincode</label>
                      <input
                        required
                        value={pincode}
                        onChange={(e) => pincodechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <Form.Select
                      aria-label="Default select example"
                      value={roadtype}
                      onChange={(e) => roadtypechange(e.target.value)}
                      className="form-control"
                    >
                      <option>Types of Road</option>
                      <option value="Expressways">Expressways</option>
                      <option value="National highways">
                        National highways
                      </option>
                      <option value="State highways">State highways</option>
                      <option value="District roads">District roads</option>
                      <option value="Rural roads">Rural roads</option>
                      <option value="Border roads">Border roads</option>
                    </Form.Select>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>District</label>
                      <input
                        required
                        value={district}
                        onChange={(e) => districtchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>State</label>
                      <input
                        required
                        value={state}
                        onChange={(e) => statechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => activechange(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>


                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpCreate;
