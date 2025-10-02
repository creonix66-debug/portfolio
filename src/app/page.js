"use client"

import React, { useState , useEffect } from 'react';
import { Download, Phone, Mail,User, FileText, Briefcase, PenTool, Instagram, Linkedin, Twitter, ArrowRight,ArrowUpCircle , Facebook,BriefcaseBusiness, MessageCircle, ArrowUp, Figma, Brush, Code2, Layout, Palette  } from 'lucide-react';
import Image from 'next/image';
import { content } from '../../constants/constant';
import { experiences } from '../../constants/constant';
import WorkSection from '@/components/work';
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
    const [showScroll, setShowScroll] = useState(false);
   const [scrolling, setScrolling] = useState(false);
    const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });


  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
        setScrolling(true);

        clearTimeout(timeout);
        timeout = setTimeout(() => setScrolling(false), 500); // stop "active" after 0.5s
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send to API or email service
    console.log("Form submitted:", form);
  };
  
  const services = [
    {
      icon: '</>', 
      title: 'UI/UX Design',
      description: 'Each one showcases my approach and dedication to detail, creativity',
      color: 'bg-pink-500'
    },
    {
      icon: '{ }',
      title: 'Web Development', 
      description: 'Business consulting consult us to provide expert advice businesses',
      color: 'bg-blue-500'
    },
    {
      icon: '📊',
      title: 'Business Solutions',
      description: 'Each one showcases my approach and dedication to detail, creativity',
      color: 'bg-red-500'
    },
    {
      icon: '💼',
      title: 'Profit Partners',
      description: 'Business consulting consult us to provide expert advice businesses',
      color: 'bg-green-500'
    }
  ];

  const stats = [
    { number: '20 K+', label: 'Our Project Complete' },
    { number: '10 K+', label: 'Our Natural Products' },
    { number: '200 +', label: 'Clients Reviews' },
    { number: '1,000 +', label: 'our Satisfied Clientd' }
  ];

const tabs = [
  { id: 'about', label: 'About', icon: User },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'work', label: 'Work', icon: Briefcase },
  { id: 'blog', label: 'Blog', icon: PenTool },
  { id: 'contact', label: 'Contact', icon: Mail }
];

const skills = {
  design: [
    { name: "Photoshop", icon: Brush },
    { name: "Figma", icon: Figma },
    { name: "Adobe XD", icon: Layout },
    { name: "Illustrator", icon: Palette },
  ],
  development: [
    { name: "HTML", icon: Code2 },
    { name: "CSS", icon: PenTool },
    { name: "JavaScript", icon: Code2 },
    { name: "React", icon: Layout },
  ],
};


const education = [
  {
  title: content?.education.title1,
  timeline: content?.education.timeline1,
  description: content?.education.description1
  }
]

const experience = [
  {
  title: content?.experience.title1,
  logo: content?.experience?.logo1,
  company: content?.experience?.company1,
  timeline: content?.experience.timeline1,
  description: content?.experience?.desc1
  },
  {
  title: content?.experience?.title2,
  logo: content?.experience?.logo1,
  company: content?.experience?.company1,
  timeline: content?.experience?.timeline2,
  description: content?.experience?.des2
  },
  {
  title: content?.experience?.title3,
  logo: content?.experience?.logo1,
  company: content?.experience?.company1,
  timeline: content?.experience?.timeline3,
  description: content?.experience?.desc3
  },

]


const experience2 = [
  {
  title: content?.experience?.title4,
  logo: content?.experience?.logo2,
  company: content?.experience?.company2,
  timeline: content?.experience?.timeline3,
  description: content?.experience?.desc4
  }
]

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Banner Section */}
      {/* Hero Banner Section */}
