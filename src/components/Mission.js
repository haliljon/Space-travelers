import { PropTypes } from 'prop-types';

const Mission = ({ missionName, description }) => (
  <tr>
    <td className="col-md-1">{missionName}</td>
    <td className="col-md-4">{description}</td>
    <td className="align-middle col-md-1 text-center">Status</td>
    <td className="align-middle col-md-1 text-center"><button type="button" className="btn btn-outline-secondary">Join Mission</button></td>
  </tr>
);

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
