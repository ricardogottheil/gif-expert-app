import React from 'react';
import '@testing-library/jest-dom';

const { shallow } = require('enzyme');
const { AddCategory } = require('../../components/AddCategory');

describe('Puebas con AddCategory', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', {
      target: {
        value,
      },
    });
    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('No debe postear la información con Submit', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault() {},
    });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Debe llamar el setCategories y limpiar la caja de texto', () => {});
});
