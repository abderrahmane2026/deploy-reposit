import './service.css';
import { FaPaperPlane, FaMapMarkerAlt, FaHeadset, FaBullhorn, FaArrowRight } from 'react-icons/fa';

function Servicesection() {
  return (
    <section className='service-section2'>
        <div className='service-section-titel'>
            <h1>
                <span>Our</span> Service
            </h1>  
        </div>
        <div className='service-container'>
            {/* card1 */}
            <div className='service-card'>
                <div className='service-icon'>
                  <FaPaperPlane />
                </div>
                <h3 className='service-titel'>
                    Find clubs
                </h3>
                <p>Discover clubs near you and connect with like-minded individuals.
                </p>
                <button><span>More</span> <FaArrowRight /></button>
            </div>
            {/* card2 */}
            <div className='service-card'>
                <div className='service-icon'>
                 <FaMapMarkerAlt/>
                </div>
                <h3 className='service-titel'>
                    Get the best trainer
                </h3>
                <p>Find and connect with top trainers in your area.
                </p>
                <button><span>More</span><FaArrowRight /></button>
            </div>
            {/* card3 */}
            <div className='service-card'>
                <div className='service-icon'>
                 <FaHeadset />
                </div>
                <h3 className='service-titel'>
                    Advertise for your club
                </h3>
                <p>Promote your club and attract new members.
                </p>
                <button><span>More</span> <FaArrowRight /></button>
            </div>
            {/* card4 */}
            <div className='service-card'>
                <div className='service-icon'>
                 <FaBullhorn />
                </div>
                <h3 className='service-titel'>
                    Customers Service
                </h3>
                <p>Get support and assistance from our customer service team.
                </p>
                <button><span>More</span> <FaArrowRight /></button>
            </div>
           
        </div>
    </section>
  );
}

export default Servicesection;
