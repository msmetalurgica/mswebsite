import PropTypes from 'prop-types';
import React from 'react';
import Gallery from 'react-grid-gallery';

const Galeria = (props) => {

  const { images } = props;

  return (
    <Gallery
      images={images}
      enableLightbox
      enableImageSelection={false} />
  )
}

Galeria.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Galeria;
