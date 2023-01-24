import PropTypes from 'prop-types';
import styles from '../components/phoneBook.module.css';

const Contacts = ({ onDelete, onFilter }) => {
  const filteredContacts = onFilter();

  const elements = filteredContacts.map(({ name, number, id }) => {
    return (
      <li key={id}>
        <p className={styles.name}>{name}</p>
        <p className={styles.name}>{number}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    );
  });

  return <ol>{elements}</ol>;
};

export default Contacts;

Contacts.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
