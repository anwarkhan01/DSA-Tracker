import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Progress = ({checkedCount}) => {
  return (
    <div
      className="progress-bar"
      style={{
        width: "200px",
        height: "200px",
        marginTop: "40px",
        marginBottom: "50px",
      }}
    >
      <CircularProgressbar
        value={checkedCount}
        maxValue={200}
        text={`${Math.round((checkedCount / 200) * 100)}%`}
      />
    </div>
  );
};

export default Progress;
