const React = require('react')

function FormTextArea ({ children, id, onTextAreaBlur, placeholder }) {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <textarea
        id={id}
        onBlur={event => {
          onTextAreaBlur(event.target.value)
        }}
        placeholder={placeholder}
      />
    </div>
  )
}

module.exports = FormTextArea
