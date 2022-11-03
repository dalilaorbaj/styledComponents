import React from 'react';
import GlosarioItem from '../GlosarioItem/GlosarioItem';
import Data from '../../Data';

const GlosarioStyles = () => {
  return (
    <>
      {Data.map((item) => (
        <GlosarioItem data={item} key={item.id} />
      )
      )}
    </>
  )
}

export default GlosarioStyles;
