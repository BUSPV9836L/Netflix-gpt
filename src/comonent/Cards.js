
const Cards = (props) => {
  const handleCardClick =()=>{
     props.getBackdropPath(props.backdrop_path)
  }
  if(!props.backdrop_path)return;
  return (
    <>
      <img onClick={handleCardClick}
        className="w-56 px-1"
        src={"https://image.tmdb.org/t/p/w500/" + props.backdrop_path}
        alt="movie"
      ></img>
    </>
  );
};

export default Cards;
