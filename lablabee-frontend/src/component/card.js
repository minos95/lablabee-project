const Card = ({ lab }) => {
  return (
    <div className="card">
      <h3>{lab.name}</h3>
      <p>{lab.description}</p>
    </div>
  );
};

export default Card;
