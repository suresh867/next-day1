"use client";
import { useState } from "react";

export default function Home() {

  const [searchtext, setSearchText] = useState("");


  return (
    <>
      <nav>
        <div>
          LOGO
        </div>
        <ul>
          <li>home</li>
          <li>contact us</li>
          <li>services</li>
        </ul>

        <div className="search-container">
          <input type="text"
            placeholder={"search..."}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </nav>

      <div className="search-content">
        <p>{searchtext}</p>
      </div>
    </>
  );
}
