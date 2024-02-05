import React from 'react'
import './topBrands.css'
import NextArrow from '../../common/carousel/nextArrow'
import PrevArrow from '../../common/carousel/PrevArrow'
import Slider from 'react-slick'


const brandList = [
    {
        id:1,
        title: "McDonald's",
        time:"22 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp"
    },
    {
        id:2,
        title: "Domino's Pizza",
        time:"28 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp"
    },
    {
        id:3,
        title: "Burger King",
        time:"37 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp"
    },
    {
        id:4,
        title: "KFC",
        time:"32 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp"
    },
    {
        id:5,
        title: "Haldiram's",
        time:"29 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp"
    },
    {
        id:6,
        title: "Subway",
        time:"22 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp"
    },
    {
        id:7,
        title: "Khan Chacha",
        time:"42 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/da6de857ccdf03b6c1eaa018599cfa02_1505815051.png?output-format=webp"
    },
    {
        id:8,
        title: "Bikanervala",
        time:"29 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp"
    }
]

var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
  };

const TopBrands = () => {
  return (
    <div className='top-brands maxWidth'>
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {brandList.map((brand)=>{
            return (
                <div className="top-brands-cover">
                    <img src={brand.cover} alt={brand.title} className='top-brands-image' />
                </div>
            )
        })}
      </Slider>
    </div>
  )
}

export default TopBrands
