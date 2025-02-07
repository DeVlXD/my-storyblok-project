import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import { renderRichText } from "@storyblok/react";


const MainContent = ({ blok }) => {
  return (
    <section className="container-fluid bg-light py-5 fade-anim" {...storyblokEditable(blok)}>
      <div className="container" style={{ maxWidth: '70vw' }}>
        <div className="row justify-content-between inner-container bg-white rounded-5 p-4">
          {/* Left Column */}
          <div className="col-md-6">
            <h2 className='purple-text bold-text'>{blok.heading}</h2>
            <img 
              src={blok.image.filename} 
              alt="Section Image" 
              className="img-fluid rounded mb-3 w-75 ms-5 my-2" 
            />
            {/* Render Rich Text */}
            <div className='my-5' dangerouslySetInnerHTML={{ __html: renderRichText(blok.paragraph) }} />
          </div>

          {/* Right Column (Form) */}
          <div className="col-md-6">
            <form>
              {/* First Name & Last Name (Same Row) */}
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="firstName" className="form-label purple-text">First Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="firstName" 
                    placeholder="First Name" 
                  />
                </div>
                <div className="col">
                  <label htmlFor="lastName" className="form-label purple-text">Last Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="lastName" 
                    placeholder="Last Name" 
                  />
                </div>
              </div>

              {/* Company (New Row) */}
              <div className="mb-3">
                <label htmlFor="company" className="form-label  purple-text">Company</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="company" 
                  placeholder="Company" 
                />
              </div>

              {/* Email & Phone (Same Row) */}
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="email" className="form-label purple-text">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Email" 
                  />
                </div>
                <div className="col">
                  <label htmlFor="phone" className="form-label purple-text">Phone</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="phone" 
                    placeholder="Phone" 
                  />
                </div>
              </div>

              {/* Dropdowns for Number of Employees & Job Title (Same Row) */}
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="employees" className="form-label purple-text">Number of Employees</label>
                  <select className="form-select" id="employees">
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201+">201+</option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="jobTitle" className="form-label purple-text">Job Title</label>
                  <select className="form-select" id="jobTitle">
                    <option value="developer">Developer</option>
                    <option value="manager">Manager</option>
                    <option value="ceo">CEO</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Country (Single Row) */}
              <div className="mb-3">
                <label htmlFor="country" className="form-label purple-text">Country</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="country" 
                  placeholder="Country" 
                />
              </div>

              {/* Message (Text Area) */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label purple-text">Message</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  rows="4" 
                  placeholder="Your Message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-register w-100">Submit</button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MainContent;