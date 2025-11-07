import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    college: "",
    education: "",
    domain: "",
    contact: "",
    email: "",
    resume: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.college ||
      !form.education ||
      !form.domain ||
      !form.contact ||
      !form.email ||
      !form.resume
    ) {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    const subject = `Application for Internship in ${form.domain}`;
    const body = `Dear Flantik Solutions Team,%0D%0A%0D%0A
I hope you are doing well.%0D%0A
I am ${form.name} from ${form.college}, currently pursuing ${form.education}.%0D%0A
I would like to apply for an internship in the ${form.domain} domain.%0D%0A%0D%0A
Here are my details:%0D%0A
- Full Name: ${form.name}%0D%0A
- College Name: ${form.college}%0D%0A
- Education: ${form.education}%0D%0A
- Domain: ${form.domain}%0D%0A
- Contact Number: ${form.contact}%0D%0A
- Email ID: ${form.email}%0D%0A
- Resume Link: ${form.resume}%0D%0A%0D%0A
Thank you for your time and consideration.%0D%0A%0D%0A
Best regards,%0D%0A
${form.name}`;

    const mailtoLink = `mailto:flantiksolution@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    alert("✅ Opening your email app... Please click 'Send' to complete your application.");
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">
          Internship Application Form
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="border rounded-lg p-2 mb-3 w-full"
        />
        <input
          type="text"
          name="college"
          placeholder="College Name"
          value={form.college}
          onChange={handleChange}
          className="border rounded-lg p-2 mb-3 w-full"
        />
        <input
          type="text"
          name="education"
          placeholder="Education (e.g. B.Tech, MCA)"
          value={form.education}
          onChange={handleChange}
          className="border rounded-lg p-2 mb-3 w-full"
        />

        {/* Dropdown for Domain */}
        <select
          name="domain"
          value={form.domain}
          onChange={handleChange}
          className="border rounded-lg p-2 mb-3 w-full"
        >
          <option value="">Select Domain</option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Digital Marketing">Digital Marketing</option>
        </select>

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={form.contact}
          onChange={handleChange}
          className="border rounded-lg p-2 mb-3 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={form.email}
          onChange={handleChange}
          className="border rounded-lg p-2 mb-3 w-full"
        />
        <input
          type="text"
          name="resume"
          placeholder="Resume Google Drive Link"
          value={form.resume}
          onChange={handleChange}
          className="border rounded-lg p-2 mb-3 w-full"
        />

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white w-full py-2 rounded-lg"
        >
          Send Internship Mail
        </button>
      </form>
    </div>
  );
}

export default App;
