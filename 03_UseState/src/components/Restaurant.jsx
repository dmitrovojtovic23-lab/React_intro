export default function Restaurant({ name, address, rating, cuisine, image }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{address}</p>
      <p>Rating: {rating}</p>
      <p>Cuisine: {cuisine}</p>
      <img src={image} alt={name} width="300" />
    </div>
  );
}