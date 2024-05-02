import React, { useEffect, useState, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetter';
import Loader from 'react-loaders';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import '../ContactPage/contact.css';


const ContactPage = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();

    const doSomething = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    };

    useEffect(() => {
        doSomething();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_85s05pj', 'template_vwm670o', form.current, 'YhB77Pd_tmdaz0m6f')
            .then(() => {
                toast.success('Message successfully sent!'); // Show success toast
                // Optionally, reset the form fields here if needed
                setTimeout(() => {
                    window.location.href = '/'; // Redirect to home page
                }, 3000);
            })
            .catch(() => {
                toast.error('Failed to send the message, please try again'); // Show error toast
            });
    };


    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Let's connect and get to know each other better! Feel free to reach out using the contact details below. I'm always excited to meet new people and have meaningful conversations.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Shivam Tiwari,
                    <br />
                    India,
                    <br />
                    Indore Madhya Pradesh <br />
                    Dr Ambedkar Nagar Mhow <br />
                    <br />
                    <span>shivamnit987@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[22.6000, 75.7667]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[22.6000, 75.7667]}>
                            <Popup>Shivam lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="square-spin" />

            {/* ToastContainer for toast notifications */}
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastStyle={{
                    background: '#333',
                    color: '#fff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderRadius: '8px',
                    border: '1px solid #444',
                }}
                bodyClassName="toast-body"
                className="toast-container"
            />
        </>
    );
};

export default ContactPage;
