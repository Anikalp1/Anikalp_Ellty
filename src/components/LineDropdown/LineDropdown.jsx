import PropTypes from 'prop-types';
import './LineDropdown.css';

const LineDropdown = ({ 
  children,
  className = '',
  expanded = false,
  onClick
}) => {
  return (
    <div 
      className={`line-dropdown ${expanded ? 'expanded' : ''} ${className}`.trim()}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

LineDropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  expanded: PropTypes.bool,
  onClick: PropTypes.func
};

export default LineDropdown; 