import { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import LineDropdown from '../LineDropdown/LineDropdown';

// Constant
import { pages } from '../../constants/constant';

// Style
import './PageSelector.css';

const CheckboxList = ({ pages, selectedPages, onCheckboxChange }) => {
  return (
    <div className="selector-list">
      {pages.map((page) => (
        <label key={page.id} className="checkbox-item" data-id={page.id}>
          <span>{page.label}</span>
          <Checkbox
            checked={selectedPages.includes(page.id)}
            onChange={() => onCheckboxChange(page.id)}
          />
        </label>
      ))}
    </div>
  );
};

CheckboxList.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedPages: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
};

const PageSelector = ({ onSelectionComplete }) => {
  const [selectedPages, setSelectedPages] = useState([]);

  const handleCheckboxChange = (pageId) => {
    if (pageId === 'all') {
      setSelectedPages(prev => 
        prev.includes('all') 
          ? [] 
          : ['all', ...pages.slice(1).map(p => p.id)]
      );
      return;
    }

    setSelectedPages(prev => {
      const newSelection = prev.includes(pageId)
        ? prev.filter(id => id !== pageId && id !== 'all')
        : [...prev.filter(id => id !== 'all'), pageId];

      if (newSelection.length === pages.length - 1) {
        return [...newSelection, 'all'];
      }
      return newSelection;
    });
  };

  const handleDone = () => {
    onSelectionComplete?.(selectedPages);
  };

  return (
    <div className="page-selector">
      <CheckboxList
        pages={[pages[0]]}
        selectedPages={selectedPages}
        onCheckboxChange={handleCheckboxChange}
      />
      <LineDropdown />
      <div className="individual-pages">
        <CheckboxList
          pages={pages.slice(1)}
          selectedPages={selectedPages}
          onCheckboxChange={handleCheckboxChange}
        />
      </div>
      <LineDropdown />
      <div className="button-container">
        <Button onClick={handleDone}>
          Done
        </Button>
      </div>
    </div>
  );
};

PageSelector.propTypes = {
  onSelectionComplete: PropTypes.func,
};

export default PageSelector;