<div className="relative h-[450px] bg-black overflow-hidden flex items-center">
  {/* Background Desk Image */}
  <div className="absolute inset-0">
    <Image
      src="/bg-image.jpg" 
      alt="workspace desk"
      layout="fill"
      objectFit="cover"
      className="opacity-90"
    />
  </div>

  {/* Overlay Stars (optional) */}
  <div className="absolute inset-0">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute text-white animate-pulse opacity-60"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          fontSize: '20px',
          animation: `floatStar ${2 + Math.random() * 2}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`
        }}
      >
        ★
      </div>
    ))}
  </div>

 </div> 

          {/* Floating Action Buttons */}
<div className="fixed right-4 top-160 -translate-y-1/2 z-50 flex flex-col items-end gap-3">
  {/* Hire Me Label with Icon */}
  <div className="flex items-center gap-2 bg-gray-800 text-white text-xs py-2 px-3 rounded-full shadow-lg">
    <Briefcase size={14} className="text-pink-400" />
    <span className="font-medium">Hire Me</span>
  </div>

  {/* Chat Button */}
  <a    href="https://wa.me/923054776922?text=Hi Nazim!%20I%20just%20visited%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you.%20Can%20we%20discuss%20a%20project%3F" className="bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center">
    <MessageCircle size={18} />
  </a>
        {showScroll && (
        <button
          onClick={scrollToTop}
          className="bg-pink-500 text-white p-3 rounded-full shadow-md hover:bg-pink-600 transition-all hover:scale-110 flex items-center justify-center"
        >
          {scrolling ? <ArrowUpCircle size={20} /> : <ArrowUp size={20} />}
        </button>
      )}
</div>


      <div className="max-w-7xl mx-auto px-4 -mt-52 relative z-10">
      {/* <div className="max-w-7xl mx-auto px-4 -mt-52 relative z-10"> */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar - Profile Card */}
          <div className="w-full lg:w-72 lg:sticky lg:top-6 lg:self-start flex-shrink-0">
          {/* <div className="lg:w-72 flex-shrink-0 ml-3 lg:sticky lg:top-6"> */}
            <div className="bg-white rounded-3xl p-4  text-center shadow-2xl border border-gray-100">
              {/* Profile Image */}
  <Image src="/banner-user.webp" width={400} height={300} alt="user-profile" className='rounded-md' />
              <div className="relative mb-6">
              


              </div>
              
              {/* Name & Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{content?.profile?.Title}</h1>
              <p className="text-gray-600 mb-8 font-bold">{content?.profile?.role}</p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8 text-gray-700">
                <div className="flex items-center gap-3 text-lg">
                  <Phone size={16} className="text-gray-500" />
                  <span>Phone: {content?.profile?.Phone}</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <Mail size={16} className="text-gray-500" />
                  <span>Email: {content?.profile?.email}</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center gap-3 mb-8">
                {[
                  { Icon: Instagram, color: 'hover:bg-pink-500', link: "#" },
                  { Icon: Linkedin, color: 'hover:bg-blue-600', link: "https://www.linkedin.com/in/nazim-alii/" },
                  { Icon: Twitter, color: 'hover:bg-blue-400', link: "#" },
                  { Icon: Facebook, color: 'hover:bg-blue-700', link: "#" }
                ].map(({ Icon, color, link }, index) => (
                  <a 
                    href={link}
                    key={index} 
                    className={`w-10 h-10 bg-gray-300  text-black ${color} rounded-lg flex items-center justify-center transition-all hover:text-white hover:scale-110`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              
              {/* Download CV Button */}
              <a href= "/static/dumps.docx" download className="w-full bg-[#057CFB] text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all hover:scale-105 flex items-center justify-center gap-2">
                <Download size={20} />
                Download My CV
              </a>
            </div>
          </div>
          
          {/* Main Content */}
        
                   <div className="flex-1">
            {/* Tab Navigation */}
                {/* Tab Navigation */}
