const Pet = (props) => {
  const { name, anmal, breed, images, location, id } = props;

  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;
