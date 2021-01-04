import React from "react";
import "./style.css";

export function Card(props) {
  return (
    <div className="card">
      <h3 className="margin">Results</h3>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export function CardItem(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-10">
            <h3>{props.title}</h3>
            <h4>Written By: {props.authors}</h4>
          </div>
          <div className="col-md-2">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-secondary me-md-2 button" type="button">
                View
              </button>
              <button className="btn btn-secondary" type="button">
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <img src={props.image}></img>
          </div>
          <div className="col-md-9">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
