import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderState = ({ headerText }) => {
  const [id] = useState(1234);

  return (
    <div>
      <span>
        {headerText}
      </span>
      <Link to='/about'>About</Link>
      <Link to={`/profile/${id}`}>Profile</Link>
    </div>
  )
}

export default HeaderState;