import PropTypes from 'prop-types';

function ItemFeature({ icon, title, description }) {
  return (
    <div className="feature-item">
      <img src={icon} alt="Feature Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

ItemFeature.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ItemFeature;
