import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}
                

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Pothole Data Uploaded by</h2>
                </div>
                <div className="card-body"></div>
                

                {empdata &&
                    <div>
                        <h2>The Uploader name is : <b>{empdata.name}</b>  ({empdata.id})</h2>
                        <h5>Email is : {empdata.email}</h5>
                        <h3>Location Details</h3>
                        <h5>Road Type is : {empdata.roadtype}</h5>
                        <h5>Pincode is : {empdata.pincode}</h5>
                        <h5>District is : {empdata.district}</h5>
                        <h5>State is : {empdata.state}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>

                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default EmpDetail;