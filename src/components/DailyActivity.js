import {useState} from "react"

function DailyActivity() {

    const [form, setForm] = useState("");


const handleSubmit = e => {
    e.preventDefault();
    console.log(form)
    alert("Thank you for your Submission")


}

return(
    <div>
        <h1>Daily Activity Report</h1>
            <form onSubmit={handleSubmit}></form>
    </div>
)

}

export default DailyActivity;