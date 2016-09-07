const React = require('react')

function FormTextInput ({ children, id, onInputBlur, placeholder, value }) {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        defaultValue={value}
        onBlur={event => {
          onInputBlur(event.target.value)
        }}
        placeholder={placeholder}
        type='text'
      />
    </div>
  )
}

module.exports = FormTextInput
