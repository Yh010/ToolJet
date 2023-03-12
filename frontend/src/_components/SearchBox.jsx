import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useDebounce from '@/_hooks/useDebounce';
import { useMounted } from '@/_hooks/use-mount';
import SolidIcon from '../_ui/Icon/SolidIcons';

export function SearchBox({
  width = '200px',
  onSubmit,
  className,
  debounceDelay = 300,
  darkMode = false,
  placeholder = 'Search',
  customClass = '',
  dataCy = '',
}) {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchTerm = useDebounce(searchText, debounceDelay);
  const [isFocused, setFocussed] = useState(false);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearchText = () => {
    setSearchText('');
  };

  const mounted = useMounted();

  useEffect(() => {
    if (mounted) {
      onSubmit(debouncedSearchTerm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm, onSubmit]);

  return (
    <div className={`search-box-wrapper ${customClass}`}>
      <div className="input-icon">
        {!isFocused && (
          <span className="input-icon-addon">
            <SolidIcon name="search" width="14" />
          </span>
        )}
        <input
          style={{ width }}
          type="text"
          value={searchText}
          onChange={handleChange}
          className={cx('form-control', {
            'dark-theme-placeholder': darkMode,
            [className]: !!className,
          })}
          placeholder={placeholder}
          onFocus={() => setFocussed(true)}
          onBlur={() => setFocussed(false)}
          data-cy={`${dataCy}-search-bar`}
        />
        {isFocused && searchText && (
          <span className="input-icon-addon end">
            <div className="d-flex" onMouseDown={clearSearchText} title="clear">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </span>
        )}
      </div>
    </div>
  );
}
SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  debounceDelay: PropTypes.number,
  width: PropTypes.string,
};
