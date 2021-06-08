import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers"

function Nav() {

  const categories = [
    { name: "commercial", description: "Photo of grocery stores, food trucks, and other commerial projects", },
    { name: "Portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    { name: "landscape", description: "Field, farmhouses, waterfalls, and the beauty of nature" },
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`)
  }

  return (
    <header className="flex-row px-1">
      <h2>
        <a hfre="/">
          <span role="img" aria-label="camera">📸</span> Oh Sanp!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#About" onClick={categorySelected}>
              About me
            </a>
          </li>
          <li>
            <span onClick={categorySelected}>
              Contact
              </span>
          </li>
          {categories.map((category) => (
            <li
              className="mx-1"
              key={category.name}
            >
              <span onClick={categorySelected}>
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;