const React = require('react')

function FormSubmitButton ({ children, id, onClick }) {
  return (
    <div>
      <input
        defaultValue={children}
        id={id}
        onClick={onClick}
        type='button'
      />
    </div>
  )
}

module.exports = FormSubmitButton
