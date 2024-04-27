function Contacts({ src, alt, contact }) {
  return (
    <div>
      <img 
        src={src} 
        alt={alt} 
        style={{
          borderRadius: "0%",
          display: "block",
          margin: "0 auto",
          width: "300px",
          height: "180px"
        }} 
      />
      <div className="central">
        <div className="text_box">
          <span style={{ fontSize: "25px"}}>{contact}</span>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
