import './pages/Home.css'
import WorkCard from './WorkCard'

export default function WorkCardList(props) {
  const data = props.data;

  return (
    <div>
      <h2 id="my-work">My Work</h2>
      <div id="work-cards">
        {data.map(work =>
          <WorkCard work={work} />
        )}
      </div>
    </div>
  );
}
