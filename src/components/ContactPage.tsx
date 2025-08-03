import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const { theme } = useTheme();
  return (
    <div className="page-layout">
      <h2 className={theme.font}>Contact Us</h2>
      <p className={theme.font}>
        Feel free to reach out to us with any questions or feedback.
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="name" className={theme.font}>Name</label>
          <input type="text" id="name" className={`form-input`} style={{backgroundColor: theme.name === "Minimalist Light" ? '#fff' : '#374151', color: theme.name === "Minimalist Light" ? '#000' : '#e5e7eb' }} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className={theme.font}>Email</label>
          <input type="email" id="email" className={`form-input`} style={{backgroundColor: theme.name === "Minimalist Light" ? '#fff' : '#374151', color: theme.name === "Minimalist Light" ? '#000' : '#e5e7eb' }} />
        </div>
        <div className="form-group">
          <label htmlFor="message" className={theme.font}>Message</label>
          <textarea id="message" rows={4} className={`form-input`} style={{backgroundColor: theme.name === "Minimalist Light" ? '#fff' : '#374151', color: theme.name === "Minimalist Light" ? '#000' : '#e5e7eb' }}></textarea>
        </div>
        <Link to="/">
          Send Message
        </Link>
      </form>
    </div>
  );
};

export default ContactPage