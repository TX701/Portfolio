import { homeHTML } from "./data.js";
  import { homeText } from "./data.js";
  import { iconsText } from "./data.js";
  import { windowsText } from "./data.js";
import { portfolioHTML } from "./data.js";
import { aboutHTML } from "./data.js";
import { resumeHTML } from "./data.js";

const windowDetails = new Map(); // [windowname, {moveable: boolean, winHeight: valuepx, winWidth: valuepx}]

// dynamically changes zindex of windows based off of what was clicked most recently
const bringToTop = (name) => {
  if (order.indexOf(name) != -1) {
    let filteredArray = order.filter((e) => e != name); // if its open remove it  from the order index
    order = filteredArray;
  }

  order.unshift(name); // make window the first element in order

  order.forEach((element) => {
    document.getElementById(`${element}tab`).style.backgroundColor = name == element ? "#e8e8e8" : "#bfbfbf";

    let placement = order.length - order.indexOf(element); // go through order and make the zindex of each window match its placement in reverse (ie 0 = length, 1 = length - 1)
    document.getElementById(element).style.zIndex = placement;
  });

  document.getElementById("footer").style.zIndex = order.length + 1; // give the footer the highest zindex
};

const draggableElement = (name) => {
  document.getElementById(name).addEventListener("mousedown", (e) => {
    let initialX = e.clientX;
    let initialY = e.clientY;

    const moveElement = (e) => {
      if (windowDetails.get(name).moveable) {
        let currentX = e.clientX;
        let currentY = e.clientY;
        document.getElementById(name).style.left = document.getElementById(name).offsetLeft + (currentX - initialX) + "px";
        document.getElementById(name).style.top = document.getElementById(name).offsetTop + (currentY - initialY) + "px";
        initialX = currentX;
        initialY = currentY;
      }
    };

    const stopElement = () => {
      document.removeEventListener("mousemove", moveElement);
      document.removeEventListener("mouseup", stopElement);
    };

    document.addEventListener("mousemove", moveElement);
    document.addEventListener("mouseup", stopElement);
  });
};

// add element to the task bar at the bottom of the page
const addToTaskBar = (name, type) => {
  let fileLocation = `${type}.png`;

  let newTab = `<div class="tabs" id="${name}tab">
                  <img src="./assets/icons/${fileLocation}" alt="Image Broken" />
                  <p>${type.charAt(0).toUpperCase()}${type.substring(1)}</p>
                </div>`;

  document.getElementById("window-tabs").insertAdjacentHTML("beforeend", newTab);

  document.getElementById(`${name}tab`).addEventListener("click", () => {
    bringToTop(name);

    if (document.getElementById(name).style.display === "none") {
      document.getElementById(name).style.display = "block"; // if the window is in the tray get it out of the tray
    }
  });
};

// seperated as its own function some of the windows can be maximized on open
const maximize = (name) => {
  document.getElementById(name).style.height = `${document.getElementById("all").offsetHeight - document.getElementById("footer").offsetHeight}px`;
  document.getElementById(name).style.width = "100%";
  document.getElementById(name).style.top = "0";
  document.getElementById(name).style.left = "0";
  document.getElementById(name).style.overflow = "hidden";

  document.querySelector(`#${name}-topbar`).style.top = "0";
  document.querySelector(`#${name}-topbar`).style.width = "100%";

  windowDetails.set(name, {moveable: false, winHeight: windowDetails.get(name).winHeight, winWidth: windowDetails.get(name).winWidth}); // the window cannot move in fullscreen mode

  document.getElementById(`${name}-max`).style.display = "none";
  document.getElementById(`${name}-min`).style.display = "block";
}

