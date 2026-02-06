//Things to do

//Make it to wear it is NOT required to check a box if item is not working eg. bad headlights



import {useState} from "react";

const InspectionForm = () => { 
     
   

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({vehicleId:"", beginningFeulLevel:"",
                    licensePlate:"", name:"",comments:"",
                    headLights: false, tailLights: false, beaconLights: false,
                    exteriorAppearance: false, interiorAppearance: false,
                    exteriorDamage: false, interiorDamage: false,
                    relevantEquipment: false, maintenance: false,
                    additionalComments:""
        })
        console.log(formData);
        alert("Thank you for submitting!");
    }

    const [formData, setFormData] = useState({ name:"", licensePlate:"", comments:"", vehicleId:"",
        beginningFeulLevel:"", headLights: false, tailLights: false, beaconLights: false, exteriorAppearance: false,
        interiorAppearance: false, exteriorDamage: false, interiorDamage: false, relevantEquipment: false, maintenance: false,
        additionalComments:""
      });

    const handleChange = (e) => {
        // setFormData({ ...formData, [e.target.name]: e.target.value });
        const { name, type, checked, value } = e.target;
        setFormData({
            ...formData,[name]: type === "checkbox" ? checked : value, })
    };

    return (
        <div>
            <h1>Vehicle Inspection Form</h1>
         <form onSubmit={handleSubmit}>
                <div>

                            <label>License Plate:</label>
                            <input type="text" required name="licensePlate"
                            value={formData.licensePlate} 
                            onChange={handleChange} />
                </div>
                <div>
                            <label>Vehicle ID:</label>
                            <input type="text" 
                            required name="vehicleId" 
                            value={formData.vehicleId}
                            onChange={handleChange}
                            />
                </div>
                <div>
                            <label>Beginning Fuel Level</label>
                            <select name ='beginningFeulLevel' required
                            value={formData.beginningFeulLevel}
                            onChange={handleChange}>
                                <option value = "full">Full</option>
                                <option value = "1/2">1/2</option>
                                <option value = "1/4">1/4</option>
                                <option value = "empty">Empty</option>
                            </select>
                </div>
                <div>
                            <label>Are the headlights working?</label>
                            <input type="checkbox" 
                            required name="headLights"
                            checked={formData.headLights}
                            onChange={handleChange}
                            />
                </div>
                <div>
                            <label>Tail lights working?</label>
                            <input type="checkbox" 
                            required name="tailLights"
                            checked={formData.tailLights}
                            onChange={handleChange}
                            />
                </div>
                <div>
                            <label>Beacon lights working?</label>
                                <input type="checkbox" 
                                required name="beaconLights"
                                checked={formData.beaconLights}
                                onChange={handleChange}
                                />
                </div>
                <div>
                            <label>Exterior Appearance</label>
                            <select name="exteriorAppearance" 
                            checked={formData.exteriorAppearance}
                            onChange={handleChange}>

                                <option value= "good">Good</option>
                                <option value= "bad" >Bad</option>

                            </select>
                </div>
                <div>

                    <label>Exterior Damage</label>
                        <input type="checkbox" 
                        required name="exteriorDamage"
                        checked={formData.exteriorDamage}
                        onChange={handleChange}
                        />

                </div>
                <div>
                            <label>Interior Appearance</label>
                            <select name="interiorAppearance" required
                            checked={formData.interiorAppearance}
                            onChange={handleChange}>

                                <option value= "good">Good</option>
                                <option value= "bad" >Bad</option>

                            </select>     
                </div>
                <div>

                    <label>Interior Damage</label>
                        <input type="checkbox" 
                        required name="interiorDamage"
                        checked={formData.interiorDamage}
                        onChange={handleChange}
                        />

                </div>
                <div>

                    <label>Is all relevant equipment included?</label>
                        <input type="checkbox" 
                        required name="relevantEquipment"
                        checked={formData.relevantEquipment}
                        onChange={handleChange}
                        />

                </div>
                <div>

                    <label>Need maintenance or repairs?</label>
                        <input type="checkbox" 
                        required name="maintenance"
                        checked={formData.maintenance}
                        onChange={handleChange}
                        />

                </div>
                <div>
                    <label>Additional Comments</label>
                        
                        <textarea name="comments"
                        value={formData.comments} 
                        onChange={handleChange} /> 

                </div>
     
                <div>
                   <button type="submit">Submit</button>
                </div>


         </form>

         </div>

    )
}

export default InspectionForm;