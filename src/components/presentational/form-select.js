const React = require('react')

function FormSelect ({ children, id, onChange, options, value }) {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <select
        id={id}
        defaultValue={value}
        onChange={onChange}
      >
        {options}
      </select>
    </div>
  )
}

module.exports = FormSelect