const windowSetUp = (name, type) => {
  draggableElement(name); // make the window moveable

  windowDetails.set(name, {moveable: true, winHeight: document.getElementById(name).offsetHeight + "px", winWidth: document.getElementById(name).offsetWidth + "px"}); // add window to details map

  document.getElementById(name).addEventListener("mousedown", () => {
    bringToTop(name); // bring to top if the window is clicked on
  });

  addToTaskBar(name, type); // add icon to task bar

  // home is not included in these options as it is just meant as a notice, theres no need for the user to maximize or minimize it
  if (type != "home") {
    // adds functionality to the maximize button
    document.getElementById(`${name}-max`).addEventListener("click", () => {
      maximize(name);
    });

    // adds functionality to the minimize button
    document.getElementById(`${name}-min`).addEventListener("click", () => {
      document.getElementById(name).style.height = windowDetails.get(name).winHeight;
      document.getElementById(name).style.width = windowDetails.get(name).winWidth;

      document.getElementById(name).style.top = "";
      document.getElementById(name).style.left = "";
      document.getElementById(name).style.overflow = "";

      document.querySelector(`#${name}-topbar`).style.top = "0.1%";
      document.querySelector(`#${name}-topbar`).style.width = "100%";

      windowDetails.set(name, {moveable: true, winHeight: windowDetails.get(name).winHeight, winWidth: windowDetails.get(name).winWidth});

      document.getElementById(`${name}-max`).style.display = "block";
      document.getElementById(`${name}-min`).style.display = "none";
    });

    // adds functionality to the tray button
    document.getElementById(`${name}-tray`).addEventListener("click", () => {
      document.getElementById(name).style.display = "none";
      document.getElementById(`${name}tab`).style.backgroundColor = "#bfbfbf";
    });
  }

  // adds functionality to the exit button
  document.getElementById(`${name}-exit`).addEventListener("click", () => {
    document.getElementById("windows").removeChild(document.getElementById(name));

    document.getElementById("window-tabs").removeChild(document.getElementById(`${name}tab`));

    let filteredArray = order.filter((e) => e != name); // remove window from order array
    order = filteredArray;

    windowDetails.delete(name); // remove window from movement array
  });

  bringToTop(name); // bring to top and add window to the order array
};

export const homeWindow = (num) => {
  document.getElementById("windows").insertAdjacentHTML("beforeend", homeHTML(num));

  if (popUp == true) {
    document.querySelector(`#home${num} .home-footer .icon`).innerHTML = `<i class="bx bx-checkbox-checked home-popup"></i>`;
  } else {
    document.querySelector(`#home${num} .home-footer .icon`).innerHTML = `<i class="bx bx-checkbox home-popup"></i>`;
  }

  document.querySelector(`#home${num} .icon`).addEventListener("click", () => {
    if (popUp == true) {
      popUp = false;
      document.cookie = `popup=${popUp}`; 

      document.querySelectorAll(".home").forEach(element => {
        document.querySelector(`#${element.id} .home-footer .icon`).innerHTML = `<i class="bx bx-checkbox home-popup"></i>`;
      });
    } else if (popUp == false) {
      popUp = true;
      document.cookie = `popup=${popUp}`; 

      document.querySelectorAll(".home").forEach(element => {
        document.querySelector(`#${element.id} .home-footer .icon`).innerHTML = `<i class="bx bx-checkbox-checked home-popup"></i>`;
      });
    }
  });
  
  const menuFunction = () => {
    let prevMenu = "home";

    const funct = (name) => {
      document.querySelector(`#home${num} .${name}-menu${num}`).addEventListener("click", () => {
        let text;
        switch (name) {
          case "home":
            text = homeText;
            break;
          case "icons":
            text = iconsText;
            break;
          case "windows":
            text = windowsText;
            break;
          default:
            break;
        }

        document.querySelector(`#home${num} .${name}-menu${num}`).innerHTML = `>> ${name.charAt(0).toUpperCase()}${name.slice(1)}`; // add an indicator that the current menu item is selected

        if (prevMenu != name) {
          document.querySelector(`#home${num} .${prevMenu}-menu${num}`).innerHTML = `${prevMenu.charAt(0).toUpperCase()}${prevMenu.slice(1)}`; // remove this indicator from the previously selected item
        }

        document.querySelector(`#home${num} #menu${num}-text`).innerHTML = text; // change the text to match the currently selected item
        prevMenu = name;
      });
    };

    funct("home", num);
    funct("icons", num);
    funct("windows", num);
  };

  menuFunction();
  windowSetUp(`home${num}`, "home");
};

export const portfolioWindow = (num) => {
  document.getElementById("windows").insertAdjacentHTML("beforeend", portfolioHTML(num));
  windowSetUp(`portfolio${num}`, "portfolio");

  maximize(`portfolio${num}`); // start off with the window in full view
}

export const aboutWindow = (num) => {
  document.getElementById("windows").insertAdjacentHTML("beforeend", aboutHTML(num));
  windowSetUp(`about${num}`, "about");
}

export const resumeWindow = (num) => {
  document.getElementById("windows").insertAdjacentHTML("beforeend", resumeHTML(num));   
  windowSetUp(`resume${num}`, "resume");

  maximize(`resume${num}`); // start off with the window in full view
};