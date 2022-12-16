import './pages/Home.css'
import { SocialIcon } from 'react-social-icons';

export default function Footer(props) {
  const bgColor = "#eb98a0"
  const fgColor = "black"

  return (
    <div id="footer">
      <div id="stay-in-touch"><h3>Let's stay in touch!</h3></div>
      <div className="btn-container"><button className="btn">Send an email</button></div>
      <h4 id="or">or</h4>
      <div id="socials">
        <SocialIcon className="symbol" bgColor={bgColor} fgColor={fgColor} url="https://www.instagram.com/"/>
        <SocialIcon className="symbol" bgColor={bgColor} fgColor={fgColor} url="https://www.linkedin.com/"/>
        <SocialIcon className="symbol" bgColor={bgColor} fgColor={fgColor} url="https://twitter.com/" />
      </div>
    </div>
  );
}
