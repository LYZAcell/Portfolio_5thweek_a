function Photo({ src, alt }) {
    return (
      <img 
        src={src} 
        alt={alt} 
        style={{
          borderRadius: "0%",
          display: "block",
          margin: "0 auto",
          width: "500px",
          height: "300px"
        }} 
      />
    );
  }
  
  export default Photo;