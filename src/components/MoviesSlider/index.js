import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {items} = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <>
      <Slider {...settings}>
        {items.map(each => (
          <MovieItem key={each.id} details={each} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
