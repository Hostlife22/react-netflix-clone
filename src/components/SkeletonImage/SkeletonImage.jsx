import PropTypes from 'prop-types';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './SkeletonImage.css';

function SkeletonImage({ isLargeRow }) {
  const options = {
    width: 100,
    height: isLargeRow ? 147 : 53.25,
  };

  return (
    <div className="skeleton__container">
      <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147">
        <Skeleton {...options} inline />
      </SkeletonTheme>
    </div>
  );
}

SkeletonImage.propTypes = {
  isLargeRow: PropTypes.bool,
};

SkeletonImage.defaultProps = {
  isLargeRow: false,
};

export default SkeletonImage;
