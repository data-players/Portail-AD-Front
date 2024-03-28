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
  <div className="mainContainer" >
    <div className="ais-InstantSearch">
      <h1>Demo Portail Alimentation Durable</h1>
      <InstantSearch indexName="documents" searchClient={searchClient}>
        <Stats />
        <SearchBox className="searchBox"/>
        <InfiniteHits
            hitComponent={Hit} 
            classNames={{
              item: 'itemCustom'
            }}
        />
      </InstantSearch>
    </div>
  </div>
);

const Hit = ({ hit }) => {
  return (
  <div key={hit.id}>
    <a href={hit.homePage}><h1 className="hit-name">
      <Highlight attribute="title" hit={hit} />
    </h1></a>
    <p className="hit-categories"><Highlight attribute="hasKeyword" hit={hit}  separator=" - "/></p>
    <p className="hit-categories"><Highlight attribute="hasDataSource" hit={hit}  separator=" - "/></p>
    <div className="hit-description">
      <Highlight attribute="description" hit={hit} />
    </div>
  </div>
)
};

export default App