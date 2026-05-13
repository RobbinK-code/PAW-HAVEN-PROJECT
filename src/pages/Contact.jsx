import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting KSPCA. We will get back to you soon!');
  };

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Header */}
      <section className="bg-orange-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg">Reach out to Kenya’s animal welfare team</p>
      </section>

      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full border p-3 rounded-md focus:ring-2 focus:ring-green-500" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input 
                type="email" 
                className="w-full border p-3 rounded-md focus:ring-2 focus:ring-green-500" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea 
                rows="5" 
                className="w-full border p-3 rounded-md focus:ring-2 focus:ring-green-500" 
                required
              ></textarea>
            </div>
            <button className="bg-green-700 text-white px-8 py-3 rounded-md font-bold hover:bg-green-800 transition">
              Submit Request
            </button>
          </form>
        </section>

        {/* Office Details */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Contacts</h2>
            <p className="mb-2"><strong>Phone:</strong> +254 (0) 709 007 500</p>
            <p className="mb-2"><strong>Email:</strong> info@kspca.or.ke</p>
            <p className="mb-2"><strong>Adoptions:</strong> rehoming@kspca.or.ke</p>
            <p><strong>Hours:</strong> Mon - Sat, 9am – 5pm</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border rounded-md">
              <h3 className="font-bold text-green-700">Nairobi</h3>
              <p className="text-sm">Langata Road, Karen</p>
            </div>
            <div className="p-4 border rounded-md">
              <h3 className="font-bold text-green-700">Naivasha</h3>
              <p className="text-sm">Moi Southlake Rd, Karagita</p>
            </div>
            <div className="p-4 border rounded-md">
              <h3 className="font-bold text-green-700">Mombasa</h3>
              <p className="text-sm">Malindi Road, Nyali</p>
            </div>
            <div className="p-4 border rounded-md">
              <h3 className="font-bold text-green-700">Nanyuki</h3>
              <p className="text-sm">Nanyuki Town, Laikipia</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;