import React from 'react';
const { shallow } = require('enzyme');
const { GifGridItem } = require('../../components/GifGridItem');

describe('Pruebas en GifGridItem', () => {
  const title = 'Un titulo';
  const url = 'http://localhost/algo.png';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de tener un parrafo con Title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('Debe tener la imagen igual al URL y alt de los props', () => {
    const img = wrapper.find('img');
    // console.log(img.props('src'));
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Debe tener animate__fadeIn', () => {
    const div = wrapper.find('div');

    expect(div.hasClass('animate__fadeIn')).toBe(true);
  });
});
