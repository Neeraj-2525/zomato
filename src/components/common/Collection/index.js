import React from 'react'
import './collection.css'
import Slider from 'react-slick'
import NextArrow from '../carousel/nextArrow'
import PrevArrow from '../carousel/PrevArrow';

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const Collection = ({ list }) => {
  return (
    <div className='collection-wrapper'>
      <div className="maxWidth collection curPoint">
        <div className='collection-title'>Collections</div>
        <div className="collection-subtitle-row">
          <div className='collection-subtitle-text'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</div>
          <div className="collection-location">
            <div >All collections in Delhi NCR</div>
            <i class="absoluteCenter" color="#FF7E8B" size="12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="12" height="12" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 ezrcri"><title>right-triangle</title><path d="M5 0.42l10 10-10 10v-20z"></path></svg>
            </i>
          </div>
        </div>


        <Slider {...settings}>
          {list.map((item) => (
            <div className='collection-cover'>
              <img className='collection-image' src={item.cover} alt={item.title} />
              <div className="gradient-bg"></div>
              <div className='collection-card-title'>{item.title}</div>
              <div className="collection-card-subtitle">
                <div>{item.places}</div>
                <i class="absoluteCenter" color="#FFFFFF" size="12">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="12" height="12" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 ezrcri"><title>right-triangle</title><path d="M5 0.42l10 10-10 10v-20z"></path></svg>
                </i>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Collection
