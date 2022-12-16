import './pages/Home.css'
import Sparkle from './images/Sparkle.png'

export default function Welcome(props) {
  return (
    <div className="welcome-body">
      <img className="sparkle" id="sparkle-left" src={Sparkle} />
      <div id="hi"><h1>Hi, I'm softbear888!</h1></div>
      <div id="about"><p>I'm a software engineer with an interest in UI/UX design and visual computing. I'm interested in presenting information to users in fun, playful, and intuitive ways! I believe design should be efficient, but also spark joy for those who engage with it.</p></div>
      <img className="sparkle" id="sparkle-right" src={Sparkle} />
    </div>
  );
}
