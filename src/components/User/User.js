import React from "react";

const User = (props) => {
  console.log(props.user);
  const { picture, name, gender, age, location, email, phone } = props.user;
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={picture.large} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title text-success">
            {name.title + " " + name.first + " " + name.last}
          </h5>
          <p>{gender}</p>
          <p>{age}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
