'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to My Home Luxury Girl&apos;s Hostel
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Where Comfort Meets Class
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="flex items-center gap-2">
              <span className="text-2xl">🔒</span> Safe
            </span>
            <span className="flex items-center gap-2">
              <span className="text-2xl">✨</span> Stylish
            </span>
            <span className="flex items-center gap-2">
              <span className="text-2xl">🏡</span> Homely
            </span>
            <span className="flex items-center gap-2">
              <span className="text-2xl">🌐</span> Wi-Fi Enabled
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="tel:+919573766062"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </Link>
            <a href="tel:+919573766062" className="text-blue-500 hover:underline">
              +91 9573766062
            </a>
            <a href="tel:+919066260409" className="text-blue-500 hover:underline">
              +91 9066260409
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-6">Redefining Hostel Living</h3>
            <p className="text-gray-600 mb-8">
              At My Home Luxury Girl&apos;s Hostel, we believe that a hostel should be more than just a place to stay—it should be a space where young women feel empowered, secure, and inspired. Our premium facilities, thoughtful interiors, and warm hospitality make us one of the most sought-after girls&apos; hostels in Hyderabad.
            </p>
            <p className="text-gray-600">
              Our mission is simple: to create a lifestyle that supports your academic or professional journey while giving you a haven of peace and sophistication.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms & Facilities Section */}
      <section id="facilities" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Rooms & Facilities</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Room Features</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🛏️</span>
                  <span>Spacious Rooms with Balconies</span>
                </li>



                <li className="flex items-center gap-3">
                  <span className="text-2xl">🛋️</span>
                  <span>Premium Bedding & High-Quality Mattresses</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🚪</span>
                  <span>Personal Wardrobe with Lock</span>
                </li>


                <li className="flex items-center gap-3">
                  <span className="text-2xl">💧</span>
                  <span>24/7 Hot Water Supply</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🚿</span>
                  <span>Attached Washrooms</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Hostel Amenities</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🛋️</span>
                  <span>Each Floor Equipped with Sofa Sets & Sitting Areas</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📶</span>
                  <span>High-Speed Wi-Fi</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-2xl">🧹</span>
                  <span>Daily Housekeeping</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🍽️</span>
                  <span>Spacious Dining Hall</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🔒</span>
                  <span>24/7 Security and CCTV Surveillance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🎮</span>
                  <span>Indoor Games (Carrom, Chess, Board Games)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🛵</span>
                  <span>2 Wheeler Parking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🍲</span>
                  <span>Homely Food</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🧺</span>
                  <span>Washing Machine</span>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Security Section
      <section id="safety" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Safety & Security</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-gray-600 mb-12">
              We understand how important it is to ensure a secure environment for young women. That&apos;s why our premises are monitored round-the-clock and access is strictly controlled.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Security Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-2xl">👮</span>
                    <span>24/7 Security Guards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-2xl">📹</span>
                    <span>CCTV in All Common Areas</span>
                  </li>

                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Emergency Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-2xl">🚨</span>
                    <span>Emergency Response System</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-2xl">👩</span>
                    <span>Female Warden On-Site</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Location Section */}
      <section id="location" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Location</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Find Us</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Located in the heart of Hyderabad, My Home Luxury Girl&apos;s Hostel is easily accessible from major landmarks and transportation hubs.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📍</span>
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-gray-600">17° 24&apos; 30.6176&quot; N, 78° 29&apos; 39.3194&quot; E, Hyderabad, Telangana</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🚇</span>
                      <div>
                        <p className="font-semibold">Nearest Metro Station</p>
                        <p className="text-gray-600">RTC X Roads Metro - 5 mins walk</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🚌</span>
                      <div>
                        <p className="font-semibold">Bus Stop</p>
                        <p className="text-gray-600">Ashok Nagar Bus Stop - 2 mins walk</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <a
                      href="https://maps.google.com/?q=17.408504,78.494255"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.408504!2d78.494255!3d17.408504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzMwLjYiTiA3OMKwMjknMzkuMyJF!5e0!3m2!1sen!2sin!4v1710835200000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Spaces</h2>
          <div className="flex overflow-x-auto space-x-6 p-4 hide-scroll-bar">
            <div className="flex flex-nowrap">
              <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <Image src="/Imag1.png" alt="Hostel Image 1" width={256} height={256} className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <Image src="/Imag2.png" alt="Hostel Image 2" width={256} height={256} className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <Image src="/Imag3.png" alt="Hostel Image 3" width={256} height={256} className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <Image src="/Imag4.png" alt="Hostel Image 4" width={256} height={256} className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <Image src="/Imag5.png" alt="Hostel Image 5" width={256} height={256} className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