<div className="bg-white rounded-2xl p-2 mb-6 mt-60 shadow-lg border border-gray-400 sticky top-6 z-40">
  <div className="grid grid-cols-5 gap-3">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`px-3 py-3 m-6 rounded-xl  font-medium transition-all text-center ${
          activeTab === tab.id
            ? 'bg-[#057CFB] text-white shadow-lg'
            : 'text-gray-600  hover:text-gray-900 hover:bg-gray-50'
        }`}
      >
        <div className="text-lg ">My</div>
        <div className="font-semibold">{tab.label}</div>
      </button>
    ))}
  </div>
</div>

            {/* Tab Content */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              
              {activeTab === 'about' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      Creative Designer & Developer
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      I am a passionate designer and developer with years of experience creating beautiful and functional digital experiences. I specialize in UI/UX design and modern web development.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">What I Do</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map((service, index) => (
                        <div key={index} className="group">
                          <div className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all">
                            <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center text-white text-lg font-bold mb-4`}>
                              {service.icon}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'resume' && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">My Resume</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Design Skills</h3>
                      <div className="space-y-3">
                        {skills.design.map((skill, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                            <skill.icon size={20} className="text-pink-500" />
                            <span className="text-gray-700 font-medium">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Development Skills</h3>
                      <div className="space-y-3">
                        {skills.development.map((skill, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                            <skill.icon size={20} className="text-pink-500" />
                            <span className="text-gray-700 font-medium">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                        {/* EXPERIENCE */}
<div className="mt-12">
  <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>

  {/* 2-up grid, min 360px per card for readability */}
  <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(360px,1fr))]">
    {experiences.map((exp, i) => (
      <article
        key={i}
        className="
          group rounded-3xl border border-gray-200 bg-gray-50 p-6
          shadow-sm hover:shadow-md transition-all
          [background-image:linear-gradient(#057CFB,#057CFB)]
          bg-[length:100%_3px] bg-no-repeat
          bg-[position:0_100%] hover:bg-[position:0_0]
          duration-300
        "
      >
        <h4 className="text-lg font-semibold text-gray-900">
          {exp.title}
        </h4>

        {/* Years / timeframe */}
        <p className="mt-1 font-semibold text-gray-900">
          {exp.timeframe}
        </p>

        {/* Company */}
        <p className="mt-1 text-base font-semibold text-[#057CFB]">
          {exp.company}
        </p>

        {/* Employment type (optional) */}
        {exp.employment && (
          <p className="text-sm text-gray-500">{exp.employment}</p>
        )}

        {/* Location */}
        <p className="mt-3 text-sm text-gray-500">
          {exp.location}
        </p>

        {/* Description / bullets */}
        <div className="mt-4 space-y-2 text-gray-700">
          {exp.bullets?.slice(0, 4).map((b, idx) => (
            <p key={idx} className="text-sm leading-relaxed">• {b}</p>
          ))}
        </div>
      </article>
    ))}
  </div>
</div>









                  </div>
                </div>
              )}

         {activeTab === 'work' && <WorkSection />}


              {activeTab === 'blog' && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">My Blog</h2>
                  <div className="space-y-6">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Blog Post {item}</h4>
                        <p className="text-gray-600 mb-3">This is a brief description of the blog post content...</p>
                        <div className="text-sm text-gray-500">January {item}, 2024</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">My Contact</h2>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Get In Touch</h3>
                  <p className="text-gray-600 mb-8">
                    Let's discuss your project and see how we can work together to create something amazing.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4 text-black">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-black">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      className=" text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    ></textarea>

                    <button
                      type="submit"
                      className="bg-[#057CFB] text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-pink-500/30 transition-all hover:scale-105"
                    >
                      Send Message <ArrowRight size={20} />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
        
   
        <footer className="text-center mt-16 pb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
            
                    <Image src="/banner-user.webp" width="40" height="35" className='rounded-full'/>
            </div>
            <span className="text-gray-900 font-semibold text-xl">{content.profile.Title}</span>
          </div>
          <p className="text-gray-500">
            ©2025. All rights reserved by {content.profile.copyrights}.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;