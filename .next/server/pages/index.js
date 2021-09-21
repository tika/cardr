"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\capti\\Develop\\cardr\\src\\pages\\index.tsx";
 // import "./styles.css";
// import data from "./users.json";
// import leaderboard from "./topscores.json";




function shuffleCards(cards) {
  // Loop through each card in the deck
  // Pick a random number between 0 and 29
  // Set this card to that index
  // Take the card from that index and make it this index
  // (This is technically a swap)
  const newCards = cards;

  for (let i = 0; i < cards.length; i++) {
    const random = Math.floor(Math.random() * 29);
    newCards[random] = newCards[i];
    newCards[i] = newCards[random];
  }

  return newCards;
}

function Deck(props) {
  // The deck is going to start from the last index
  // so we can use .pop to remove the "top" card
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
    onClick: () => {
      props.onTake(props.cards[props.cards.length - 1]);
      const newCards = props.cards;
      newCards.pop();
      props.setCards(newCards);
    },
    className: "deck",
    children: ["Take Card -- ", props.currentTurn]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

function PlayerDeck(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: [props.player, "s Deck [", props.cards.length, " cards]"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "player-deck",
      children: props.cards.map((c, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "card",
        style: {
          backgroundColor: c.color
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
          children: c.number
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

function App() {
  const {
    0: cards,
    1: setCards
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: users,
    1: setUsers
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: turn,
    1: setTurn
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: compare,
    1: setCompare
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: user1Cards,
    1: setUser1Cards
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: user2Cards,
    1: setUser2Cards
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: currentState,
    1: setCurrentState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("none");
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""); // Generate all cards

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const currCards = [];

    for (let x of ["red", "black", "yellow"]) {
      for (let i = 0; i < 10; i++) {
        const card = {
          color: x,
          number: i
        };
        currCards.push(card);
      }
    }

    setCards(shuffleCards(currCards));
  }, []);

  function clearInputs() {
    setPassword("");
    setUsername("");
  }

  async function verifyLogin() {
    // If there's already 2 users logged in, don't let more login
    if (users.length >= 2) return; // Check to see if this user is already logged in

    if (users.filter(u => u.username === username).length > 0) {
      clearInputs();
      return alert("Already logged in!");
    }

    if (true // await bcrypt.compare(
    //   password,
    //   (await prisma.user.findFirst({
    //     where: { name: username },
    //   }))!.password
    // )
    // data.users.filter(
    //   (u) => u.username === username && u.password === password
    // ).length > 0
    ) {
      setUsers([...users, {
        username,
        password
      }]);
      clearInputs();
      return true;
    } else {}
  }

  function doesUserWin(compare, user) {
    const other = user === 0 ? 1 : 0;
    if (compare[user].color === "red" && compare[other].color === "black") return true;
    if (compare[user].color === "yellow" && compare[other].color === "red") return true;
    if (compare[user].color === "black" && compare[other].color === "yellow") return true;
    return false;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // LOGIC
    if (compare.length === 2) {
      // We need to run the logic to see who won
      // If they are the same color and one has a higher number
      if (compare[0].color === compare[1].color) {
        if (compare[0].number > compare[1].number) setUser1Cards(user1Cards.concat(compare));else setUser2Cards(user2Cards.concat(compare));
      } else {
        // If different colors, calculate which color wins
        if (doesUserWin(compare, 0)) setUser1Cards(user1Cards.concat(compare));else setUser2Cards(user2Cards.concat(compare));
      }

      setCompare([]);
    }
  }, [compare, user1Cards, user2Cards]); // function addLeaderboard(user: User) {
  //   if (!user) return;
  //   if (
  //     leaderboard.topusers.filter((u) => u.username === user.username).length >
  //     0
  //   ) {
  //     leaderboard.topusers[
  //       leaderboard.topusers.findIndex((u) => u.username === user.username)
  //     ].timeswon += 1;
  //   } else {
  //     leaderboard.topusers.push({ ...user, timeswon: 1 });
  //   }
  // }

  async function topFive() {
    return (await prisma.user.findMany({
      orderBy: {
        timesWon: "desc"
      },
      take: 5
    })).map((u, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
      children: u.name
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 21
    }, this));
  } // Add to leaderboard
  // useEffect(() => {
  //   if (cards.length > 0) return;
  //   addLeaderboard(user1Cards.length > user2Cards.length ? users[0] : users[1]);
  // }, [users, cards, user1Cards, user2Cards]);


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: "Card game"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
      children: ["Users logged in: ", users.map(u => u.username).join(", ")]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }, this), users.length < 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: () => setCurrentState(currentState === "none" ? "login" : "none"),
      children: "Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: () => setCurrentState(currentState === "none" ? "leaderboard" : "none"),
      children: "Leaderboard"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }, this), currentState === "leaderboard" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: "Leaderboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ol", {
        children: topFive()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 9
    }, this), currentState === "login" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        placeholder: "username",
        value: username,
        onChange: e => setUsername(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        placeholder: "password",
        value: password,
        onChange: e => setPassword(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: verifyLogin,
        children: "go"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }, this), users.length >= 2 && cards.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Deck, {
        cards: cards,
        setCards: setCards,
        currentTurn: turn === 1 ? users[0].username : users[1].username,
        onTake: topCard => {
          setTurn(turn === 1 ? 2 : 1);
          setCompare([...compare, topCard]);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        style: {
          display: "flex"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PlayerDeck, {
          player: users[0].username,
          cards: user1Cards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PlayerDeck, {
          player: users[1].username,
          cards: user2Cards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 11
      }, this)]
    }, void 0, true), users.length >= 2 && cards.length <= 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: [user1Cards.length > user2Cards.length ? users[0].username : users[1].username, " ", "won"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 210,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsVUFBRDtBQUFZLGdCQUFNLEVBQUVOLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU1ksUUFBN0I7QUFBdUMsZUFBSyxFQUFFSjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUEsb0JBN0NKLEVBK0RHUixLQUFLLENBQUNsQixNQUFOLElBQWdCLENBQWhCLElBQXFCSCxLQUFLLENBQUNHLE1BQU4sSUFBZ0IsQ0FBckMsaUJBQ0M7QUFBQSw2QkFDRTtBQUFBLG1CQUNHd0IsVUFBVSxDQUFDeEIsTUFBWCxHQUFvQjBCLFVBQVUsQ0FBQzFCLE1BQS9CLEdBQ0drQixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNZLFFBRFosR0FFR1osS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTWSxRQUhmLEVBR3lCLEdBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoRUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0RUQ7Ozs7Ozs7Ozs7QUM1UkQ7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcmRyLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jYXJkci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2FyZHIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbi8vIGltcG9ydCBkYXRhIGZyb20gXCIuL3VzZXJzLmpzb25cIjtcbi8vIGltcG9ydCBsZWFkZXJib2FyZCBmcm9tIFwiLi90b3BzY29yZXMuanNvblwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5cbi8vIFRhc2sgMyAtIExvdWlzZSBDYXJkIEdhbWVcblxuaW50ZXJmYWNlIENhcmQge1xuICBjb2xvcjogXCJyZWRcIiB8IFwiYmxhY2tcIiB8IFwieWVsbG93XCI7XG4gIG51bWJlcjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgVXNlciB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHNodWZmbGVDYXJkcyhjYXJkczogQ2FyZFtdKSB7XG4gIC8vIExvb3AgdGhyb3VnaCBlYWNoIGNhcmQgaW4gdGhlIGRlY2tcbiAgLy8gUGljayBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiAwIGFuZCAyOVxuICAvLyBTZXQgdGhpcyBjYXJkIHRvIHRoYXQgaW5kZXhcbiAgLy8gVGFrZSB0aGUgY2FyZCBmcm9tIHRoYXQgaW5kZXggYW5kIG1ha2UgaXQgdGhpcyBpbmRleFxuICAvLyAoVGhpcyBpcyB0ZWNobmljYWxseSBhIHN3YXApXG5cbiAgY29uc3QgbmV3Q2FyZHMgPSBjYXJkcztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjkpO1xuICAgIG5ld0NhcmRzW3JhbmRvbV0gPSBuZXdDYXJkc1tpXTtcbiAgICBuZXdDYXJkc1tpXSA9IG5ld0NhcmRzW3JhbmRvbV07XG4gIH1cblxuICByZXR1cm4gbmV3Q2FyZHM7XG59XG5cbmludGVyZmFjZSBEZWNrUHJvcHMge1xuICBjYXJkczogQ2FyZFtdO1xuICBzZXRDYXJkcyhuZXdDYXJkczogQ2FyZFtdKTogdm9pZDtcbiAgY3VycmVudFR1cm46IHN0cmluZztcbiAgb25UYWtlKHRvcENhcmQ6IENhcmQpOiB2b2lkO1xufVxuXG5mdW5jdGlvbiBEZWNrKHByb3BzOiBEZWNrUHJvcHMpIHtcbiAgLy8gVGhlIGRlY2sgaXMgZ29pbmcgdG8gc3RhcnQgZnJvbSB0aGUgbGFzdCBpbmRleFxuICAvLyBzbyB3ZSBjYW4gdXNlIC5wb3AgdG8gcmVtb3ZlIHRoZSBcInRvcFwiIGNhcmRcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgcHJvcHMub25UYWtlKHByb3BzLmNhcmRzW3Byb3BzLmNhcmRzLmxlbmd0aCAtIDFdKTtcblxuICAgICAgICBjb25zdCBuZXdDYXJkcyA9IHByb3BzLmNhcmRzO1xuICAgICAgICBuZXdDYXJkcy5wb3AoKTtcblxuICAgICAgICBwcm9wcy5zZXRDYXJkcyhuZXdDYXJkcyk7XG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPVwiZGVja1wiXG4gICAgPlxuICAgICAgVGFrZSBDYXJkIC0tIHtwcm9wcy5jdXJyZW50VHVybn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUGxheWVyRGVjayhwcm9wczogeyBjYXJkczogQ2FyZFtdOyBwbGF5ZXI6IHN0cmluZyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5cbiAgICAgICAge3Byb3BzLnBsYXllcn1zIERlY2sgW3twcm9wcy5jYXJkcy5sZW5ndGh9IGNhcmRzXVxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyLWRlY2tcIj5cbiAgICAgICAge3Byb3BzLmNhcmRzLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjLmNvbG9yIH19PlxuICAgICAgICAgICAgPGgxPntjLm51bWJlcn08L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gdXNlU3RhdGU8Q2FyZFtdPihbXSk7XG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8VXNlcltdPihbXSk7XG4gIGNvbnN0IFt0dXJuLCBzZXRUdXJuXSA9IHVzZVN0YXRlPDEgfCAyPigxKTtcblxuICBjb25zdCBbY29tcGFyZSwgc2V0Q29tcGFyZV0gPSB1c2VTdGF0ZTxDYXJkW10+KFtdKTtcbiAgY29uc3QgW3VzZXIxQ2FyZHMsIHNldFVzZXIxQ2FyZHNdID0gdXNlU3RhdGU8Q2FyZFtdPihbXSk7XG4gIGNvbnN0IFt1c2VyMkNhcmRzLCBzZXRVc2VyMkNhcmRzXSA9IHVzZVN0YXRlPENhcmRbXT4oW10pO1xuXG4gIGNvbnN0IFtjdXJyZW50U3RhdGUsIHNldEN1cnJlbnRTdGF0ZV0gPSB1c2VTdGF0ZTxcbiAgICBcIm5vbmVcIiB8IFwibG9naW5cIiB8IFwicmVnaXN0ZXJcIiB8IFwibGVhZGVyYm9hcmRcIlxuICA+KFwibm9uZVwiKTtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgLy8gR2VuZXJhdGUgYWxsIGNhcmRzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VyckNhcmRzID0gW107XG4gICAgZm9yIChsZXQgeCBvZiBbXCJyZWRcIiwgXCJibGFja1wiLCBcInllbGxvd1wiXSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSB7XG4gICAgICAgICAgY29sb3I6IHggYXMgXCJyZWRcIiB8IFwiYmxhY2tcIiB8IFwieWVsbG93XCIsXG4gICAgICAgICAgbnVtYmVyOiBpLFxuICAgICAgICB9O1xuICAgICAgICBjdXJyQ2FyZHMucHVzaChjYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0Q2FyZHMoc2h1ZmZsZUNhcmRzKGN1cnJDYXJkcykpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gY2xlYXJJbnB1dHMoKSB7XG4gICAgc2V0UGFzc3dvcmQoXCJcIik7XG4gICAgc2V0VXNlcm5hbWUoXCJcIik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiB2ZXJpZnlMb2dpbigpIHtcbiAgICAvLyBJZiB0aGVyZSdzIGFscmVhZHkgMiB1c2VycyBsb2dnZWQgaW4sIGRvbid0IGxldCBtb3JlIGxvZ2luXG4gICAgaWYgKHVzZXJzLmxlbmd0aCA+PSAyKSByZXR1cm47XG5cbiAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhpcyB1c2VyIGlzIGFscmVhZHkgbG9nZ2VkIGluXG4gICAgaWYgKHVzZXJzLmZpbHRlcigodSkgPT4gdS51c2VybmFtZSA9PT0gdXNlcm5hbWUpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNsZWFySW5wdXRzKCk7XG4gICAgICByZXR1cm4gYWxlcnQoXCJBbHJlYWR5IGxvZ2dlZCBpbiFcIik7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHJ1ZVxuICAgICAgLy8gYXdhaXQgYmNyeXB0LmNvbXBhcmUoXG4gICAgICAvLyAgIHBhc3N3b3JkLFxuICAgICAgLy8gICAoYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgIC8vICAgICB3aGVyZTogeyBuYW1lOiB1c2VybmFtZSB9LFxuICAgICAgLy8gICB9KSkhLnBhc3N3b3JkXG4gICAgICAvLyApXG4gICAgICAvLyBkYXRhLnVzZXJzLmZpbHRlcihcbiAgICAgIC8vICAgKHUpID0+IHUudXNlcm5hbWUgPT09IHVzZXJuYW1lICYmIHUucGFzc3dvcmQgPT09IHBhc3N3b3JkXG4gICAgICAvLyApLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIHNldFVzZXJzKFsuLi51c2VycywgeyB1c2VybmFtZSwgcGFzc3dvcmQgfV0pO1xuICAgICAgY2xlYXJJbnB1dHMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZG9lc1VzZXJXaW4oY29tcGFyZTogQ2FyZFtdLCB1c2VyOiAwIHwgMSkge1xuICAgIGNvbnN0IG90aGVyID0gdXNlciA9PT0gMCA/IDEgOiAwO1xuXG4gICAgaWYgKGNvbXBhcmVbdXNlcl0uY29sb3IgPT09IFwicmVkXCIgJiYgY29tcGFyZVtvdGhlcl0uY29sb3IgPT09IFwiYmxhY2tcIilcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKGNvbXBhcmVbdXNlcl0uY29sb3IgPT09IFwieWVsbG93XCIgJiYgY29tcGFyZVtvdGhlcl0uY29sb3IgPT09IFwicmVkXCIpXG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGlmIChjb21wYXJlW3VzZXJdLmNvbG9yID09PSBcImJsYWNrXCIgJiYgY29tcGFyZVtvdGhlcl0uY29sb3IgPT09IFwieWVsbG93XCIpXG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gTE9HSUNcbiAgICBpZiAoY29tcGFyZS5sZW5ndGggPT09IDIpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gcnVuIHRoZSBsb2dpYyB0byBzZWUgd2hvIHdvblxuXG4gICAgICAvLyBJZiB0aGV5IGFyZSB0aGUgc2FtZSBjb2xvciBhbmQgb25lIGhhcyBhIGhpZ2hlciBudW1iZXJcbiAgICAgIGlmIChjb21wYXJlWzBdLmNvbG9yID09PSBjb21wYXJlWzFdLmNvbG9yKSB7XG4gICAgICAgIGlmIChjb21wYXJlWzBdLm51bWJlciA+IGNvbXBhcmVbMV0ubnVtYmVyKVxuICAgICAgICAgIHNldFVzZXIxQ2FyZHModXNlcjFDYXJkcy5jb25jYXQoY29tcGFyZSkpO1xuICAgICAgICBlbHNlIHNldFVzZXIyQ2FyZHModXNlcjJDYXJkcy5jb25jYXQoY29tcGFyZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgZGlmZmVyZW50IGNvbG9ycywgY2FsY3VsYXRlIHdoaWNoIGNvbG9yIHdpbnNcbiAgICAgICAgaWYgKGRvZXNVc2VyV2luKGNvbXBhcmUsIDApKSBzZXRVc2VyMUNhcmRzKHVzZXIxQ2FyZHMuY29uY2F0KGNvbXBhcmUpKTtcbiAgICAgICAgZWxzZSBzZXRVc2VyMkNhcmRzKHVzZXIyQ2FyZHMuY29uY2F0KGNvbXBhcmUpKTtcbiAgICAgIH1cblxuICAgICAgc2V0Q29tcGFyZShbXSk7XG4gICAgfVxuICB9LCBbY29tcGFyZSwgdXNlcjFDYXJkcywgdXNlcjJDYXJkc10pO1xuXG4gIC8vIGZ1bmN0aW9uIGFkZExlYWRlcmJvYXJkKHVzZXI6IFVzZXIpIHtcbiAgLy8gICBpZiAoIXVzZXIpIHJldHVybjtcbiAgLy8gICBpZiAoXG4gIC8vICAgICBsZWFkZXJib2FyZC50b3B1c2Vycy5maWx0ZXIoKHUpID0+IHUudXNlcm5hbWUgPT09IHVzZXIudXNlcm5hbWUpLmxlbmd0aCA+XG4gIC8vICAgICAwXG4gIC8vICAgKSB7XG4gIC8vICAgICBsZWFkZXJib2FyZC50b3B1c2Vyc1tcbiAgLy8gICAgICAgbGVhZGVyYm9hcmQudG9wdXNlcnMuZmluZEluZGV4KCh1KSA9PiB1LnVzZXJuYW1lID09PSB1c2VyLnVzZXJuYW1lKVxuICAvLyAgICAgXS50aW1lc3dvbiArPSAxO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBsZWFkZXJib2FyZC50b3B1c2Vycy5wdXNoKHsgLi4udXNlciwgdGltZXN3b246IDEgfSk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdG9wRml2ZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoeyBvcmRlckJ5OiB7IHRpbWVzV29uOiBcImRlc2NcIiB9LCB0YWtlOiA1IH0pXG4gICAgKS5tYXAoKHUsIGkpID0+IDxsaSBrZXk9e2l9Pnt1Lm5hbWV9PC9saT4pO1xuICB9XG5cbiAgLy8gQWRkIHRvIGxlYWRlcmJvYXJkXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKGNhcmRzLmxlbmd0aCA+IDApIHJldHVybjtcblxuICAvLyAgIGFkZExlYWRlcmJvYXJkKHVzZXIxQ2FyZHMubGVuZ3RoID4gdXNlcjJDYXJkcy5sZW5ndGggPyB1c2Vyc1swXSA6IHVzZXJzWzFdKTtcbiAgLy8gfSwgW3VzZXJzLCBjYXJkcywgdXNlcjFDYXJkcywgdXNlcjJDYXJkc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxoMT5DYXJkIGdhbWU8L2gxPlxuICAgICAgPGgyPlVzZXJzIGxvZ2dlZCBpbjoge3VzZXJzLm1hcCgodSkgPT4gdS51c2VybmFtZSkuam9pbihcIiwgXCIpfTwvaDI+XG4gICAgICB7dXNlcnMubGVuZ3RoIDwgMiAmJiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgc2V0Q3VycmVudFN0YXRlKGN1cnJlbnRTdGF0ZSA9PT0gXCJub25lXCIgPyBcImxvZ2luXCIgOiBcIm5vbmVcIilcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICBMb2dpblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICBzZXRDdXJyZW50U3RhdGUoY3VycmVudFN0YXRlID09PSBcIm5vbmVcIiA/IFwibGVhZGVyYm9hcmRcIiA6IFwibm9uZVwiKVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIExlYWRlcmJvYXJkXG4gICAgICA8L2J1dHRvbj5cblxuICAgICAge2N1cnJlbnRTdGF0ZSA9PT0gXCJsZWFkZXJib2FyZFwiICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+TGVhZGVyYm9hcmQ8L2gxPlxuICAgICAgICAgIDxvbD57dG9wRml2ZSgpfTwvb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge2N1cnJlbnRTdGF0ZSA9PT0gXCJsb2dpblwiICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ZlcmlmeUxvZ2lufT5nbzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHt1c2Vycy5sZW5ndGggPj0gMiAmJiBjYXJkcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RGVja1xuICAgICAgICAgICAgY2FyZHM9e2NhcmRzfVxuICAgICAgICAgICAgc2V0Q2FyZHM9e3NldENhcmRzfVxuICAgICAgICAgICAgY3VycmVudFR1cm49e3R1cm4gPT09IDEgPyB1c2Vyc1swXS51c2VybmFtZSA6IHVzZXJzWzFdLnVzZXJuYW1lfVxuICAgICAgICAgICAgb25UYWtlPXsodG9wQ2FyZCkgPT4ge1xuICAgICAgICAgICAgICBzZXRUdXJuKHR1cm4gPT09IDEgPyAyIDogMSk7XG5cbiAgICAgICAgICAgICAgc2V0Q29tcGFyZShbLi4uY29tcGFyZSwgdG9wQ2FyZF0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgICA8UGxheWVyRGVjayBwbGF5ZXI9e3VzZXJzWzBdLnVzZXJuYW1lfSBjYXJkcz17dXNlcjFDYXJkc30gLz5cbiAgICAgICAgICAgIDxQbGF5ZXJEZWNrIHBsYXllcj17dXNlcnNbMV0udXNlcm5hbWV9IGNhcmRzPXt1c2VyMkNhcmRzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIHt1c2Vycy5sZW5ndGggPj0gMiAmJiBjYXJkcy5sZW5ndGggPD0gMCAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAge3VzZXIxQ2FyZHMubGVuZ3RoID4gdXNlcjJDYXJkcy5sZW5ndGhcbiAgICAgICAgICAgICAgPyB1c2Vyc1swXS51c2VybmFtZVxuICAgICAgICAgICAgICA6IHVzZXJzWzFdLnVzZXJuYW1lfXtcIiBcIn1cbiAgICAgICAgICAgIHdvblxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzaHVmZmxlQ2FyZHMiLCJjYXJkcyIsIm5ld0NhcmRzIiwiaSIsImxlbmd0aCIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsIkRlY2siLCJwcm9wcyIsIm9uVGFrZSIsInBvcCIsInNldENhcmRzIiwiY3VycmVudFR1cm4iLCJQbGF5ZXJEZWNrIiwicGxheWVyIiwibWFwIiwiYyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibnVtYmVyIiwiQXBwIiwidXNlcnMiLCJzZXRVc2VycyIsInR1cm4iLCJzZXRUdXJuIiwiY29tcGFyZSIsInNldENvbXBhcmUiLCJ1c2VyMUNhcmRzIiwic2V0VXNlcjFDYXJkcyIsInVzZXIyQ2FyZHMiLCJzZXRVc2VyMkNhcmRzIiwiY3VycmVudFN0YXRlIiwic2V0Q3VycmVudFN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjdXJyQ2FyZHMiLCJ4IiwiY2FyZCIsInB1c2giLCJjbGVhcklucHV0cyIsInZlcmlmeUxvZ2luIiwiZmlsdGVyIiwidSIsImFsZXJ0IiwiZG9lc1VzZXJXaW4iLCJ1c2VyIiwib3RoZXIiLCJjb25jYXQiLCJ0b3BGaXZlIiwicHJpc21hIiwiZmluZE1hbnkiLCJvcmRlckJ5IiwidGltZXNXb24iLCJ0YWtlIiwibmFtZSIsImpvaW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b3BDYXJkIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=