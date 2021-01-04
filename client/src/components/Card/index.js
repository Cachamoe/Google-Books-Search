import React from "react";

export function Card(props) {
  return (
    <div className="card">
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
          <h3>The Two Towers</h3>
          <h4>Written By: John Ronald Reuel Tolkien</h4>
        </div>
        <div className="col-md-2">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" type="button">
              View
            </button>
            <button class="btn btn-primary" type="button">
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
            <img src="http://books.google.com/books/content?id=z8dkzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"></img>
        </div>
        <div className="col-md-9">
            <p>The second volume in J.R.R. Tolkien's epic adventure THE LORD OF THE RINGS One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of the company was attacked by Orcs. Now they continue the journey alone down the great River Anduin—alone, that is, save for the mysterious creeping figure that follows wherever they go. “Among the greatest works of imaginative fiction of the twentieth century. The book presents us with the richest profusion of new lands and creatures, from the beauty of Lothlórien to the horror of Mordor.” – Sunday Telegraph</p>
        </div>
      </div>
    </div>
  </div>
    )
}
