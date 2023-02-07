import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayMissions } from '../redux/missions/missions';
import Mission from './Mission';

const MissionsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayMissions());
  }, [dispatch]);

  const missionsStoreList = useSelector((state) => state.missions);

  return (
    <table className="table table-striped container table-hover">
      <tbody>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th className="text-white">.</th>
        </tr>
        {missionsStoreList.map((obj) => (
          <Mission
            key={obj.id}
            id={obj.id}
            missionName={obj.name}
            description={obj.description}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MissionsList;
