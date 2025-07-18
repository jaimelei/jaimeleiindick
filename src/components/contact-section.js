import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

const CONTACT_FORM = process.env.REACT_APP_CONTACT_FORM_URL;

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch(CONTACT_FORM, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    } catch (err) {
      setStatus('ERROR');
    }
  };

  return (
    <div className="bg-[#1D1D1D] text-white flex flex-col items-center justify-center px-6 pb-12">
      <div className="w-full max-w-5xl md:max-w-[80%] lg:max-w-[60%]">
        {/* Section Heading */}
        <h3 className="text-[#9E6D0C] font-squada text-4xl md:text-6xl pb-12 text-center">
          Contact Me
        </h3>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
          <div className="text-center text-sm md:text-lg">
            <Phone className="h-8 w-8 mx-auto text-white mb-2" />
            <h3 className="font-bold">Phone</h3>
            <p className="text-blue-400 mt-2">+63 960 355 0100</p>
          </div>
          <div className="text-center text-sm md:text-lg">
            <Mail className="h-8 w-8 mx-auto text-white mb-2" />
            <h3 className="font-bold">Email</h3>
            <p className="text-blue-400 mt-2">jaimeleiindick@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 text-sm md:text-md xl:text-lg ">
            <div className="flex-1 flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="First Name :"
                value={formData.name}
                onChange={handleChange}
                className="p-3 bg-transparent border border-gray-500 rounded text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email :"
                value={formData.email}
                onChange={handleChange}
                className="p-3 bg-transparent border border-gray-500 rounded text-white"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Your subject :"
                value={formData.subject}
                onChange={handleChange}
                className="p-3 bg-transparent border border-gray-500 rounded text-white"
                required
              />
            </div>

            <div className="flex-1">
              <textarea
                name="message"
                placeholder="Your Message :"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-full min-h-[172px] p-3 bg-transparent border border-gray-500 rounded resize-none text-white"
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition"
            >
              Send Message
            </button>
          </div>

          {/* Feedback message */}
          {status === 'SUCCESS' && (
            <p className="text-green-400 text-center mt-4">Thank you! Your message has been sent.</p>
          )}
          {status === 'ERROR' && (
            <p className="text-red-400 text-center mt-4">Oops! Something went wrong.</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
