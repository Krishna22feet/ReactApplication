const Button = ({ children, variant = 'primary' }) => {
  const styles = {
    primary: {
      background: '#2563eb',
      color: '#fff'
    },
    outline: {
      border: '1px solid #2563eb',
      color: '#2563eb'
    }
  }

  return (
    <button
      style={{
        padding: '12px 20px',
        borderRadius: '6px',
        cursor: 'pointer',
        border: 'none',
        ...styles[variant]
      }}
    >
      {children}
    </button>
  )
}

export default Button
