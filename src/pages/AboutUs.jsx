import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About KSPCA</h1>
        <p className="text-xl max-w-2xl mx-auto">
          The leading animal welfare charity in Kenya, dedicated to preventing cruelty and promoting humane treatment.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-t-4 border-green-600">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Our Mission</h2>
          <p className="leading-relaxed">
            To care for animals and protect them from stress and cruelty through rescue operations, 
            community education, and enforcement of animal welfare laws in Kenya.
          </p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-t-4 border-orange-500">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Our Vision</h2>
          <p className="leading-relaxed">
            A Kenyan society where animals are happy, healthy, and treated with compassion.
          </p>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Believe</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="text-green-600 mr-3">✔</span> Promote the protection of all animal species.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3">✔</span> Prevent cruelty and relieve animal suffering.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3">✔</span> Rescue and rehabilitate animals in distress.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3">✔</span> Educate and inform people about animal welfare.
            </li>
          </ul>
        </div>
      </section>

      {/* History/Content */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="mb-4 leading-relaxed">
          Established over a century ago, KSPCA has evolved from a small group in Mombasa 
          to a nationwide organization with headquarters in Nairobi and a presence in Naivasha, 
          Nanyuki, and Watamu.
        </p>
        <p className="leading-relaxed">
          The organization relies solely on volunteers, fundraising efforts, and donations to 
          fulfill its mission of being a voice for the voiceless.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;