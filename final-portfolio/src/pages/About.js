import Navbar from '../Navbar'
import Footer from '../Footer'
import Bear from '../images/Bear.jpg'
import './Home.css'

export default function About() {
  return (
    <div>
      <Navbar />
      <div id="about-container">
        <img id="bear" src={Bear} />
        <p id="about-me">I'm a software engineer based in New York City dabbling in design. I've always been interested in the intersection between technology and the arts, especially how they can elevate each other to new heights. I think such an intersection should be practical but fun, useful but delightful. I'd love to spread that sense of delight in the things that I create, whether that be UI projects, deployed apps, helpful software, or anything in between!<br/><br/>I received my B.A. degrees in computer science and biology from Brown University. For the former, I studied on the visual computing track. My time at Brown fostered an appreciation for disciplines besides computer science, showing me that different fields can come together in amazing ways. My design work represents a foray into one of these combinations.<br/><br/>When I'm not clacking away at my keyboard, you can find me doodling on scrap paper, gaming on my Nintendo Switch, or reading food reviews with unusual enthusiasm.</p>
      </div>
      <Footer />
    </div>
  )
}
