import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missionsStore = useSelector((state) => state.missions);
  const allRockets = useSelector((state) => state.rockets);
  const { missions } = missionsStore;
  const { rockets } = allRockets;
  const myMissions = missions.filter((mission) => mission.joined === true);
  const myRockets = rockets.filter((mission) => mission.reserved === true);
  return (
    <div className="container">
      <div className="row justify-content-evenly">
        <div className="col-6">
          <h1 className="p-2">My Missions</h1>
          <div>
            {myMissions.map((mission) => (
              <div className="border p-3" key={mission.id}>{mission.name}</div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <h1 className="p-2">My Rockets</h1>
          <div>
            {myRockets.map((rocket) => (
              <div className="border p-3" key={rocket.id}>{rocket.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
