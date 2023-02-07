import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const allRockets = useSelector((state) => state.rockets);

  return (
    <ul className="container">
      {allRockets.map((rocket) => (
        <li key={rocket.id} className="d-flex p-3">
          <div className="px-4">
            <img src={rocket.flickr_images[0]} alt="rocket" style={{ width: '250px', height: '200px' }} className="p-0" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.5em' }}>{rocket.name}</h2>
            <p>{rocket.description}</p>
            <button type="button" className="btn btn-primary">Reserve Rocket</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Rockets;
