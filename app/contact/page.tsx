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
           <header className="fixed top-0 left-0 right-0 z-50 bg-[#20565c] shadow-sm">
             <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex items-center justify-between h-16">
                 
                 {/* LEFT: Navigation */}
                 <div className="flex items-center space-x-8">
                   <Link href="/" className="flex items-center space-x-2">
                     
                     <span className="text-white font-bold">Home</span>
                   </Link>
                   <nav className="hidden md:flex space-x-6">
                     <Link href="/blogs" className="text-white hover:text-blue-300 transition-colors flex items-center space-x-1">
                       <MessageSquare className="w-4 h-4" />
                       <span>Blogs</span>
                     </Link>
                     <Link href="/gallery" className="text-white hover:text-blue-300 transition-colors flex items-center space-x-2">
                       <Image className="w-4 h-4" />
                       <span>Gallery</span>
                     </Link>
                     <Link href="/contact" className="text-white hover:text-blue-300 transition-colors flex items-center space-x-2">
                       <Phone className="w-4 h-4" />
                       <span>Contact Us</span>
                     </Link>
                     <Link href="/writeforus" className="text-white hover:text-blue-300 transition-colors flex items-center space-x-2">
                       <Edit className="w-4 h-4" />
                       <span>Write For Us</span>
                     </Link>
                   </nav>
                 </div>
     
                 {/* RIGHT: Language, Notification, Profile */}
                 <div className="flex items-center space-x-6">
                   
                   {/* Language Switcher */}
                   <div className="flex items-center space-x-2 text-white text-sm">
                     <span>Language</span>
                     <label className="flex items-center space-x-1">
                       <input type="radio" name="language" className="accent-white" />
                       <span>हिंदी</span>
                     </label>
                     <label className="flex items-center space-x-1 bg-[#20565c] text-white px-2 py-1 rounded-full font-semibold">
                       <input type="radio" name="language" defaultChecked className="accent-white" />
                       <span>English</span>
                     </label>
                   </div>
     
                   {/* Bell Icon */}
                   <Bell className="text-white text-xl cursor-pointer hover:text-blue-300 transition-colors" />
     
                   {/* User Profile */}
                   <div className="flex items-center space-x-2 text-white">
                     <FaUserCircle className="text-2xl" />
                     <span>Deepali Yadav</span>
                   </div>
                 </div>
     
               </div>
             </div>
           </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Contact Us</span>
        </div>

        
       

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
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
                    
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message*"
                      className="min-h-64 resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#20565c]"
                  >
                   
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="border-0 bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-blue-600 font-medium mb-1">{info.details}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-4">
                  All times are in Indian Standard Time (IST)
                </p>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="border-0 bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-sm text-gray-600">{faq.answer}</p>
                      {index < faqs.length - 1 && <hr className="mt-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}