import React from 'react'
import Collection from '../common/Collection'

const collectionList = [
  {
    id:"1",
    title: "one of a kind places",
    cover: "https://b.zmtcdn.com/data/collections/f25923193488d2884f8689f185d418ef_1705558811.png?output-format=webp",
    places: "11 places"
  },
  
  {
    id:"2",
    title: "fomo finds",
    cover: "https://b.zmtcdn.com/data/collections/1322e8a1ff6ae914cd70bc8ec849d20d_1705558664.png?output-format=webp",
    places: "19 places"
  },
  {
    id:"3",
    title: "dine for the gram",
    cover: "https://b.zmtcdn.com/data/collections/fbd237478a5d3b6ea08de83c30230cdd_1705558245.png?output-format=webp",
    places: "22 places"
  },
  {
    id:"4",
    title: "the winter specials",
    cover: "https://b.zmtcdn.com/data/collections/0c7d0ff5ab7050546a67ebc3d38a65ee_1705558407.png",
    places: "14 places"
  },
  {
    id:"5",
    title: "so what's new?",
    cover: "	https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1705557723.png",
    places: "21 places"
  },
  {
    id:"6",
    title: "quick coffee run",
    cover: "	https://b.zmtcdn.com/data/collections/7e95e91cffeab31fa43e3e4918e724ae_1705557924.png",
    places: "11 places"
  }

]

const DineOut = () => {
  return (
    <div>
      <Collection list={collectionList}/>
    </div>
  )
}

export default DineOut
