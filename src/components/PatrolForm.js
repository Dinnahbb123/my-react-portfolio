import {useState} from "react";


function PatrolForm() {

    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [shift, setShift] = useState('');
    const [post, setPost] = useState('');
    const [activities, setActivities] = useState('');
    

    return (
        <form>
                <div className="form-group">
                    <label>
                        Date:
                        <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Name:
                        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Location:
                        <input type="text" name="location" value={location} onChange={e => setLocation(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Shift:
                        <input type="text" name="shift" value={shift} onChange={e => setShift(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Post:
                        <input type="text" name="post" value={post} onChange={e => setPost(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Activities
                        <textarea name="activities" value={activities} onChange={e => setActivities(e.target.value)} />
                    </label>
                </div>
                <div>
                    <button type="submit">Submit Report</button>
                </div>
        </form>
    )
}

export default PatrolForm;