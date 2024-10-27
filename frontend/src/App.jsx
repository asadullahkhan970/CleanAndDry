
import React, { useState, useRef } from "react";
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import { initializeApp } from "firebase/app"; 
import { getDatabase, ref, set } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyBrkbZV5H1TYlUXNjhu43pCB16IcpiYnTk",
  authDomain: "cleananddry-7a711.firebaseapp.com",
  databaseURL: "https://cleananddry-7a711-default-rtdb.firebaseio.com",
  projectId: "cleananddry-7a711",
  storageBucket: "cleananddry-7a711.appspot.com",
  messagingSenderId: "623102697414",
  appId: "1:623102697414:web:e6b2d4c49eabf8b4865cc7",
  measurementId: "G-R1CJVTP59M"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownMenuRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, message } = contactData;

    const phoneRegex = /^[0-9]{10}$/;

    if (!name || !phone || !message) {
      toast.error("Please fill out all fields.");
      return; 
    } else if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return; 
    }

    try {
      await set(ref(database, 'contacts/' + Date.now()), { 
        name,
        phone,
        message,
      });

      toast.success("Data sent successfully");
      setContactData({
        name: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send data. Please try again."); 
    }
  };


    
   

  

  return (
    <>
   <header className="header">
        <div className="navbar">
          <div className="logo">
            <img
              className="logo-img"
              src="/clean-and-dry1.jpeg.jpg"
              alt="Logo"
            />
          </div>
          <ul className="links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="toggle-btn" onClick={toggleDropdown}>
            <i className="fas fa-bars"></i>
          </div>
          <ul
            className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}
            ref={dropdownMenuRef}
            onClick={closeDropdown}
          >
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>


    <div className="main">
      <div className="margin-div"></div>
      <div className="content">
        <h3>~Best Dry Cleaning Services~</h3>
      </div>
      <div className="margin-div" id="services"></div>
      <div className="procedure-container">
        <div className="titles">
          <h2>Procedure</h2>
        </div>
        <div className="card">
          <img
            src="/delivery-man.webp"
            alt=""
            className="management-image"
          />
          <div className="card-content">
            <h3>Step 1</h3>
            <p>
              <li>
                Pick-up and delivery will be our top priority. As per our
                discussion, we will try to honor the scheduled timings that you
                have specified for the pick-up and delivery and it will be done
                twice in a week.
              </li>
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="/delivery-check-paper.jpg"
            alt=""
            className="management-image"
          />
          <div className="card-content">
            <h3>Step 2</h3>
            <p>
              <li>
                Executive will verify the cloths and issues a unique code or
                number or an ID to each individual.
              </li>
              <li>
                This unique code which is assigned to the customer is permanent
                and will be easy to track.
              </li>
              <li>
                NOTE: This unique code is common for all the cloths of that
                particular customer.
              </li>
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="/delivery-bag.png"
            alt=""
            className="management-image"
          />
          <div className="card-content">
            <h3>Step 3</h3>
            <p>
              <li>
                After assigning the code, the material will be placed in a bag
                and this bag is also labeled with the same unique code given
                belonging to the customer.
              </li>
              <li>
                * Individual bags will be maintained for each individual
                customer
              </li>
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="/delivery-guy-receiver.jpeg.jpg"
            alt=""
            className="management-image"
          />
          <div className="card-content">
            <h3>Step 4</h3>
            <p>
              <li>
                Executive will receive the bag with material for washing and
                dewrinkling from the customer after counting and verification as
                per the unique code assigned.
              </li>
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="/hangers.jpeg.jpg"
            alt=""
            className="management-image"
          />
          <div className="card-content">
            <h3>Step 5</h3>
            <p>
              <li>
                Once the executive reaches to our hud, he will decode the
                material as per the unique ID of the customer.
              </li>
              <li>
                He will verify again for any valuables placed inside the
                material and make it ready for a wash.
              </li>
              <li>
                NOTE: Washing is also as per the unique code given and it will
                not be mixed with other codes.
              </li>
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="/laundry.jpeg.jpg"
            alt=""
            className="management-image"
          />
          <div className="card-content">
            <h3>Step 6</h3>
            <p>
              <li>Washing is done with proper precaution and care.</li>
              <li>
                * Washing of material is also as per the individual unique
                codes.
              </li>
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="/iron.jpg"
            alt=""
            className="management-image"
          />
          <div className="card-content">
            <h3>Step 7</h3>
            <p>
              <li>
                After washing, these material will be sent for dewrinkling or
                pressing, as per the individuals unique code.
              </li>
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="/delivery-bag.png"
            alt=""
            className="management-image"
          />
          <div className="card-content">
            <h3>Step 8</h3>
            <p>
              <li>
                Once the material is dewrinkled or pressed, it will be placed in
                the same bags which were assigned the same unique code.
              </li>
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="/delivery-truck.jpg"
            alt=""
            className="management-image"
          />
          <div className="card-content">
            <h3>Step 9</h3>
            <p>
              <li>
                Finally, as per our commitment, the material will be delivered
                and will be handed over to the customer.
              </li>
              <li>* As per the unique code.</li>
            </p>
          </div>
        </div>
      </div>
      <div className="margin-div" id="about"></div>
      <div className="about-container">
        <div className="titles">
          <h2>About</h2>
        </div>
        <div className="about-box">
          <h3 className="about-header">About us</h3>
          <p>
            Welcome to Clean &amp; Dry, where we bring quality, convenience, and
            care to your doorstep with exceptional dry cleaning services.
            Whether it's delicate fabrics, business attire, or everyday wear,
            our expert team uses the latest eco-friendly techniques to ensure
            your items come back looking and feeling their best. With our easy
            online booking, you can schedule pickups and deliveries at times
            that work for you, saving you time and hassle. We treat every item
            with attention to detail, handling tough stains, delicate materials,
            and special requests with precision and care. Trust us to make your
            wardrobe look pristine and keep your items in top shape. Choose lean
            &amp; Dry for dry cleaning you can depend on, every time.
          </p>
        </div>
        <div className="about-box">
          <h3 className="about-header">Terms And Conditions</h3>
          <ol>
            <li>
              Not responsible for the speeding of the colour or shrinkage of
              material and does not guarantee 100% stain removal.
            </li>
            <li>
              Cannot be held responsible for breaking buttons, hooks, beads,
              trimming or threads-outs.
            </li>
            <li>
              Not be liable for any delays, losses or damages arising out of
              unforeseen circumstances or out of control.
            </li>
            <li>Any material exchange must be notified within 24 hours.</li>
            <li>
              customers are informed to measure the fabric at the time of
              delivery, any deficiency at the time of delivery should be
              reported.
            </li>
            <li>
              customers are informed to inspect their material before delivery
              for any postnatal damage.
            </li>
          </ol>
        </div>
      </div>
      <div className="margin-div" id="location"></div>
      <div className="location-page">
        <div className="titles">
          <h2>Location</h2>
        </div>
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30443.191613276485!2d78.3635217793352!3d17.48845898859954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9226c6276feb%3A0x4dc887d1d8cf70a2!2sHyderabad%2C%20Telangana%20500085!5e0!3m2!1sen!2sin!4v1729839734195!5m2!1sen!2sin"
           style={{ marginRight: '10px' }}
            height="60%"
            width="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>1234 Street Name, City, Country</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+1234567890</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>email@example.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="margin-div" id="contact"></div>
        <div className="contact-container">
          <h1 className="contact-heading">Contact Us</h1>
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name" className="contact-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-input"
              placeholder="Your full name"
              required
              value={contactData.name}
              onChange={handleChange}
            />

            <label htmlFor="phone" className="contact-label">Mobile Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="contact-input"
              placeholder="Your phone number"
              required
              value={contactData.phone}
              onChange={handleChange}
            />

            <label htmlFor="message" className="contact-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="contact-input"
              placeholder="Your message"
              required
              value={contactData.message}
              onChange={handleChange}
            />

            <button type="submit" className="contact-btn" onClick={handleSubmit}>Send Message</button>
            <Toaster position="top-right" reverseOrder={false} />
          </form>
        </div>
      </div>

    <footer>
      <div className="about-end-div">
        <h4>
          Thank you for Your Trust on us.....!! For <span>Clean & Dry</span>
        </h4>
      </div>
      <p>&copy; Clean and Dry</p>
    </footer>

    </>
  );
}


export default App;