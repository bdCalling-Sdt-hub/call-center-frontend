const ImageGenerator = (url) => {
  return url ? `${process.env.REACT_APP_BACKEND_URL}${url}` : null;
};

export default ImageGenerator;
