import StarRatings from "react-star-ratings";

const Rating = (props: { rating: number }) => {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <StarRatings
        name="rate1"
        numberOfStars={5}
        rating={props.rating}
        starRatedColor="black"
        starDimension="20px"
        starSpacing="2px"
      />
    </div>
  );
};

export default Rating;
