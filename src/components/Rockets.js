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
    <ul>
      {allRockets.map((rocket) => (
        <li key={rocket.id}>
          {rocket.name}
        </li>
      ))}
    </ul>
  );
};

export default Rockets;
