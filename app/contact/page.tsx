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
           <header className="fixed top-0 left-0 right-0 z-50 bg-green-950 shadow-sm">
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
                     <label className="flex items-center space-x-1 bg-green-500 text-white px-2 py-1 rounded-full font-semibold">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Contact Us</span>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-blue-600">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <MessageSquare className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-blue-600" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-32 resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
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