// import React from 'react'

const SelectedMovie = ({ selectedId, handleCloseMovie }) => {
  return (
    <>
      <div className="details">{selectedId}</div>
      <button onClick={handleCloseMovie}>-</button>
    </>
  );
};

export default SelectedMovie;
