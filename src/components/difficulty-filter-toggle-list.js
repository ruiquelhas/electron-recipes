const DifficultyFilterToggle = require('./difficulty-filter-toggle')
const React = require('react')

function DifficultyFilterToggleList () {
  return (
    <p className='difficultyFilterToggleList'>Show:
      {' '}
      <DifficultyFilterToggle filter='VERY_EASY'> Very Easy</DifficultyFilterToggle>
      {' '}
      <DifficultyFilterToggle filter='EASY'> Easy</DifficultyFilterToggle>
      {' '}
      <DifficultyFilterToggle filter='AVERAGE'> Average</DifficultyFilterToggle>
      {' '}
      <DifficultyFilterToggle filter='HARD'> Hard</DifficultyFilterToggle>
      {' '}
      <DifficultyFilterToggle filter='VERY_HARD'> Very Hard</DifficultyFilterToggle>
    </p>
  )
}

module.exports = DifficultyFilterToggleList
