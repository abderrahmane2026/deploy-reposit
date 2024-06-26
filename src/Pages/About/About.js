// src/AboutUs.js

import React from 'react';
import './About.css';
 import teamPhoto from '../../assetes/picturs/Coworking-rafiki.png'; // example image
 import missionPhoto from '../../assetes/picturs/Business mission-pana.png'; // example image

const About = () => {

  const team = [
    {
        avatar: "https:/https://futterclubs-1.onrender.com/api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        name: "Abderrahmane",
        title: "Full stack engineer",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        linkedin: "javascript:void(0)",
        twitter: "javascript:void(0)",
    },
    {
       avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "Kawther",
        title: "Prodect Manager",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        linkedin: "javascript:void(0)",
        twitter: "javascript:void(0)",
    },
    {
        avatar: "https://randomuser.mehttps://futterclubs-1.onrender.com/api/portraits/women/79.jpg",
        name: "Ferial",
        title: "Services",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        linkedin: "javascript:void(0)",
        twitter: "javascript:void(0)",
    },
   
   
]

  return (
    <div className="about-us">
      <section className="about-us__intro">
        <h1>About Us</h1>
        <p> Future Clubs is a platform dedicated to collecting and organizing sports academies and clubs,
           making the selection process easier for parents and athletes. 
           By providing easy access to information about available services, 
           we aim to save time and effort while offering comprehensive details on accessible sports options.
            Future Clubs starts its journey in Constantine and plans to gradually expand its services to other provinces in Algeria. 
            Our goal is to make sports accessible to everyone by offering services at affordable prices and providing advertising options for sports academies and clubs.</p>
      </section>
      <section className="about-us__content">
        <div className="about-us__image">
          <img src={teamPhoto} alt="Our Team" />
        </div>
        <div className="about-us__text">
          <h2>Our Team</h2>
          <p>We have a passionate and dedicated team working hard to meet your needs.</p>
        </div>
      </section>
      <section className="about-us__content">
        <div className="about-us__text">
          <h2>Our Mission</h2>
          <p>Our mission is to deliver high-quality services and products that bring real value and 
            satisfaction to our users. We are committed to facilitating the discovery and selection 
            of the best sports academies and clubs for parents and athletes by providing a reliable 
            and user-friendly platform. At Future Clubs, we believe every athlete deserves the best
             opportunities to excel, and we work tirelessly to make this possible.
          </p>
        </div>
        <div className="about-us__image">
          <img src={missionPhoto} alt="Our Mission" />
        </div>
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Meet our team
                    </h1>
                    
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-24 h-24 mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                        <p className="text-gray-600 mt-2">{item.desc}</p>
                                        <div className="mt-4 flex justify-center gap-4 text-gray-400">
                                            <a href={item.twitter}>
                                                <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                            <a href={item.linkedin}>
                                                <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

      </section>
    </div>
  );
};

export default About;
