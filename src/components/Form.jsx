import styles from '../components/phoneBook.module.css';
import { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = event => {
    const { name, value } = event.currentTarget;
    const { contacts } = this.props;
    this.setState({ [name]: value });
    contacts.map(({ name }) => {
      if (value === name) {
        alert(`${name} is already in contacts`);
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ contacts: [], name: '', number: '' });
  };

  render() {
    return (
      <>
        <form className={styles.block} onSubmit={this.handleSubmit}>
          <label htmlFor="get-name">
            <p className={styles.name}>Name</p>
            <input
              value={this.state.name}
              onChange={this.onChange}
              className={styles.input}
              placeholder="Name of contact"
              id="get-name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="get-number">
            <p className={styles.name}>Number</p>
            <input
              id="get-number"
              onChange={this.onChange}
              className={styles.input}
              placeholder="Number of contact"
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default Form;
