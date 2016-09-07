const DifficultyFilterToggle = require('./difficulty-filter-toggle')
const React = require('react')

function DifficultyFilterToggleList ({ filters = [], onDifficultyFilterUpdate }) {
  const toggles = filters.map((filter, index) => {
    const tag = filter.replace(/ /g, '_').toUpperCase()

    return (
      <DifficultyFilterToggle
        id={`difficultyFilterToggle_${tag}`}
        key={`difficultyFilterToggle_${tag}`}
        onChange={() => onDifficultyFilterUpdate(index + 1)}
      >
        {filter}
      </DifficultyFilterToggle>
    )
  })

  return <p id='difficultyFilterToggleList'>Show:{toggles}</p>
}

module.exports = DifficultyFilterToggleList
