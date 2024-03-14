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
    <h1>Demo</h1>
    <InstantSearch indexName="documents" searchClient={searchClient}>
      <Stats />
      <SearchBox />
      <InfiniteHits hitComponent={Hit} />
    </InstantSearch>
  </div>
);

const Hit = ({ hit }) => (
  <div key={hit.id}>
    <div className="hit-name">
      <Highlight attribute="name" hit={hit} />
    </div>
    <p className="hit-categories"><Highlight attribute="categories" hit={hit} /></p>
    <div className="hit-image">
      <img src={hit.picture} alt={hit.name} width="200px" />
      <p className="image-credit">Picture by <a href={hit.picture_author_profile_link}>{hit.picture_author}</a> on <a href="https://unsplash.com/?utm_source=restaurants_demo&utm_medium=referral">Unsplash</a></p>
    </div>
    <div className="hit-description">
      <Highlight attribute="description" hit={hit} />
    </div>
  </div>
);

export default App