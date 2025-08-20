//Update

import {useState} from "react";

const InspectionForm = () => {
     
    const [licensePlate, setLicensePlate] = useState("");

    const [comments, setComments] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Thank you for submitting!");
    }

    const [formData, setFormData] = useState({ name:"", licensePlate:"", comments:"" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
         <form onSubmit={handleSubmit}>
                <div>
                            <label>License Plate:</label>
                            <input type="text" required
                            value={licensePlate} 
                            onChange={(e) => setLicensePlate(e.target.value)} />
                </div>
                <div>
                            <label>Vehicle ID:</label>
                            <input type="text" required name="VehicleID" />
                </div>
                <div>
                            <label>Beginning Fuel Level</label>
                            <select name ='BeginningFuelLevel' required>
                                <option value = "full">Full</option>
                                <option value = "1/2">1/2</option>
                                <option value = "1/4">1/4</option>
                                <option value = "empty">Empty</option>
                            </select>
                </div>
                <div>
                            <label>Are the headlights working?</label>
                            <input
                                type="checkbox" required
                            />
                </div>
                <div>
                            <label>Tail lights working?</label>
                            <input
                                type="checkbox" required
                            />
                </div>
                <div>
                            <label>Beacon lights working?</label>
                                <input
                                    type="checkbox" required
                                />
                </div>
                <div>
                            <label>Exterior Appearance</label>
                            <select name="ExteriorAppearance" required>
                                <option value= "good">Good</option>
                                <option value= "bad" >Bad</option>
                            </select>
                </div>
                <div>
                    <label>Exterior Damage</label>
                        <input
                            type="checkbox" required
                        />
                </div>
                <div>
                            <label>Interior Appearance</label>
                            <select name="InteriorAppearance" required>
                                <option value= "good">Good</option>
                                <option value= "bad" >Bad</option>
                            </select>     
                </div>
                <div>
                    <label>Interior Damage</label>
                        <input
                            type="checkbox" required
                        />
                </div>
                <div>
                    <label>Is all relevant equipment included?</label>
                        <input
                            type="checkbox" required
                        />
                </div>
                <div>
                    <label>Need maintenance or repairs?</label>
                        <input
                            type="checkbox" required
                        />
                </div>
                <div>
                    <label>Additional Comments</label>
                        
                        <textarea
                            value={comments} 
                            onChange={(e) => setComments(e.target.value)}
                        />      
                </div>
     
                <div>
                   <button type="submit">Submit</button>
                </div>


         </form>

    )
}

export default InspectionForm;