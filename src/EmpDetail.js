import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// import Imageholder from 'http://localhost:4000/uploads/1.jpg';

const EmpDetail = () => {
    const { empid } = useParams();
    const [empdata, empdatachange] = useState({});
    const [imageUrl,setImageUrl] = useState('');
   

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
            const IMAGE_URL = `http://localhost:4000/uploads/${resp.lat}-${resp.lng}.jpg`;
            console.log(IMAGE_URL);
            setImageUrl(IMAGE_URL);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [empid]);
    
    return (
        <div>
          <div className="container">
            <div className="card row" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Pothole Data Uploaded by</h2>
              </div>
              <div className="card-body"></div>
    
              {empdata && (
                <div>
                  <div className="box-1">
                    <h2>
                      The Uploader name is : <b>{empdata.name}</b> ({empdata.id})
                    </h2>
                    <h5>Email is : {empdata.email}</h5>
                    <h3>Location Details</h3>
                    <h5>Road Type is : {empdata.roadtype}</h5>
                    <h5>Pincode is : {empdata.pincode}</h5>
                    <h5>District is : {empdata.district}</h5>
                    <h5>State is : {empdata.state}</h5>
                    <h5>latitude is : {empdata.lng}</h5>
                    <Link className="btn btn-outline-success" to="/">
                      Back to Listing
                    </Link>
                  </div>
                  <div className="box-2" id = "right">
                  <img src ={imageUrl} className = "imageholder" alt="Pothole" onError={(e) => console.log("Error loading image:", e)} />
                  </div>
                </div>
              )}
            </div>
          </div>
    
          <style>
            {`
              .box-1 {
                display: inline-block;
                width: 50%;
              }
              .box-2 {
                display: inline-block;
                width: 50%;
                right:0;
              }
              #right {  
                text-align: right;
                }
                .imageholder{
                  width: 200px;
                  height: 200px;
                  display: block;
                  margin-left: auto;
                  margin-right: 10px;
                  margin-bottom:10%;
                  box-shadow: 10px 10px lightblue;
                }
            `}
          </style>
        </div>
      );
    };

export default EmpDetail;