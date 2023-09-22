
const Cards = (props) => {
  if(!props.backdrop_path)return;
  return (
    <>
      <img
        className="w-56 px-1"
        src={"https://image.tmdb.org/t/p/w500/" + props.backdrop_path}
        alt="movie"
      ></img>
    </>
  );
};

export default Cards;
