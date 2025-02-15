import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: ''
  });

  const handleChange = (event) => {
    // Extract the name and value properties from the event object's target property.
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `;

    // This line displays a confirmation dialog using the window.confirm(), presenting the confirmationMessage 
    // to the user. If the user confirms the details in the dialog, isConfirmed is set to true; otherwise, it's set to false.
    const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
    if (isConfirmed) {
      console.log('Submitting feedback:', formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: ''
      });
      alert('Thank you for your valuable feedback!');
    }
  };

  return (
    <>
      <nav>
        Tell Us What You Think
      </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        {/* Add 5 radio buttons for rating */}
        <p>Please share your feedback with us.</p>
        <div>
          <label>
            <input
              type="radio"
              name="rating"
              value="1"
              onChange={handleChange}
              checked={formData.rating === "1"}
            />
            &nbsp;1
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="rating"
              value="2"
              onChange={handleChange}
              checked={formData.rating === "2"}
            />
            &nbsp;2
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="rating"
              value="3"
              onChange={handleChange}
              checked={formData.rating === "3"}
            />
            &nbsp;3
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="rating"
              value="4"
              onChange={handleChange}
              checked={formData.rating === "4"}
            />
            &nbsp;4
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="rating"
              value="5"
              onChange={handleChange}
              checked={formData.rating === "5"}
            />
            &nbsp;5
          </label>
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
