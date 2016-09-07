const React = require('react')
const FormSelect = require('./form-select')

function DifficultySelector ({ children, levels = [], onDifficultyChange }) {
  const options = levels.map((level, index) => {
    const tag = `${level.replace(/ /g, '_').toUpperCase()}_option`

    return <option key={tag} value={`${index + 1}`}>{level}</option>
  })

  return (
    <FormSelect
      id='recipeDifficultySelect'
      options={options}
      onChange={event => {
        onDifficultyChange(parseInt(event.target.value, 10))
      }}
    >
      Difficulty
    </FormSelect>
  )
}

module.exports = DifficultySelector
