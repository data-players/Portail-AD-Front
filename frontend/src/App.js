import React from 'react';
import {
  InstantSearch,
  InfiniteHits,
  SearchBox,
  Stats,
  Highlight
} from "react-instantsearch-dom";
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import "instantsearch.css/themes/algolia-min.css";


const searchClient = instantMeiliSearch(
  'https://meilisearch.data-players.com/',
  'D4t4-Pl4yers'
);

const App = () => (
  <div className="ais-InstantSearch">
    <h1>Demo Portail Alimentation Durable</h1>
    <InstantSearch indexName="documents" searchClient={searchClient}>
      <Stats />
      <SearchBox />
      <InfiniteHits
          hitComponent={Hit} 
          classNames={{
            item: 'itemCustom'
          }}
      />
    </InstantSearch>
  </div>
);

const Hit = ({ hit }) => {
  // console.log(hit)
  return (
  <div key={hit.id}>
    <h1 className="hit-name">
      <Highlight attribute="title" hit={hit} />
    </h1  >
    {/* <ul>
    {hit.hasKeyword?.map((kw,index) =>{
       let clone = {
        ...hit,
        hasKeyword:[hit.hasKeyword[index]]
       }
       console.log(clone)
       return (<li><Highlight attribute="hasKeyword" hit={clone}/></li>)
      }
    )}
    </ul> */}
    <p className="hit-categories"><Highlight attribute="hasKeyword" hit={hit}  separator=" - "/></p>
    {/* <div className="hit-image">
      <img src={hit.picture} alt={hit.name} width="200px" />
      <p className="image-credit">Picture by <a href={hit.picture_author_profile_link}>{hit.picture_author}</a> on <a href="https://unsplash.com/?utm_source=restaurants_demo&utm_medium=referral">Unsplash</a></p>
    </div> */}
    <div className="hit-description">
      <Highlight attribute="description" hit={hit} />
    </div>
  </div>
)
};

export default App