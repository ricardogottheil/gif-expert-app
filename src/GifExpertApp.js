import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Sword Art Online']);

  //   const handleAdd = () => {
  //     setCategories([...categories, 'Dragon Ball']);
  //     // setCategories(cats => [...cats, 'Dragon Ball']);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category, i) => (
          <GifGrid category={category} key={category + i} />
        ))}
      </ol>
    </>
  );
};
