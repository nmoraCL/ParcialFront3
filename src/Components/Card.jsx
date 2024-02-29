const Card = ({ firstName, lastName, favVideojuego }) => {
  return (
    <div
      style={{ border: "1px solid black", padding: "1rem", marginTop: "1rem" }}
    >
      <h3>
        Hola {firstName} {lastName}
      </h3>
      <p>Tu Videojuego favorito es: {favVideojuego}</p>
    </div>
  );
};

export default Card;
