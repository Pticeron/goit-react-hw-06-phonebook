import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import propTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={e => e.dispatch(setFilter(e.target.value.trim()))}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};
