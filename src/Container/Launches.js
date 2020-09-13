import React from "react";

export default function Launches(props) {
  return (
    <React.Fragment>
      {props.launch_detail.map((launch, index) => {
        return (
          <section
            key={"items" + index}
            className="col-lg-3 col-sm-6 col-md-4 col-xs-12 launchRecord"
          >
            <div className="record">
              <img src={launch.links.mission_patch_small} alt="avator" />
              <h2>
                {launch.mission_name} #{launch.flight_number}
              </h2>
              <div>
                <label>Mission IDs</label>
                <ul>
                  {launch.mission_id.map((id) => (
                    <li key={id}>{id}</li>
                  ))}
                </ul>
              </div>
              <div>
                <label>Launch Year : </label> <span>{launch.launch_year}</span>
              </div>
              <div>
                <label>Successful Launch : </label>{" "}
                <span>{launch.launch_success ? "true" : "false"}</span>
              </div>
              <div>
                <label>Successful Landing :</label> <span></span>
              </div>
            </div>
          </section>
        );
      })}
    </React.Fragment>
  );
}
