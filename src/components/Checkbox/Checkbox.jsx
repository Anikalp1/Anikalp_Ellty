import PropTypes from 'prop-types';
import './Checkbox.css';

const Checkbox = ({ 
  checked, 
  onChange, 
  disabled = false,
  id,
  name,
  className = '',
  'aria-label': ariaLabel
}) => {
  return (
    <div className={`checkbox-wrapper ${className}`.trim()}>
      <input 
        type="checkbox" 
        className="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        id={id}
        name={name}
        aria-label={ariaLabel}
      />
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  'aria-label': PropTypes.string
};

export default Checkbox; 