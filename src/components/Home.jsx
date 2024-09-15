// import from 'react';  
import { Link } from 'react-router-dom';  
import '../styles/Home.css';  

function Home() {  
    return (  
        <div className="home-container">  
            <h1>Fruit.ai</h1>  
            <h2> Be Healthy! </h2>  
            <div className="services-grid">  
                <Link to="/chatbot" className="service-card chat-card">  
                    <h2>Chat</h2>  
                </Link>  
                <Link to="/translator" className="service-card translator-card">  
                    <h2>Translator</h2>  
                </Link>  
                <Link to="/faq" className="service-card faq-card">  
                    <h2>FAQs</h2>  
                </Link>  
                <Link to="/about" className="service-card about-card">  
                    <h2>About</h2>  
                </Link>  
            </div>  
        </div>  
    );  
}  

export default Home;