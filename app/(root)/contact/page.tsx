'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHome } from 'react-icons/io';
import { IoImages } from 'react-icons/io5';
import { FaCommentAlt, FaPhoneAlt, FaPen } from 'react-icons/fa';
import { Bell } from 'lucide-react';
import { Image } from 'lucide-react';
import { Edit } from 'lucide-react';
import { FaEnvelope, FaPhone, FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';



export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email Us",
      details: "support@letsdiskuss.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Call Us",
      details: "+91 98765 43210",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Visit Us",
      details: "New Delhi, India",
      description: "Come say hello at our office"
    }
  ];

  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click on the 'Sign Up' button and fill in your details. You'll receive a confirmation email to activate your account."
    },
    {
      question: "How can I reset my password?",
      answer: "Go to the login page and click 'Forgot Password'. Enter your email and we'll send you reset instructions."
    },
    {
      question: "Can I delete my account?",
      answer: "Yes, you can delete your account from your profile settings. Note that this action is irreversible."
    },
    {
      question: "How do I report inappropriate content?",
      answer: "Use the report button on any post or comment, or contact our moderation team directly."
    }
  ];

  return (
   
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
     {/* Header - Fixed */}
           

      <div className=" max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
     
        <div  className="min-h-screen bg-gray-50 py-12">
          {/* Contact Form */}
          <div className="max-w-7xl mx-auto px-42">
            <Card className="border-0 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                
                  <span>Contact Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                
        
                <form onSubmit={handleSubmit} className="space-y-4">
                
                    <div>
                      
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name*"
                        required
                      />
                    </div>
                    <div>
                     
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email*"
                        required
                      />
                    </div>
                  
                   <div>
                     
                      <Input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile No.*"
                        required
                      />
                    </div>

                  <div>
                    
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject*"
                      required
                    />
                  </div>

                  <div>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>

                  <Button 
                    type="submit" 
                    className="w-full  bg-[#20565c] text-white py-3 px-6 rounded-md font-semibold transition-colors"
                  >
                   
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
          <div className="bg-white rounded-lg shadow-md p-8 ">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Write To Us</h2>

            <div className="space-y-8">
              {/* Advertise Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Advertise with Us</h3>
                <p className="text-gray-600 mb-2">Want to advertise with us?</p>
                <p className="text-gray-600 mb-2">Or find out how else we can work with your brand?</p>
                <p className="text-gray-600">
                  Let's talk! Connect at{' '}
                  <a href="mailto:submission@letsdiskuss.com" className="text-[#0000EE] hover:underline">
                    submission@letsdiskuss.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+918800259785" className="text-[#0000EE] hover:underline">
                    +91 88002 59785
                  </a>
                </p>
              </div>

              {/* Partnership Section */}
             
                <h3 className="text-xl font-semibold text-gray-800 mb-2">To Become our Blogging Partner</h3>
                <p className="text-gray-600">
                  Interested in partnering with us? Write to{' '}
                  <a href="mailto:contact@letsdiskuss.com" className="text-[#0000EE] hover:underline">
                    contact@letsdiskuss.com
                  </a>
                </p>
              </div>

             

              {/* Social Links */}
              <div>
                <h3 className="text-3xl  text-gray-500 mb-4">Social Links</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com/Letsdiskuss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-400 hover:text-blue-600 transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.facebook.com/Letsdiskuss-315820455578889/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/letsdiskuss/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-pink-600 hover:text-pink-800 transition-colors"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC8P36SywfXz8FI0ioSzJuew/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-red-600 hover:text-red-800 transition-colors"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/lets-diskuss/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}