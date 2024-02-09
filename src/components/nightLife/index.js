import React from 'react'
import './NightLifeStyle.css'
import {nightlife} from '../../Data/nightlife'
import Collection from '../common/Collection'
import ExploreSection from '../common/ExploreSection'
import Filters from '../common/Filters'


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

const nightlifeFilters = [
  {
    id:'1',
    title:'Filters',
    icon: <i size="18" color="#9C9C9C"><svg xmlns="http://www.w3.org/2000/svg" fill="#9C9C9C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>filter</title><path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path></svg></i>

  },
  {
    id:'2',
    title: 'Gold'
  },
  {
    id:'3',
    title: 'Rating: 4.0+'
  },
  {
    id:'4',
    title: 'Pubs & Bars'
  }
]

const nightlifeList = nightlife

const NightLife = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className="maxWidth">
        <Filters filterList={nightlifeFilters}/>
        <div className="restro-hero-img">
          <img src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png" alt="dining out hero image" />
        </div>
        <ExploreSection list={nightlifeList} collectionName="Trending Nightlife restaurants in Sector 29"/>
      </div>
      
    </div>
  )
}

export default NightLife
