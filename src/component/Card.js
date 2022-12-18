import { AppData } from "../Data/AppData";

const Card = () => {
  return AppData.map((data) => (
    <div className="card">
      <h3> {data.cause}</h3>
      <p> Panel type : {data.paneltype}</p>
      <p> Report within : {data.reportwithin}</p>
      <p style={{ background: "yellow" }}>{data.advise}</p> <br />
      Name & no. of parameters: 12 Parameters
      <div>
        <ul>
          {data.parameters.map((parameter) => (
            <li className="list">{parameter}</li>
          ))}
        </ul>
        <h3>
          Rs.<b> {data.price}</b>
        </h3>
      </div>
      <button>Book Now</button>
    </div>
  ));
};

export default Card;
