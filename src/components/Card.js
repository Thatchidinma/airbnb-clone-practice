//import card1 from "./images/image-12.png";
import star from "../images/Star.png";

export function Card(props) {
  return (
    <div className='card' >
      {props.openSpots === 0 && <div className="card-badge bold">SOLD OUT</div>}
      <img src={props.coverImg}  alt='' className='card-img'/>
      <div className='card-review'>
        <img src={star} alt='' className='card-star'/>
        <span>{props.stats.rating}</span>
        <span>({props.stats.reviewCount}) • </span>
        <span>{props.location}</span>
      </div>
      <p className=''>{props.title}</p>
      <p><span className='bold'>From ${props.price}</span> / Person</p>
    </div>
  );
}
