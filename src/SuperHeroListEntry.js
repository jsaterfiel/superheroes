import React from "react";

function SuperHeroListEntry({ hero }) {
  return <li key={hero.id}>{hero.name} from stateless prop</li>;
}

export default SuperHeroListEntry;