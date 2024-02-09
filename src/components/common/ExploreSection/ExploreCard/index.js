import React from 'react'
import './exploreCard.css'

const ExploreCard = ({ restaurant }) => {
  const name = restaurant?.info?.name ?? "";
  const coverImg = restaurant?.info?.image?.url;
  const cfo = restaurant?.info?.cfo?.text;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine?.map((item) => item.name).slice(0, 3);
  const bottomContainers = restaurant?.bottomContainers;
  const discount = offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null;


  return (
    <div className='explore-card curPoint'>
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className='explore-card-image' />
        {/* <div className="delivery-time">
          {deliveryTime}
        </div> */}
        {discount && <div className='discount absoluteCenter'><p>{discount}</p></div>}
      </div>

      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && <div className="rating-wrapper absoluteCenter">
          <div className="res-rating absoluteCenter ">
            {rating} <i className="absoluteCenter" color="#FFFFFF"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="0.7rem" height="0.7rem" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fauQLv"><title>star-fill</title><path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path></svg></i>
          </div>
        </div>}
      </div>

      <div className='res-row cuisine-cfo-wrapper'>
        {cuisines.length &&
          <div className='res-cuisine'>
            {cuisines.map((item, i) => {
              return (
                <span className='res-cuisine-tag'>{item}{i !== cuisines.length - 1 && ", "}</span>
              )
            })}
          </div>}

        <div className="res-cfo">
          {cfo}
        </div>
      </div>

      <div className="approximate-time-wrapper res-row">
        <div className="left-empty-div"></div>
        {deliveryTime && 
        <div className="right-approximate-time">{deliveryTime}</div>
        }
      </div>

      {bottomContainers.length > 0 &&
      <>
        <div className="card-separator"></div>
        <div className='res-row'>
          <div className="explore-card-bottom">
            <img src={bottomContainers[0]?.image?.url} alt={bottomContainers[0]?.text} style={{ height: "18px" }} />
            <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
          </div>
        </div>
      </>
      }
    </div>
  )
}

export default ExploreCard
