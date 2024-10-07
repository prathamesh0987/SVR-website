import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'

const ContactForm = () => {

  const [result, setResult] = React.useState("");

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .required('Message is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);
      formData.append("access_key", "a95999f2-e7e2-4023-9668-936a30b0df16");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
        resetForm();  // Reset the form after successful submission
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }
  });

  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white p-10 rounded-lg shadow-lg">
      {/* Form Section */}
      <div className="md:w-1/2 p-5">
        <h2 className="text-2xl font-bold mb-6">Write us</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full p-3 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                formik.touched.name && formik.errors.name ? 'border-red-500' : ''
              }`}
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full p-3 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : ''
              }`}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={`w-full p-3 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                formik.touched.message && formik.errors.message ? 'border-red-500' : ''
              }`}
              {...formik.getFieldProps('message')}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 px-6 rounded hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="mt-4 text-orange-500">
          {result}
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="md:w-1/2 p-5 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-6">Contact information</h2>
        <p className="mb-4 text-gray-400">
          We’re open for any suggestion or just to have a chat
        </p>
        <ul className="space-y-4">
          <li className="flex items-center text-gray-400">
            <span className="mr-4">📍</span>
            <span>
              <strong>Address:</strong> 198 West 21th Street, Suite 721 New York NY 10016
            </span>
          </li>
          <li className="flex items-center text-gray-400">
            <span className="mr-4">📞</span>
            <span>
              <strong>Phone:</strong> +1235 2355 98
            </span>
          </li>
          <li className="flex items-center text-gray-400">
            <span className="mr-4">✉️</span>
            <span>
              <strong>Email:</strong> info@yoursite.com
            </span>
          </li>
          <li className="flex items-center text-gray-400">
            <span className="mr-4">🌐</span>
            <span>
              <strong>Website:</strong> www.yoursite.com
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
