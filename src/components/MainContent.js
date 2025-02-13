import React, {useState} from 'react';
import { storyblokEditable } from '@storyblok/react';
import { renderRichText } from "@storyblok/react";


const MainContent = ({ blok }) => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        employees: "",
        jobTitle: "",
        country: "",
        message: "",
    });

    const [loading, setLoading] = useState(false); // Track form submission status
    const [statusMessage, setStatusMessage] = useState(""); // Show success/error messages

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const API_URL = process.env.REACT_APP_API_URL;

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage("");

        try {
            const response = await fetch(`${API_URL}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatusMessage("Message sent successfully!");
                setFormData({  // Reset form
                    firstName: "",
                    lastName: "",
                    email: "",
                    company: "",
                    phone: "",
                    employees: "",
                    jobTitle: "",
                    country: "",
                    message: "",
                });
            } else {
                setStatusMessage(`Failed to send: ${result.error}`);
            }
        } catch (error) {
            setStatusMessage("Error sending message. Try again." + error);
        }

        setLoading(false);
    };

    return (
        <section className="container-fluid bg-transparent py-5 mb-5 fade-anim" {...storyblokEditable(blok)}>
            <div className="container custom-container">
                <div className="row justify-content-between inner-container bg-white rounded-5 p-4">
                    {/* Left Column */}
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className="purple-text bold-text">{blok.heading}</h2>

                        {/* Centering Image on Mobile */}
                        <img
                            src={blok.image.filename}
                            alt="Section Image"
                            className="img-fluid rounded mb-3 w-75 d-block mx-auto my-5"
                        />

                        {/* Render Rich Text */}
                        <div className="my-5 rich-text" dangerouslySetInnerHTML={{ __html: renderRichText(blok.paragraph) }} />
                    </div>

                    {/* Right Column (Form) */}
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            
                            {/* First Name & Last Name */}
                            <div className="row mb-3">
                                <div className="col-12 col-md my-3 my-md-0">
                                    <label className="form-label purple-text">First Name</label>
                                    <input type="text" name="firstName" className="form-control" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                                </div>
                                <div className="col-12 col-md">
                                    <label className="form-label purple-text">Last Name</label>
                                    <input type="text" name="lastName" className="form-control" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                                </div>
                            </div>

                            {/* Company */}
                            <div className="mb-3">
                                <label className="form-label purple-text">Company</label>
                                <input type="text" name="company" className="form-control" placeholder="Company" value={formData.company} onChange={handleChange} />
                            </div>

                            {/* Email & Phone */}
                            <div className="row mb-3">
                                <div className="col-12 col-md my-1 my-md-0">
                                    <label className="form-label purple-text">Email</label>
                                    <input type="email" name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="col-12 col-md">
                                    <label className="form-label purple-text">Phone</label>
                                    <input type="text" name="phone" className="form-control" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                                </div>
                            </div>

                            {/* Employees & Job Title */}
                            <div className="row mb-3">
                                <div className="col-12 col-md my-3 my-md-0">
                                    <label className="form-label purple-text">Number of Employees</label>
                                    <select name="employees" className="form-select" value={formData.employees} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="1-10">1-10</option>
                                        <option value="11-50">11-50</option>
                                        <option value="51-200">51-200</option>
                                        <option value="201+">201+</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md">
                                    <label className="form-label purple-text">Job Title</label>
                                    <select name="jobTitle" className="form-select" value={formData.jobTitle} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="developer">Developer</option>
                                        <option value="manager">Manager</option>
                                        <option value="ceo">CEO</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Country */}
                            <div className="mb-3">
                                <label className="form-label purple-text">Country</label>
                                <input type="text" name="country" className="form-control" placeholder="Country" value={formData.country} onChange={handleChange} />
                            </div>

                            {/* Message */}
                            <div className="mb-3">
                                <label className="form-label purple-text">Message</label>
                                <textarea name="message" className="form-control" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn btn-register w-100" disabled={loading}>
                                {loading ? "Sending..." : "Submit"}
                            </button>

                            {/* Status Message */}
                            {statusMessage && <p className="mt-3 text-center">{statusMessage}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainContent;