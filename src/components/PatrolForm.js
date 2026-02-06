import {useState} from "react";


function PatrolForm() {  

    // const [date, setDate] = useState('');
    // const [name, setName] = useState('');
    // const [location, setLocation] = useState('');
    // const [shift, setShift] = useState('');
    // const [post, setPost] = useState('');
    // const [account, setAccount] = useState('');

    const [form, setForm] = useState({
        date: '', name: '', location: '', shift: '',
        post: '', account: ''
    })

    const [clockInTime, setClockInTime] = useState(null);

    const [clockedIn, setClockedIn] = useState(false);

    

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        setClockedIn(true);
        setClockInTime(new Date());
        
    };

    

    return (
        <div>
            <h1 style={{ padding: "20px" }}>Begin Patrol</h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
            <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>
                            Date:
                            <input type="text" name="date" value={form.date} onChange={handleChange} />
                            {/* <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)} onSubmit={handleSubmit} /> */}

                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Name:
                            <input type="text" name="name" value={form.name} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Location:
                            <input type="text" name="location" value={form.location} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Account:
                            <input type="text" name="account" value={form.account} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Shift:
                            <input type="text" name="shift" value={form.shift} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Post:
                            <input type="text" name="post" value={form.post} onChange={handleChange} />
                        </label>
                    </div>
                    
                    <div>
                        <button type="submit">Clock In</button>
                    </div>
            </form>

            {clockedIn && clockInTime && (
                <p>You clocked in at {clockInTime.toLocaleTimeString()}</p>
            )}
        </div>
    )
}

export default PatrolForm;