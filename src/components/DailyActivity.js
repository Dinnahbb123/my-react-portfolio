import {useState} from "react"

function DailyActivity() {

    const [form, setForm] = useState("");


const handleSubmit = e => {
    e.preventDefault();
    console.log(form)
    alert("Thank you for your Submission")


}

const handleChange = (e) => {
    setForm(e.target.value)
}

return(
    <form onSubmit={handleSubmit}>
        <label>Daily Activity Report
            <textarea
                value={form}
                onChange={handleChange}
            />
        </label>

        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
)

}

export default DailyActivity;