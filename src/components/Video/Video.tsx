import React from "react";

interface GIFProps {
  videoPath: string;
  width: string;
}

const GIF: React.FC<GIFProps> = (props) => {
  const { videoPath, width } = props;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <img src={videoPath} alt="Continuous Animation" width={width} />
    </div>
  );
};

export default GIF;
