import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ 
  onClick, 
  children, 
  variant = 'primary',
  disabled = false,
  className = '',
  type = 'button'
}) => {
  return (
    <button 
      className={`custom-button ${variant} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button; 