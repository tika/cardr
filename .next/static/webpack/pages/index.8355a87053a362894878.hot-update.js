"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var C_Users_capti_Develop_cardr_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_capti_Develop_cardr_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_capti_Develop_cardr_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_capti_Develop_cardr_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_capti_Develop_cardr_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\capti\\Develop\\cardr\\src\\pages\\index.tsx",
    _s = $RefreshSig$();


 // import "./styles.css";
// import data from "./users.json";
// import leaderboard from "./topscores.json";




function shuffleCards(cards) {
  // Loop through each card in the deck
  // Pick a random number between 0 and 29
  // Set this card to that index
  // Take the card from that index and make it this index
  // (This is technically a swap)
  var newCards = cards;

  for (var i = 0; i < cards.length; i++) {
    var random = Math.floor(Math.random() * 29);
    newCards[random] = newCards[i];
    newCards[i] = newCards[random];
  }

  return newCards;
}

function Deck(props) {
  // The deck is going to start from the last index
  // so we can use .pop to remove the "top" card
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
    onClick: function onClick() {
      props.onTake(props.cards[props.cards.length - 1]);
      var newCards = props.cards;
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

_c = Deck;

function PlayerDeck(props) {
  var _this = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      children: [props.player, "s Deck [", props.cards.length, " cards]"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "player-deck",
      children: props.cards.map(function (c, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "card",
          style: {
            backgroundColor: c.color
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
            children: c.number
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this);
      })
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

_c2 = PlayerDeck;
function App() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      cards = _useState[0],
      setCards = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      users = _useState2[0],
      setUsers = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1),
      turn = _useState3[0],
      setTurn = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      compare = _useState4[0],
      setCompare = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      user1Cards = _useState5[0],
      setUser1Cards = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      user2Cards = _useState6[0],
      setUser2Cards = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("none"),
      currentState = _useState7[0],
      setCurrentState = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      username = _useState8[0],
      setUsername = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      password = _useState9[0],
      setPassword = _useState9[1]; // Generate all cards


  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var currCards = [];

    for (var _i = 0, _arr = ["red", "black", "yellow"]; _i < _arr.length; _i++) {
      var x = _arr[_i];

      for (var i = 0; i < 10; i++) {
        var card = {
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

  function verifyLogin() {
    return _verifyLogin.apply(this, arguments);
  }

  function _verifyLogin() {
    _verifyLogin = (0,C_Users_capti_Develop_cardr_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_capti_Develop_cardr_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return C_Users_capti_Develop_cardr_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(users.length >= 2)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              if (!(users.filter(function (u) {
                return u.username === username;
              }).length > 0)) {
                _context.next = 5;
                break;
              }

              clearInputs();
              return _context.abrupt("return", alert("Already logged in!"));

            case 5:
              if (false // await bcrypt.compare(
              //   password,
              //   (await prisma.user.findFirst({
              //     where: { name: username },
              //   }))!.password
              // )
              // data.users.filter(
              //   (u) => u.username === username && u.password === password
              // ).length > 0
              ) {}

              setUsers([].concat((0,C_Users_capti_Develop_cardr_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(users), [{
                username: username,
                password: password
              }]));
              clearInputs();
              return _context.abrupt("return", true);

            case 11:
              return _context.abrupt("return", false);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _verifyLogin.apply(this, arguments);
  }

  function doesUserWin(compare, user) {
    var other = user === 0 ? 1 : 0;
    if (compare[user].color === "red" && compare[other].color === "black") return true;
    if (compare[user].color === "yellow" && compare[other].color === "red") return true;
    if (compare[user].color === "black" && compare[other].color === "yellow") return true;
    return false;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
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

  function topFive() {
    return _topFive.apply(this, arguments);
  } // Add to leaderboard
  // useEffect(() => {
  //   if (cards.length > 0) return;
  //   addLeaderboard(user1Cards.length > user2Cards.length ? users[0] : users[1]);
  // }, [users, cards, user1Cards, user2Cards]);


  function _topFive() {
    _topFive = (0,C_Users_capti_Develop_cardr_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_capti_Develop_cardr_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var _this2 = this;

      return C_Users_capti_Develop_cardr_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return prisma.user.findMany({
                orderBy: {
                  timesWon: "desc"
                },
                take: 5
              });

            case 2:
              return _context2.abrupt("return", _context2.sent.map(function (u, i) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                  children: u.name
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 21
                }, _this2);
              }));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _topFive.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      children: "Card game"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
      children: ["Users logged in: ", users.map(function (u) {
        return u.username;
      }).join(", ")]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }, this), users.length < 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
      onClick: function onClick() {
        return setCurrentState(currentState === "none" ? "login" : "none");
      },
      children: "Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
      onClick: function onClick() {
        return setCurrentState(currentState === "none" ? "leaderboard" : "none");
      },
      children: "Leaderboard"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }, this), currentState === "leaderboard" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
        children: "Leaderboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ol", {
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
    }, this), currentState === "login" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        placeholder: "username",
        value: username,
        onChange: function onChange(e) {
          return setUsername(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        placeholder: "password",
        value: password,
        onChange: function onChange(e) {
          return setPassword(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
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
    }, this), users.length >= 2 && cards.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Deck, {
        cards: cards,
        setCards: setCards,
        currentTurn: turn === 1 ? users[0].username : users[1].username,
        onTake: function onTake(topCard) {
          setTurn(turn === 1 ? 2 : 1);
          setCompare([].concat((0,C_Users_capti_Develop_cardr_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(compare), [topCard]));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        style: {
          display: "flex"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PlayerDeck, {
          player: users[0].username,
          cards: user1Cards
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PlayerDeck, {
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
    }, void 0, true), users.length >= 2 && cards.length <= 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
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

_s(App, "JIZn1hHMab/tRFj8Y3sBIVuvdR0=");

_c3 = App;

var _c, _c2, _c3;

$RefreshReg$(_c, "Deck");
$RefreshReg$(_c2, "PlayerDeck");
$RefreshReg$(_c3, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODM1NWE4NzA1M2EzNjI4OTQ4NzguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBO0FBQ0E7QUFDQTs7Ozs7QUFlQSxTQUFTRSxZQUFULENBQXNCQyxLQUF0QixFQUFxQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUMsUUFBUSxHQUFHRCxLQUFqQjs7QUFFQSxPQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLEtBQUssQ0FBQ0csTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7QUFDckMsUUFBTUUsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRCxNQUFMLEtBQWdCLEVBQTNCLENBQWY7QUFDQUgsSUFBQUEsUUFBUSxDQUFDRyxNQUFELENBQVIsR0FBbUJILFFBQVEsQ0FBQ0MsQ0FBRCxDQUEzQjtBQUNBRCxJQUFBQSxRQUFRLENBQUNDLENBQUQsQ0FBUixHQUFjRCxRQUFRLENBQUNHLE1BQUQsQ0FBdEI7QUFDRDs7QUFFRCxTQUFPSCxRQUFQO0FBQ0Q7O0FBU0QsU0FBU00sSUFBVCxDQUFjQyxLQUFkLEVBQWdDO0FBQzlCO0FBQ0E7QUFFQSxzQkFDRTtBQUNFLFdBQU8sRUFBRSxtQkFBTTtBQUNiQSxNQUFBQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUQsS0FBSyxDQUFDUixLQUFOLENBQVlRLEtBQUssQ0FBQ1IsS0FBTixDQUFZRyxNQUFaLEdBQXFCLENBQWpDLENBQWI7QUFFQSxVQUFNRixRQUFRLEdBQUdPLEtBQUssQ0FBQ1IsS0FBdkI7QUFDQUMsTUFBQUEsUUFBUSxDQUFDUyxHQUFUO0FBRUFGLE1BQUFBLEtBQUssQ0FBQ0csUUFBTixDQUFlVixRQUFmO0FBQ0QsS0FSSDtBQVNFLGFBQVMsRUFBQyxNQVRaO0FBQUEsZ0NBV2dCTyxLQUFLLENBQUNJLFdBWHRCO0FBQUE7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aEVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEVEOztHQTNNdUJiOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuLy8gaW1wb3J0IGRhdGEgZnJvbSBcIi4vdXNlcnMuanNvblwiO1xuLy8gaW1wb3J0IGxlYWRlcmJvYXJkIGZyb20gXCIuL3RvcHNjb3Jlcy5qc29uXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcblxuLy8gVGFzayAzIC0gTG91aXNlIENhcmQgR2FtZVxuXG5pbnRlcmZhY2UgQ2FyZCB7XG4gIGNvbG9yOiBcInJlZFwiIHwgXCJibGFja1wiIHwgXCJ5ZWxsb3dcIjtcbiAgbnVtYmVyOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBVc2VyIHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gc2h1ZmZsZUNhcmRzKGNhcmRzOiBDYXJkW10pIHtcbiAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggY2FyZCBpbiB0aGUgZGVja1xuICAvLyBQaWNrIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAgYW5kIDI5XG4gIC8vIFNldCB0aGlzIGNhcmQgdG8gdGhhdCBpbmRleFxuICAvLyBUYWtlIHRoZSBjYXJkIGZyb20gdGhhdCBpbmRleCBhbmQgbWFrZSBpdCB0aGlzIGluZGV4XG4gIC8vIChUaGlzIGlzIHRlY2huaWNhbGx5IGEgc3dhcClcblxuICBjb25zdCBuZXdDYXJkcyA9IGNhcmRzO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyOSk7XG4gICAgbmV3Q2FyZHNbcmFuZG9tXSA9IG5ld0NhcmRzW2ldO1xuICAgIG5ld0NhcmRzW2ldID0gbmV3Q2FyZHNbcmFuZG9tXTtcbiAgfVxuXG4gIHJldHVybiBuZXdDYXJkcztcbn1cblxuaW50ZXJmYWNlIERlY2tQcm9wcyB7XG4gIGNhcmRzOiBDYXJkW107XG4gIHNldENhcmRzKG5ld0NhcmRzOiBDYXJkW10pOiB2b2lkO1xuICBjdXJyZW50VHVybjogc3RyaW5nO1xuICBvblRha2UodG9wQ2FyZDogQ2FyZCk6IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIERlY2socHJvcHM6IERlY2tQcm9wcykge1xuICAvLyBUaGUgZGVjayBpcyBnb2luZyB0byBzdGFydCBmcm9tIHRoZSBsYXN0IGluZGV4XG4gIC8vIHNvIHdlIGNhbiB1c2UgLnBvcCB0byByZW1vdmUgdGhlIFwidG9wXCIgY2FyZFxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBwcm9wcy5vblRha2UocHJvcHMuY2FyZHNbcHJvcHMuY2FyZHMubGVuZ3RoIC0gMV0pO1xuXG4gICAgICAgIGNvbnN0IG5ld0NhcmRzID0gcHJvcHMuY2FyZHM7XG4gICAgICAgIG5ld0NhcmRzLnBvcCgpO1xuXG4gICAgICAgIHByb3BzLnNldENhcmRzKG5ld0NhcmRzKTtcbiAgICAgIH19XG4gICAgICBjbGFzc05hbWU9XCJkZWNrXCJcbiAgICA+XG4gICAgICBUYWtlIENhcmQgLS0ge3Byb3BzLmN1cnJlbnRUdXJufVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBQbGF5ZXJEZWNrKHByb3BzOiB7IGNhcmRzOiBDYXJkW107IHBsYXllcjogc3RyaW5nIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlxuICAgICAgICB7cHJvcHMucGxheWVyfXMgRGVjayBbe3Byb3BzLmNhcmRzLmxlbmd0aH0gY2FyZHNdXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXItZGVja1wiPlxuICAgICAgICB7cHJvcHMuY2FyZHMubWFwKChjLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGMuY29sb3IgfX0+XG4gICAgICAgICAgICA8aDE+e2MubnVtYmVyfTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2NhcmRzLCBzZXRDYXJkc10gPSB1c2VTdGF0ZTxDYXJkW10+KFtdKTtcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZTxVc2VyW10+KFtdKTtcbiAgY29uc3QgW3R1cm4sIHNldFR1cm5dID0gdXNlU3RhdGU8MSB8IDI+KDEpO1xuXG4gIGNvbnN0IFtjb21wYXJlLCBzZXRDb21wYXJlXSA9IHVzZVN0YXRlPENhcmRbXT4oW10pO1xuICBjb25zdCBbdXNlcjFDYXJkcywgc2V0VXNlcjFDYXJkc10gPSB1c2VTdGF0ZTxDYXJkW10+KFtdKTtcbiAgY29uc3QgW3VzZXIyQ2FyZHMsIHNldFVzZXIyQ2FyZHNdID0gdXNlU3RhdGU8Q2FyZFtdPihbXSk7XG5cbiAgY29uc3QgW2N1cnJlbnRTdGF0ZSwgc2V0Q3VycmVudFN0YXRlXSA9IHVzZVN0YXRlPFxuICAgIFwibm9uZVwiIHwgXCJsb2dpblwiIHwgXCJyZWdpc3RlclwiIHwgXCJsZWFkZXJib2FyZFwiXG4gID4oXCJub25lXCIpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICAvLyBHZW5lcmF0ZSBhbGwgY2FyZHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdXJyQ2FyZHMgPSBbXTtcbiAgICBmb3IgKGxldCB4IG9mIFtcInJlZFwiLCBcImJsYWNrXCIsIFwieWVsbG93XCJdKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHtcbiAgICAgICAgICBjb2xvcjogeCBhcyBcInJlZFwiIHwgXCJibGFja1wiIHwgXCJ5ZWxsb3dcIixcbiAgICAgICAgICBudW1iZXI6IGksXG4gICAgICAgIH07XG4gICAgICAgIGN1cnJDYXJkcy5wdXNoKGNhcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRDYXJkcyhzaHVmZmxlQ2FyZHMoY3VyckNhcmRzKSk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBjbGVhcklucHV0cygpIHtcbiAgICBzZXRQYXNzd29yZChcIlwiKTtcbiAgICBzZXRVc2VybmFtZShcIlwiKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHZlcmlmeUxvZ2luKCkge1xuICAgIC8vIElmIHRoZXJlJ3MgYWxyZWFkeSAyIHVzZXJzIGxvZ2dlZCBpbiwgZG9uJ3QgbGV0IG1vcmUgbG9naW5cbiAgICBpZiAodXNlcnMubGVuZ3RoID49IDIpIHJldHVybjtcblxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGlzIHVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW5cbiAgICBpZiAodXNlcnMuZmlsdGVyKCh1KSA9PiB1LnVzZXJuYW1lID09PSB1c2VybmFtZSkubGVuZ3RoID4gMCkge1xuICAgICAgY2xlYXJJbnB1dHMoKTtcbiAgICAgIHJldHVybiBhbGVydChcIkFscmVhZHkgbG9nZ2VkIGluIVwiKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0cnVlXG4gICAgICAvLyBhd2FpdCBiY3J5cHQuY29tcGFyZShcbiAgICAgIC8vICAgcGFzc3dvcmQsXG4gICAgICAvLyAgIChhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgLy8gICAgIHdoZXJlOiB7IG5hbWU6IHVzZXJuYW1lIH0sXG4gICAgICAvLyAgIH0pKSEucGFzc3dvcmRcbiAgICAgIC8vIClcbiAgICAgIC8vIGRhdGEudXNlcnMuZmlsdGVyKFxuICAgICAgLy8gICAodSkgPT4gdS51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgdS5wYXNzd29yZCA9PT0gcGFzc3dvcmRcbiAgICAgIC8vICkubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgc2V0VXNlcnMoWy4uLnVzZXJzLCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9XSk7XG4gICAgICBjbGVhcklucHV0cygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkb2VzVXNlcldpbihjb21wYXJlOiBDYXJkW10sIHVzZXI6IDAgfCAxKSB7XG4gICAgY29uc3Qgb3RoZXIgPSB1c2VyID09PSAwID8gMSA6IDA7XG5cbiAgICBpZiAoY29tcGFyZVt1c2VyXS5jb2xvciA9PT0gXCJyZWRcIiAmJiBjb21wYXJlW290aGVyXS5jb2xvciA9PT0gXCJibGFja1wiKVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAoY29tcGFyZVt1c2VyXS5jb2xvciA9PT0gXCJ5ZWxsb3dcIiAmJiBjb21wYXJlW290aGVyXS5jb2xvciA9PT0gXCJyZWRcIilcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKGNvbXBhcmVbdXNlcl0uY29sb3IgPT09IFwiYmxhY2tcIiAmJiBjb21wYXJlW290aGVyXS5jb2xvciA9PT0gXCJ5ZWxsb3dcIilcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBMT0dJQ1xuICAgIGlmIChjb21wYXJlLmxlbmd0aCA9PT0gMikge1xuICAgICAgLy8gV2UgbmVlZCB0byBydW4gdGhlIGxvZ2ljIHRvIHNlZSB3aG8gd29uXG5cbiAgICAgIC8vIElmIHRoZXkgYXJlIHRoZSBzYW1lIGNvbG9yIGFuZCBvbmUgaGFzIGEgaGlnaGVyIG51bWJlclxuICAgICAgaWYgKGNvbXBhcmVbMF0uY29sb3IgPT09IGNvbXBhcmVbMV0uY29sb3IpIHtcbiAgICAgICAgaWYgKGNvbXBhcmVbMF0ubnVtYmVyID4gY29tcGFyZVsxXS5udW1iZXIpXG4gICAgICAgICAgc2V0VXNlcjFDYXJkcyh1c2VyMUNhcmRzLmNvbmNhdChjb21wYXJlKSk7XG4gICAgICAgIGVsc2Ugc2V0VXNlcjJDYXJkcyh1c2VyMkNhcmRzLmNvbmNhdChjb21wYXJlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBkaWZmZXJlbnQgY29sb3JzLCBjYWxjdWxhdGUgd2hpY2ggY29sb3Igd2luc1xuICAgICAgICBpZiAoZG9lc1VzZXJXaW4oY29tcGFyZSwgMCkpIHNldFVzZXIxQ2FyZHModXNlcjFDYXJkcy5jb25jYXQoY29tcGFyZSkpO1xuICAgICAgICBlbHNlIHNldFVzZXIyQ2FyZHModXNlcjJDYXJkcy5jb25jYXQoY29tcGFyZSkpO1xuICAgICAgfVxuXG4gICAgICBzZXRDb21wYXJlKFtdKTtcbiAgICB9XG4gIH0sIFtjb21wYXJlLCB1c2VyMUNhcmRzLCB1c2VyMkNhcmRzXSk7XG5cbiAgLy8gZnVuY3Rpb24gYWRkTGVhZGVyYm9hcmQodXNlcjogVXNlcikge1xuICAvLyAgIGlmICghdXNlcikgcmV0dXJuO1xuICAvLyAgIGlmIChcbiAgLy8gICAgIGxlYWRlcmJvYXJkLnRvcHVzZXJzLmZpbHRlcigodSkgPT4gdS51c2VybmFtZSA9PT0gdXNlci51c2VybmFtZSkubGVuZ3RoID5cbiAgLy8gICAgIDBcbiAgLy8gICApIHtcbiAgLy8gICAgIGxlYWRlcmJvYXJkLnRvcHVzZXJzW1xuICAvLyAgICAgICBsZWFkZXJib2FyZC50b3B1c2Vycy5maW5kSW5kZXgoKHUpID0+IHUudXNlcm5hbWUgPT09IHVzZXIudXNlcm5hbWUpXG4gIC8vICAgICBdLnRpbWVzd29uICs9IDE7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGxlYWRlcmJvYXJkLnRvcHVzZXJzLnB1c2goeyAuLi51c2VyLCB0aW1lc3dvbjogMSB9KTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBhc3luYyBmdW5jdGlvbiB0b3BGaXZlKCkge1xuICAgIHJldHVybiAoXG4gICAgICBhd2FpdCBwcmlzbWEudXNlci5maW5kTWFueSh7IG9yZGVyQnk6IHsgdGltZXNXb246IFwiZGVzY1wiIH0sIHRha2U6IDUgfSlcbiAgICApLm1hcCgodSwgaSkgPT4gPGxpIGtleT17aX0+e3UubmFtZX08L2xpPik7XG4gIH1cblxuICAvLyBBZGQgdG8gbGVhZGVyYm9hcmRcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoY2FyZHMubGVuZ3RoID4gMCkgcmV0dXJuO1xuXG4gIC8vICAgYWRkTGVhZGVyYm9hcmQodXNlcjFDYXJkcy5sZW5ndGggPiB1c2VyMkNhcmRzLmxlbmd0aCA/IHVzZXJzWzBdIDogdXNlcnNbMV0pO1xuICAvLyB9LCBbdXNlcnMsIGNhcmRzLCB1c2VyMUNhcmRzLCB1c2VyMkNhcmRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPGgxPkNhcmQgZ2FtZTwvaDE+XG4gICAgICA8aDI+VXNlcnMgbG9nZ2VkIGluOiB7dXNlcnMubWFwKCh1KSA9PiB1LnVzZXJuYW1lKS5qb2luKFwiLCBcIil9PC9oMj5cbiAgICAgIHt1c2Vycy5sZW5ndGggPCAyICYmIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICBzZXRDdXJyZW50U3RhdGUoY3VycmVudFN0YXRlID09PSBcIm5vbmVcIiA/IFwibG9naW5cIiA6IFwibm9uZVwiKVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIExvZ2luXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIHNldEN1cnJlbnRTdGF0ZShjdXJyZW50U3RhdGUgPT09IFwibm9uZVwiID8gXCJsZWFkZXJib2FyZFwiIDogXCJub25lXCIpXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgTGVhZGVyYm9hcmRcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7Y3VycmVudFN0YXRlID09PSBcImxlYWRlcmJvYXJkXCIgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5MZWFkZXJib2FyZDwvaDE+XG4gICAgICAgICAgPG9sPnt0b3BGaXZlKCl9PC9vbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7Y3VycmVudFN0YXRlID09PSBcImxvZ2luXCIgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dmVyaWZ5TG9naW59PmdvPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge3VzZXJzLmxlbmd0aCA+PSAyICYmIGNhcmRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxEZWNrXG4gICAgICAgICAgICBjYXJkcz17Y2FyZHN9XG4gICAgICAgICAgICBzZXRDYXJkcz17c2V0Q2FyZHN9XG4gICAgICAgICAgICBjdXJyZW50VHVybj17dHVybiA9PT0gMSA/IHVzZXJzWzBdLnVzZXJuYW1lIDogdXNlcnNbMV0udXNlcm5hbWV9XG4gICAgICAgICAgICBvblRha2U9eyh0b3BDYXJkKSA9PiB7XG4gICAgICAgICAgICAgIHNldFR1cm4odHVybiA9PT0gMSA/IDIgOiAxKTtcblxuICAgICAgICAgICAgICBzZXRDb21wYXJlKFsuLi5jb21wYXJlLCB0b3BDYXJkXSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgIDxQbGF5ZXJEZWNrIHBsYXllcj17dXNlcnNbMF0udXNlcm5hbWV9IGNhcmRzPXt1c2VyMUNhcmRzfSAvPlxuICAgICAgICAgICAgPFBsYXllckRlY2sgcGxheWVyPXt1c2Vyc1sxXS51c2VybmFtZX0gY2FyZHM9e3VzZXIyQ2FyZHN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAge3VzZXJzLmxlbmd0aCA+PSAyICYmIGNhcmRzLmxlbmd0aCA8PSAwICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICB7dXNlcjFDYXJkcy5sZW5ndGggPiB1c2VyMkNhcmRzLmxlbmd0aFxuICAgICAgICAgICAgICA/IHVzZXJzWzBdLnVzZXJuYW1lXG4gICAgICAgICAgICAgIDogdXNlcnNbMV0udXNlcm5hbWV9e1wiIFwifVxuICAgICAgICAgICAgd29uXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic2h1ZmZsZUNhcmRzIiwiY2FyZHMiLCJuZXdDYXJkcyIsImkiLCJsZW5ndGgiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJEZWNrIiwicHJvcHMiLCJvblRha2UiLCJwb3AiLCJzZXRDYXJkcyIsImN1cnJlbnRUdXJuIiwiUGxheWVyRGVjayIsInBsYXllciIsIm1hcCIsImMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm51bWJlciIsIkFwcCIsInVzZXJzIiwic2V0VXNlcnMiLCJ0dXJuIiwic2V0VHVybiIsImNvbXBhcmUiLCJzZXRDb21wYXJlIiwidXNlcjFDYXJkcyIsInNldFVzZXIxQ2FyZHMiLCJ1c2VyMkNhcmRzIiwic2V0VXNlcjJDYXJkcyIsImN1cnJlbnRTdGF0ZSIsInNldEN1cnJlbnRTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiY3VyckNhcmRzIiwieCIsImNhcmQiLCJwdXNoIiwiY2xlYXJJbnB1dHMiLCJ2ZXJpZnlMb2dpbiIsImZpbHRlciIsInUiLCJhbGVydCIsImRvZXNVc2VyV2luIiwidXNlciIsIm90aGVyIiwiY29uY2F0IiwidG9wRml2ZSIsInByaXNtYSIsImZpbmRNYW55Iiwib3JkZXJCeSIsInRpbWVzV29uIiwidGFrZSIsIm5hbWUiLCJqb2luIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9wQ2FyZCIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9