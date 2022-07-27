/* Start Fixed */

let upArrow = document.querySelector(".fixed");

window.addEventListener("scroll", () => {
  if (this.scrollY >= about.offsetTop - 300) {
    upArrow.classList.add("show");
  } else {
    upArrow.classList.remove("show");
  }
});

upArrow.onclick = () => {
  header.scrollIntoView({
    behavior: "smooth",
  });
};

/* End Fixed */

/* Start Header */

let header = document.querySelector("header");

let navBar = document.querySelector("header .head-one .nav-bar .fa-bars");
let barIcon = document.querySelector(
  "header .head-one .nav-bar .top-overlay i"
);
let topOverlay = document.querySelector(
  "header .head-one .nav-bar .top-overlay"
);

function navigationBAr(nav) {
  nav.onclick = () => {
    nav.style.display = "none";
    topOverlay.style.top = "0";

    barIcon.onclick = function () {
      topOverlay.style.top = "-100%";
      nav.style.display = "block";
    };
  };

  window.addEventListener("scroll", () => {
    if (this.scrollY >= 100) {
      topOverlay.style.top = "-100%";
      navBar.style.display = "block";
    }
  });
}
navigationBAr(navBar);

let myH1cove = document.querySelector("header .head-two .h1");
let myH1move = document.querySelector("header .head-two .h2");

window.addEventListener("load", () => {
  myH1cove.style.right = "0";
  myH1move.style.right = "0";
});

let li1Click = document.getElementById("home");
let li2Click = document.getElementById("about");
let li3Click = document.getElementById("books");
let li4Click = document.getElementById("blogs");
let li5Click = document.getElementById("testimonials");
let li6Click = document.getElementById("contact");

let booksS = document.querySelector(".books");
let blogsS = document.querySelector(".blog");
let testimonialsS = document.querySelector(".testimonial");
let contactS = document.querySelector("footer");

li1Click.onclick = () => {
  header.scrollIntoView({
    behavior: "smooth",
  });
  topOverlay.style.top = "-100%";
  navBar.style.display = "block";
};

li2Click.onclick = () => {
  about.scrollIntoView({
    behavior: "smooth",
  });
  topOverlay.style.top = "-100%";
  navBar.style.display = "block";
};

li3Click.onclick = () => {
  booksS.scrollIntoView({
    behavior: "smooth",
  });
  topOverlay.style.top = "-100%";
  navBar.style.display = "block";
};

li4Click.onclick = () => {
  blogsS.scrollIntoView({
    behavior: "smooth",
  });
  topOverlay.style.top = "-100%";
  navBar.style.display = "block";
};

li5Click.onclick = () => {
  testimonialsS.scrollIntoView({
    behavior: "smooth",
  });
  topOverlay.style.top = "-100%";
  navBar.style.display = "block";
};

li6Click.onclick = () => {
  contactS.scrollIntoView({
    behavior: "smooth",
  });
  topOverlay.style.top = "-100%";
  navBar.style.display = "block";
};

/* End Header */

/* Start About */

let about = document.querySelector(".about");
let aboutSection = document.querySelector(".about .son");

window.addEventListener("scroll", () => {
  if (window.scrollY >= about.offsetTop - 200) {
    aboutSection.style.left = "160px";
  }
});

/* End About */

/* Start Books Section */

let overlayImg = document.querySelectorAll(".books .book .image img");

overlayImg.forEach((element) => {
  element.addEventListener("click", () => {
    let popup = document.createElement("div");
    popup.className = "popup";

    let boxImg = document.createElement("div");
    boxImg.className = "img-box";

    let imgInBox = document.createElement("img");
    imgInBox.className = "popup-img";
    imgInBox.src = element.src;

    let altInBox = document.createElement("h2");
    altInBox.className = "alt-box";
    let altTExt = document.createTextNode(element.alt);

    let myIconR = document.createElement("i");
    myIconR.className = "far fa-times-circle";
    myIconR.classList.add("icon-remove");
    myIconR.style.cursor = "pointer";

    myIconR.onclick = () => {
      popup.remove();
    };

    popup.appendChild(myIconR);
    altInBox.appendChild(altTExt);
    boxImg.appendChild(altInBox);
    boxImg.appendChild(imgInBox);
    popup.appendChild(boxImg);
    document.body.appendChild(popup);

    window.onscroll = () => {
      popup.remove();
    };
  });
});

