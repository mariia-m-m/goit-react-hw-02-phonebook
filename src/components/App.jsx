import styles from '../components/phoneBook.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Contacts from './Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    var joined = this.state.contacts.concat(data);
    this.setState({ contacts: joined });
  };

  render() {
    return (
      <div className={styles.section}>
        <h2 className={styles.title}>Phonebook</h2>
        <Form
          onSubmit={this.formSubmitHandler}
          contacts={this.state.contacts}
        />

        <div className={styles.blockContact}>
          <Contacts contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}
