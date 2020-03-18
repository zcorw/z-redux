import React from 'react';

export default function Text(props) {
  const {dispatch, ...p} = props;
  return (
    <div><input type="text" {...p} /></div>
  )
}