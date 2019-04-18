import React from 'react';
import Select from 'react-select';
// eslint-disable-next-line import/no-extraneous-dependencies

const options = [
  { value: 'Successful businesses-1', label: 'Successful businesses-1' },
  { value: 'Successful businesses-2', label: 'Successful businesses-2' },
  { value: 'Successful businesses-3', label: 'Successful businesses-3' },
];

const customStyles = {
  // clearIndicator: () => {
  // },
  // container: () => {},
  //   return {
  //     background: 'grey',
  //   };
  // },
  // control: () => {
  // },
  // dropdownIndicator: () => {},
  // group: () => {

  // },
  // groupHeading: () => {
  //   return {
  //     background: 'red',
  //   };
  // },
  // indicatorsContainer: () => {

  // },
  // indicatorSeparator: () => {

  // },
  // input: () => {

  // },
  // loadingIndicator: () => {

  // },
  // loadingMessage: () => {

  // },
  // menu: () => {

  // },
  // menuList: () => {

  // },
  // menuPortal: () => {

  // },
  multiValue: () => {},
  multiValueLabel: () => {},
  multiValueRemove: () => {},
  noOptionsMessage: () => {},
  // option: () => {

  // },
  placeholder: () => {
    return {
      color: '#363F55',
      fontSize: '14px',
    };
  },
  labelText: () => {
    return {
      color: 'red',
      fontSize: '14px',
    };
  },
  // singleValue: () => {

  // },
  // valueContainer: () => {
  //   return {
  //     fontFamily: 'Montserrat',
  //     fontSize: '14px',
  //   };
  // },
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#363F55' : '#363F55',
  }),
  // control: () => ({
  //   // none of react-select's styles are passed to <Control />
  //   width: 260,
  // }),
  // singleValue: (provided, state) => {
  //   const opacity = state.isDisabled ? 0.5 : 1;
  //   const transition = 'opacity 300ms';

  //   return { ...provided, opacity, transition };
  // },
};

class Dropdown extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { placeholder, labelText } = this.props;
    const { selectedOption } = this.state;

    return (
      <label styles={customStyles}>
        <span>{labelText}</span>
        <Select
          isMulti={true}
          styles={customStyles}
          placeholder={placeholder}
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </label>
    );
  }
}

export default Dropdown;
