import React from "react";
import { useRef, useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [
        selectedValue,
        setSelectedValue,
    ] = useState("Lunch")





    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")
    const [personName, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [personEmail, setPersonEmail] = useState("")

    const [specialRequest, setSpecialReq] = useState("")




    const occasions = [
        "Birthday",
        "Anniversary",
        "Promotion"

    ]

    const handleRadioChange = (value) => {
        setSelectedValue(value);
    };


    const handleDateChange = (e) => {

        setDate(e);
        props.dispatch(e);

    }
    const handleTimeChange = (e) => {

        setTime(e);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);

    }
    const handleCancel = (e) => {

        setDate("");
        setGuests("");
        setName("");
        setPersonEmail("");
        setPhoneNumber("");
        setSpecialReq("")


    }
    const Radiobox = ({ label, value, onChange }) => {
        return (
            <label>
                <input type="radio" value={value} onChange={onChange} />

                {label}
            </label>
        );
    };
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset className="formField">
                        <div>
                            <label htmlFor="Select Date">Select Date:</label>
                            <input id="reservation_date" type="date" name="reservation_date"
                                value={date} placeholder="Choose a date" onChange={(e) => handleDateChange(e.target.value)} required></input>
                        </div>
                        {/* for time selection*/}
                        <div>
                            <label htmlFor="Select Time">Select Time:</label>
                            {/* <select id="reservation_time" value={time} onChange={(e) => handleTimeChange(e.target.value)} required>*/}
                            <select id="reservation_time" key={time} value={time} onChange={(e) => handleTimeChange(e.target.value)}>
                                {props.availableTimes.map(time => {
                                    return <option >{time}</option>

                                })}


                            </select>
                            {/*  <Radiobox label="Lunch" value="Lunch" checked={selectedValue === "Lunch"}
                                onChange={(e) => handleRadioChange(e.target.value)} />
    <Radiobox label="Dinner" value="Dinner" checked={selectedValue === "Dinner"} onChange={(e) => handleRadioChange(e.target.value)} /> */}

                        </div>
                        {/**  Number of guests*/}
                        <div>
                            <label htmlFor="Number of guests">Number of guests:</label>
                            <input id="guests" type="number" min={1} name="guests"
                                value={guests} placeholder="Choose number of guests" onChange={(e) => setGuests(e.target.value)} required></input>
                        </div>




                        {/**  Name of person doing booking */}
                        <div>
                            <label htmlFor="Name">Name:</label>
                            <input id="name" type="text" name="person_name"
                                value={personName} placeholder="Enter a person who is booking"
                                onChange={(e) => setName(e.target.value)}></input>
                        </div>
                        {/* Phone number*/}
                        <div>
                            <label htmlFor="Phone Number">Phone Number:</label>
                            <input id="phonenumber" type="text" name="person_phonenumber"
                                value={phoneNumber} placeholder="Enter a person who is booking"
                                onChange={(e) => setPhoneNumber(e.target.value)}></input>
                        </div>
                        {/* Email */}
                        <div>
                            <label htmlFor="Email">Email:</label>
                            <input id="email" type="email" name="person_email"
                                value={personEmail} placeholder="Enter a person email for contact"
                                onChange={(e) => setPersonEmail(e.target.value)} ></input>
                        </div>
                        {/*Occasion */}
                        <div>
                            <label htmlFor="Occasion">Occassion:</label>
                            <select id="occasion" key={occasion} value={occasion} onChange={(e => { setOccasion(e.target.value) })}>
                                {occasions.map(o => {
                                    return <option >{o}</option>

                                })}

                            </select>
                        </div>
                        {/*Special Request */}
                        <div>
                            <label htmlFor="specialRequest" >Special Request:</label>
                            <textarea type="text" name="specialRequest" value="" placeholder="Enter your request..."
                                onChange={(e) => setSpecialReq(e.target.value)}></textarea>
                        </div>
                        <div >
                            <button aria-label="On Click" type="submit" className="btnreceive" onClick={handleSubmit}>Reserve a Table</button>

                            <button aria-label="On Click" className="btnreceive" onClick={handleCancel}>Cancel</button>
                        </div>

                    </fieldset>
                </form>

            </section>
        </header >


    );


}

export default BookingForm;