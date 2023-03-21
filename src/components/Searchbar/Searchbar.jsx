import { Formik } from 'formik';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { Form, Button, Input } from './Searchbar.styled';

const Searchbar = ({ formSubmit }) => {
  const handleSubmit = ({ moviesName }, { resetForm }) => {
    if (moviesName === '') {
      toast.error('Enter something!', {
        style: {
          background: '#ca1616',
          color: '#fff',
        },
      });
      formSubmit(moviesName);
      resetForm();
      return;
    }
    formSubmit(moviesName);
    resetForm();
  };

  return (
    <Formik initialValues={{ moviesName: '' }} onSubmit={handleSubmit}>
      <Form>
        <Button type="submit">
          <FcSearch style={{ width: 30, height: 30 }} />
        </Button>
        <Input
          type="text"
          name="moviesName"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </Form>
    </Formik>
  );
};

Searchbar.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
