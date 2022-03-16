import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import axios from '../../API/axios';
import SkeletonImage from '../SkeletonImage/SkeletonImage';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const baseUrl = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
              <div className="row__container" key={movie.id}>
                <LazyLoadImage
                  className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                  alt={movie.name}
                  effect="blur"
                  src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                />
                <SkeletonImage isLargeRow={isLargeRow} />
              </div>
            ),
        )}
      </div>
    </div>
  );
}

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string.isRequired,
  isLargeRow: PropTypes.bool,
};

Row.defaultProps = {
  isLargeRow: false,
};

export default Row;
