
const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