let rateColor = localStorage.setItem("color", "#ffd200");
let getColorRate = localStorage.getItem("color");

let bookRate = document.querySelectorAll(".books .book .rate i");
let bookFate = document.querySelectorAll(".books .book .fate i");
let bookTate = document.querySelectorAll(".books .book .tate i");
let bookCace = document.querySelectorAll(".books .book .cace i");

function startsRate(bookRate) {
  bookRate.forEach((element, index) => {
    element.onclick = () => {
      bookRate.forEach((otherStart, otherIndex) => {
        if (otherIndex <= index) {
          otherStart.style.color = getColorRate;
        }
      });
    };
  });
}
startsRate(bookRate);
startsRate(bookFate);
startsRate(bookCace);
startsRate(bookTate);

/* End Books Section */

/* Start Information section */

let information = document.querySelector(".information");
let myInfoNum = document.querySelectorAll(".information .box h1");
let justOne = false;

window.onscroll = function () {
  if (window.scrollY >= information.offsetTop - 700) {
    if (!justOne) {
      myInfoNum.forEach((numOfInfo) => {
        let startIn = setInterval(() => {
          let endIn = numOfInfo.dataset.num;
          numOfInfo.textContent++;

          if (numOfInfo.textContent == endIn) {
            clearInterval(startIn);
          }
        });
      }, 1);
    }
    justOne = true;
  }
};

/* End Information section */

/* Start Blog section */

let firstBlog = document.querySelector(".blog .box:nth-child(1)");
let secondBlog = document.querySelector(".blog .box:nth-child(2)");
let blogBox = document.querySelectorAll(".blog .container");

window.addEventListener("scroll", () => {
  if (this.scrollY >= information.offsetTop) {
    blogBox.forEach((element) => {
      element.style.display = "flex";
    });
    firstBlog.style.cssText = "animation: fadeInLeft;animation-duration: 1s;";
    secondBlog.style.cssText = "animation: fadeInRight;animation-duration: 1s;";
  }
});

/* End Blog section */

/* Start social media */

let faceBook = document.querySelector(".fa-facebook");
let instagram = document.querySelector(".fa-instagram");
let linkDin = document.querySelector("fa-linkedin-in");
let twitter = document.querySelector("fa-twitter");

faceBook.onclick = () => {
  location.href = "https://www.facebook.com/profile.php?id=100073426375815";
};
instagram.onclick = () => {
  location.href = "https://www.instagram.com/khaled_mbb/";
};
// linkDin.onclick = () => {
//   location.href = "https://www.linkedin.com/in/khaled-mabrouki-875046237/";
// };
// twitter.onclick = () => {
//   location.href = "https://twitter.com/khaledmabrouki7";
// };

/* End social media */

/* Start Footer */

/* Start Footer Form contact */

let myEmailContact = document.getElementById("email");

myEmailContact.onclick = () => {
  location.href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox";
};

const myForm = document.querySelector("form");
const myUserName = document.querySelector('form input[type="text"]');
const myEmail = document.querySelector('form input[type="email"]');
const mySubmit = document.querySelector('form input[type="submit"]');

myForm.onsubmit = (e) => {
  if (myUserName.value === "" || myEmail.value === "") {
    e.preventDefault();
    let inputWrong = document.createElement("div");
    inputWrong.className = "input-wrong";
    let d = document.createTextNode(
      "maybe you should write a valid username and email"
    );
    let iconWrong = document.createElement("h3");
    let iconText = document.createTextNode("X");
    iconWrong.className = "times";
    iconWrong.onclick = () => {
      inputWrong.remove();
    };

    window.addEventListener("scroll", () => {
      if (this.scrollY <= 4100) {
        inputWrong.remove();
      }
    });

    iconWrong.appendChild(iconText);
    inputWrong.appendChild(iconWrong);
    inputWrong.appendChild(d);
    document.body.appendChild(inputWrong);
  }
};

/* End Footer Form contact */

let endChangeWord = document.querySelector(".end h3 span");
let suggestedWord = ["KHaLeD", "MabRoUki", "BisKRa", "PaLesTine"];

setInterval(() => {
  let randomWord = Math.floor(Math.random() * suggestedWord.length);
  endChangeWord.innerHTML = suggestedWord[randomWord];
}, 1000);

/* End Footer */
