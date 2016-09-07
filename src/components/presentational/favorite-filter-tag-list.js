const FavoriteFilterTag = require('./favorite-filter-tag')
const React = require('react')

function FavoriteFilterTagList ({ filters = [], onFavoriteFilterTagClick, selected }) {
  const tags = filters.map(filter => {
    const tag = `SHOW_${filter.toUpperCase()}`

    return (
      <FavoriteFilterTag
        id={`favoriteFilterTag_${tag}`}
        key={`favoriteFilterTag_${tag}`}
        onClick={() => onFavoriteFilterTagClick(tag)}
        active={tag === selected}
      >
        {filter}
      </FavoriteFilterTag>
    )
  })

  return <p id='favoriteFilterTagList'>Show:{tags}</p>
}

module.exports = FavoriteFilterTagList
