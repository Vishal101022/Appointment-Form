import React, { useState } from "react";
import axios from "axios";

const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/appointments", {
        name,
        email,
        phone,
        date,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Name'
        required
      />
      <br />
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        required
      />
      <br />
      <input
        type='tel'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder='Phone No'
        required
      />
      <br />
      <input
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default AppointmentForm;
