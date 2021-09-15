'use strict';

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var $header = document.querySelector('.header');

var headerScroll = function headerScroll(header) {
  window.addEventListener('scroll', function () {
    window.pageYOffset > 0 ? header.classList.add('header--scroll') : header.classList.remove('header--scroll');
  });
};

headerScroll($header);
;
var $body = document.querySelector('body');
var $anchors = document.querySelectorAll('a[href*="#"]');
var $btnNav = document.querySelector('.btn-nav');
var $nav = document.querySelector('.header__nav');

var scrollToAnchor = function scrollToAnchor(anchors) {
  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute('href').slice(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var openNav = function openNav(btnNav, nav, body) {
  btnNav.addEventListener('click', function () {
    btnNav.classList.toggle('btn-nav--active');
    nav.classList.toggle('nav--active');
    body.classList.toggle('no-scroll');
  });
};

scrollToAnchor($anchors);
openNav($btnNav, $nav, $body);
;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkaGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyU2Nyb2xsIiwiaGVhZGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiJGJvZHkiLCIkYW5jaG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCIkYnRuTmF2IiwiJG5hdiIsInNjcm9sbFRvQW5jaG9yIiwiYW5jaG9ycyIsImFuY2hvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJsb2NrSUQiLCJnZXRBdHRyaWJ1dGUiLCJzbGljZSIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwib3Blbk5hdiIsImJ0bk5hdiIsIm5hdiIsImJvZHkiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWhCOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBWTtBQUM3QkMsRUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3BDRCxJQUFBQSxNQUFNLENBQUNFLFdBQVAsR0FBcUIsQ0FBckIsR0FBeUJILE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsZ0JBQXJCLENBQXpCLEdBQWtFTCxNQUFNLENBQUNJLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLGdCQUF4QixDQUFsRTtBQUNILEdBRkQ7QUFHSCxDQUpEOztBQU1BUCxZQUFZLENBQUNILE9BQUQsQ0FBWjtBQUNBO0FBQ0EsSUFBTVcsS0FBSyxHQUFHVixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBZDtBQUNBLElBQU1VLFFBQVEsR0FBR1gsUUFBUSxDQUFDWSxnQkFBVCxDQUEwQixjQUExQixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR2IsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWhCO0FBQ0EsSUFBTWEsSUFBSSxHQUFHZCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBYjs7QUFFQSxJQUFNYyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLE9BQUQsRUFBYTtBQUFBLDZDQUNiQSxPQURhO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBQ3ZCQyxNQUR1QjtBQUU1QkEsTUFBQUEsTUFBTSxDQUFDWixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFTYSxDQUFULEVBQVk7QUFDekNBLFFBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBLFlBQU1DLE9BQU8sR0FBR0gsTUFBTSxDQUFDSSxZQUFQLENBQW9CLE1BQXBCLEVBQTRCQyxLQUE1QixDQUFrQyxDQUFsQyxDQUFoQjtBQUVBdEIsUUFBQUEsUUFBUSxDQUFDdUIsY0FBVCxDQUF3QkgsT0FBeEIsRUFBaUNJLGNBQWpDLENBQWdEO0FBQzVDQyxVQUFBQSxRQUFRLEVBQUUsUUFEa0M7QUFFNUNDLFVBQUFBLEtBQUssRUFBRTtBQUZxQyxTQUFoRDtBQUlILE9BVEQ7QUFGNEI7O0FBQ2hDLHdEQUE0QjtBQUFBO0FBVzNCO0FBWitCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhbkMsQ0FiRDs7QUFlQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxNQUFELEVBQVNDLEdBQVQsRUFBY0MsSUFBZCxFQUF1QjtBQUNuQ0YsRUFBQUEsTUFBTSxDQUFDdkIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtBQUNuQ3VCLElBQUFBLE1BQU0sQ0FBQ3JCLFNBQVAsQ0FBaUJ3QixNQUFqQixDQUF3QixpQkFBeEI7QUFDQUYsSUFBQUEsR0FBRyxDQUFDdEIsU0FBSixDQUFjd0IsTUFBZCxDQUFxQixhQUFyQjtBQUNBRCxJQUFBQSxJQUFJLENBQUN2QixTQUFMLENBQWV3QixNQUFmLENBQXNCLFdBQXRCO0FBQ0gsR0FKRDtBQUtILENBTkQ7O0FBUUFoQixjQUFjLENBQUNKLFFBQUQsQ0FBZDtBQUNBZ0IsT0FBTyxDQUFDZCxPQUFELEVBQVVDLElBQVYsRUFBZ0JKLEtBQWhCLENBQVA7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgJGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcblxuY29uc3QgaGVhZGVyU2Nyb2xsID0gKGhlYWRlcikgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCA+IDAgPyBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLS1zY3JvbGwnKSA6IGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItLXNjcm9sbCcpO1xuICAgIH0pO1xufVxuXG5oZWFkZXJTY3JvbGwoJGhlYWRlcik7XG47XG5jb25zdCAkYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0ICRhbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmKj1cIiNcIl0nKTtcbmNvbnN0ICRidG5OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW5hdicpO1xuY29uc3QgJG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdicpO1xuXG5jb25zdCBzY3JvbGxUb0FuY2hvciA9IChhbmNob3JzKSA9PiB7XG4gICAgZm9yIChsZXQgYW5jaG9yIG9mIGFuY2hvcnMpIHtcbiAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBibG9ja0lEID0gYW5jaG9yLmdldEF0dHJpYnV0ZSgnaHJlZicpLnNsaWNlKDEpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChibG9ja0lEKS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgICAgICAgIGJsb2NrOiAnc3RhcnQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jb25zdCBvcGVuTmF2ID0gKGJ0bk5hdiwgbmF2LCBib2R5KSA9PiB7XG4gICAgYnRuTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidG5OYXYuY2xhc3NMaXN0LnRvZ2dsZSgnYnRuLW5hdi0tYWN0aXZlJyk7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCduYXYtLWFjdGl2ZScpO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25vLXNjcm9sbCcpO1xuICAgIH0pO1xufVxuXG5zY3JvbGxUb0FuY2hvcigkYW5jaG9ycyk7XG5vcGVuTmF2KCRidG5OYXYsICRuYXYsICRib2R5KTtcbjtcblxuXG4iXSwiZmlsZSI6ImFwcC5qcyJ9
