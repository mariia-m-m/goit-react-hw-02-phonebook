import PropTypes from 'prop-types';
import styles from '../components/phoneBook.module.css';

const Filter = ({ onChangeFilter }) => {
  return (
    <>
      <p className={styles.name}>Find contacts by name</p>
      <input
        onChange={onChangeFilter}
        className={styles.input}
        placeholder="Name of contact"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
