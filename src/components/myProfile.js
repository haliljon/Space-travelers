import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missionsStore = useSelector((state) => state.missions);
  const allRockets = useSelector((state) => state.rockets);
  const allDragons = useSelector((state) => state.dragons);
  const { missions } = missionsStore;
  const { rockets } = allRockets;
  const { dragons } = allDragons;
  const myMissions = missions.filter((mission) => mission.joined === true);
  const myRockets = rockets.filter((mission) => mission.reserved === true);
  const myDragons = dragons.filter((dragon) => dragon.booked === true);
  return (
    <div className="container">
      <div className="row justify-content-evenly">
        <div className="col-6">
          <h1 className="p-2">My Missions</h1>
          <div>
            {!myMissions.length ? 'No Missions Joined' : ' '}
          </div>
          <div>
            {myMissions.map((mission) => (
              <div className="border p-3" key={mission.id}>{mission.name}</div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <h1 className="p-2">My Rockets</h1>
          <div>
            {!myRockets.length ? 'No Rockets Reserved' : ' '}
          </div>
          <div>
            {myRockets.map((rocket) => (
              <div className="border p-3" key={rocket.id}>{rocket.name}</div>
            ))}
          </div>
        </div>
        <div className="col-6 mt-5">
          <h1 className="p-2">My Dragons</h1>
          <div>
            {!myDragons.length ? 'No Dragons Booked' : ' '}
          </div>
          <div>
            {myDragons.map((dragon) => (
              <div className="border p-3" key={dragon.id}>{dragon.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
