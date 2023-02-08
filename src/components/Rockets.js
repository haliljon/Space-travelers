import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reservation } from '../redux/rockets/rockets';

const Rockets = () => {
  const allRockets = useSelector((state) => state.rockets);
  const { status, rockets } = allRockets;
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'default') { dispatch(fetchRockets()); }
  }, [dispatch, status]);

  const handleClick = (id) => { dispatch(reservation(id)); };

  return (
    <ul className="container">
      {rockets.map((rocket) => (
        <li key={rocket.id} className="d-flex p-3">
          <div className="px-4">
            <img src={rocket.flickr_images[0]} alt="rocket" style={{ width: '250px', height: '200px' }} className="p-0" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.5em' }}>{rocket.name}</h2>
            <p>
              {rocket.reserved && <span className="badge me-2" style={{ background: 'darkcyan' }}>Reserved</span>}
              {rocket.description}
            </p>
            <button type="button" className={!rocket.reserved ? 'btn btn-primary' : 'btn btn-outline-secondary'} onClick={() => handleClick(rocket.id)}>
              {rocket.reserved && 'Cancel Reservation'}
              {!rocket.reserved && 'Reserve Rocket'}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Rockets;
