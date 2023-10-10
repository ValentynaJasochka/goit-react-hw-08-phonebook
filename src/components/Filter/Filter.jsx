import { useDispatch } from 'react-redux';
import { handleFilter } from 'redux/contacts/FilterSlice';
import { Input, FormLabel, FormControl } from '@chakra-ui/react';
export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    event.preventDefault();
    const filterValue = event.target.value;
    dispatch(handleFilter(filterValue));
  };

  return (
    <FormControl>
      <FormLabel fontSize={20} color={'navy'}>
        Find contacts by name:
        <Input
          variant="outline"
          size="md"
          focusBorderColor="pink.400"
          type="text"
          name="filterValue"
          title="Enter the name"
          required
          onChange={changeFilter}
        />
      </FormLabel>
    </FormControl>
  );
};
