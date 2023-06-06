import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import debounce from 'lodash.debounce';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  const delayedOnChange = debounce(onChange, 300);

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        onChange={delayedOnChange}
      />
    </div>
  );
};

