import React from "react";
function Team() {
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-muted text-center mb-5">People</h1>
        <div className="col-5 text-center">
          <img
            src="media\images\IMG_20250123_190922.jpg"
            alt="Nitin Kamath"
            style={{
              borderRadius: "100%",
              height: "400px",
              width: "400px",
              backgroundSize: "auto",
            }}
          />
          <h2 className="mt-4 text-muted">Vaibhav Prasad</h2>
          <p className="mt-3 text-muted fs-5">Developer</p>
        </div>
        <div className="col-7 mt-5">
          <p className="text-muted fs-5 mt-3">
           I'm Vaibhav Prasad, a developer passionate about building
            real-world applications using modern technologies. Although I'm not
            personally into trading, I created this Zerodha Trading Web App as a
            way to challenge myself and expand my skills in API integration,
            authentication, and real-time data handling.
            <br />
            <br />
            Connect on{" "}
            <a href="https://www.linkedin.com/in/vaibhav-prasad-b59a2b272/" style={{ textDecoration: "none" }}>
              Linkdin
            </a>{" "}
            /{" "}
            <a href="https://www.instagram.com/vaibhavprasad666/?next=%2F&hl=en" style={{ textDecoration: "none" }}>
              Instagram
            </a>{" "}
            /{" "}
            <a href="https://github.com/Vaibhavfprasad" style={{ textDecoration: "none" }}>
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
<h1>Team</h1>;
