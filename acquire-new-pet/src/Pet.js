const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;
  let defaultImg = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    defaultImg = images[0];
  }

  return (
    <a href={`/details/${id}`}>
      <div>
        <img src={defaultImg} alt={name} />
      </div>
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
