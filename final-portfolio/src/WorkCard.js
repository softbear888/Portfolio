import './pages/Home.css';
import { useNavigate, Link } from "react-router-dom";

export default function WorkCard(props) {
  const path = props.work.path;

  return (
    <div className="work-card">
        <Link className="link" to={path}>
          <img src={props.work.src}/>
          <h3 className="work-heading">{props.work.name}</h3>
          <p>{props.work.description}</p>
        </Link>
    </div>
  );
}
