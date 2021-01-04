import React from "react";
import "./style.css";

export function SearchBar(props) {
    return (
        <>
        <div className="input-group input-group-lg col-md-11 searchBar">
        <h3 className="margin">Book Search:</h3>
            <input className="form-control" type="text" {...props} />
        </div>
        </>
    );
}



