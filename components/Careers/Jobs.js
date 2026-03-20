import React from "react";
import jobs from "../../res/jobs.json";

export default function Jobs() {
  return (
    <section className="aSection jobs" id="jobsection">
      <div className="mainCont">
        <div className="title">Open Positions</div>
        <div className="subtitle">Email your resume and portfolio to info@legiongames.io</div>
        <div className="jobs">
          {jobs.map((item, index) => (
            <div key={index} className="job">
              <div>
                {item.role}{" "}
                {item.type === "INTS|PART|FT"
                  ? "(Internship or part/full-time)"
                  : ""}
              </div>
              <div>
                {item.details} • {item.location}{" "}
                <i className="ri-router-line"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
