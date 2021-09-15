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

var scrollToAnchor = function scrollToAnchor(anchors, btnNav, nav, body) {
  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        btnNav.classList.remove('btn-nav--active');
        nav.classList.remove('nav--active');
        body.classList.remove('no-scroll');
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

scrollToAnchor($anchors, $btnNav, $nav, $body);
openNav($btnNav, $nav, $body);
;
var $slider = document.querySelector('.slider');
var $slideList = $slider.querySelector('.slider__list');
var $slides = $slideList.querySelectorAll('.slider__item');
var slidesLen = $slides.length;
var currentSlideClass = 'slider__item--active';
var $paginationList = $slider.querySelector('.slider__pagination');
var $paginations = $paginationList.querySelectorAll('.slider__bullet');
var currentPaginationClass = 'slider__bullet--active';
var currentSlideIndex = 0;
var swipeDirection = 0;

var goToSlide = function goToSlide(slideIndex) {
  $slides[currentSlideIndex].classList.remove(currentSlideClass);

  var _iterator2 = _createForOfIteratorHelper($paginations),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      item.classList.remove(currentPaginationClass);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  currentSlideIndex = slideIndex % slidesLen;
  $slides[currentSlideIndex].classList.add(currentSlideClass);
  $paginations[currentSlideIndex].classList.add(currentPaginationClass);
};

$slideList.ondragstart = function () {
  return false;
};

$slideList.addEventListener('pointerdown', function (event) {
  swipeDirection = event.clientX;
});
$slideList.addEventListener('pointerup', function (event) {
  swipeDirection - event.clientX >= 0 ? goToSlide(currentSlideIndex + 1) : goToSlide(currentSlideIndex - 1 + slidesLen);
});
$paginationList.addEventListener('click', function (event) {
  var pagination = event.target.closest('.slider__bullet');

  if (pagination) {
    currentSlideIndex = pagination.dataset.slideNumber - 1;

    for (var i = 0; i < $slides.length; i++) {
      $slides[i].classList.remove(currentSlideClass);
      $paginations[i].classList.remove(currentPaginationClass);
    }

    $slides[currentSlideIndex].classList.add(currentSlideClass);
    $paginations[currentSlideIndex].classList.add(currentPaginationClass);
  }
});
;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkaGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyU2Nyb2xsIiwiaGVhZGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiJGJvZHkiLCIkYW5jaG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCIkYnRuTmF2IiwiJG5hdiIsInNjcm9sbFRvQW5jaG9yIiwiYW5jaG9ycyIsImJ0bk5hdiIsIm5hdiIsImJvZHkiLCJhbmNob3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJibG9ja0lEIiwiZ2V0QXR0cmlidXRlIiwic2xpY2UiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsIm9wZW5OYXYiLCJ0b2dnbGUiLCIkc2xpZGVyIiwiJHNsaWRlTGlzdCIsIiRzbGlkZXMiLCJzbGlkZXNMZW4iLCJsZW5ndGgiLCJjdXJyZW50U2xpZGVDbGFzcyIsIiRwYWdpbmF0aW9uTGlzdCIsIiRwYWdpbmF0aW9ucyIsImN1cnJlbnRQYWdpbmF0aW9uQ2xhc3MiLCJjdXJyZW50U2xpZGVJbmRleCIsInN3aXBlRGlyZWN0aW9uIiwiZ29Ub1NsaWRlIiwic2xpZGVJbmRleCIsIml0ZW0iLCJvbmRyYWdzdGFydCIsImV2ZW50IiwiY2xpZW50WCIsInBhZ2luYXRpb24iLCJ0YXJnZXQiLCJjbG9zZXN0IiwiZGF0YXNldCIsInNsaWRlTnVtYmVyIiwiaSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBaEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFZO0FBQzdCQyxFQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDcENELElBQUFB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QUFHSyxLQUFLLENBQUNDLE9BQXhCLElBQW9DLENBQXBDLEdBQXdDTCxTQUFTLENBQUNGLGlCQUFpQixHQUFHLENBQXJCLENBQWpELEdBQTJFRSxTQUFTLENBQUNGLGlCQUFpQixHQUFHLENBQXBCLEdBQXdCTixTQUF6QixDQUFwRjtBQUNILENBRkQ7QUFJQUcsZUFBZSxDQUFDakMsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQUMwQyxLQUFELEVBQVc7QUFDakQsTUFBSUUsVUFBVSxHQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsT0FBYixDQUFxQixpQkFBckIsQ0FBakI7O0FBRUEsTUFBSUYsVUFBSixFQUFnQjtBQUNaUixJQUFBQSxpQkFBaUIsR0FBR1EsVUFBVSxDQUFDRyxPQUFYLENBQW1CQyxXQUFuQixHQUFpQyxDQUFyRDs7QUFFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdwQixPQUFPLENBQUNFLE1BQTVCLEVBQW9Da0IsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQ3BCLE1BQUFBLE9BQU8sQ0FBQ29CLENBQUQsQ0FBUCxDQUFXL0MsU0FBWCxDQUFxQkUsTUFBckIsQ0FBNEI0QixpQkFBNUI7QUFDQUUsTUFBQUEsWUFBWSxDQUFDZSxDQUFELENBQVosQ0FBZ0IvQyxTQUFoQixDQUEwQkUsTUFBMUIsQ0FBaUMrQixzQkFBakM7QUFDSDs7QUFFRE4sSUFBQUEsT0FBTyxDQUFDTyxpQkFBRCxDQUFQLENBQTJCbEMsU0FBM0IsQ0FBcUNDLEdBQXJDLENBQXlDNkIsaUJBQXpDO0FBQ0FFLElBQUFBLFlBQVksQ0FBQ0UsaUJBQUQsQ0FBWixDQUFnQ2xDLFNBQWhDLENBQTBDQyxHQUExQyxDQUE4Q2dDLHNCQUE5QztBQUNIO0FBQ0osQ0FkRDtBQWVBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCAkaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuXG5jb25zdCBoZWFkZXJTY3JvbGwgPSAoaGVhZGVyKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ID4gMCA/IGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLXNjcm9sbCcpIDogaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tc2Nyb2xsJyk7XG4gICAgfSk7XG59XG5cbmhlYWRlclNjcm9sbCgkaGVhZGVyKTtcbjtcbmNvbnN0ICRib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgJGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiI1wiXScpO1xuY29uc3QgJGJ0bk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tbmF2Jyk7XG5jb25zdCAkbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2Jyk7XG5cbmNvbnN0IHNjcm9sbFRvQW5jaG9yID0gKGFuY2hvcnMsIGJ0bk5hdiwgbmF2LCBib2R5KSA9PiB7XG4gICAgZm9yIChsZXQgYW5jaG9yIG9mIGFuY2hvcnMpIHtcbiAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnRuTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1uYXYtLWFjdGl2ZScpO1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi0tYWN0aXZlJyk7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuXG4gICAgICAgICAgICBjb25zdCBibG9ja0lEID0gYW5jaG9yLmdldEF0dHJpYnV0ZSgnaHJlZicpLnNsaWNlKDEpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChibG9ja0lEKS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgICAgICAgIGJsb2NrOiAnc3RhcnQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jb25zdCBvcGVuTmF2ID0gKGJ0bk5hdiwgbmF2LCBib2R5KSA9PiB7XG4gICAgYnRuTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidG5OYXYuY2xhc3NMaXN0LnRvZ2dsZSgnYnRuLW5hdi0tYWN0aXZlJyk7XG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ25hdi0tYWN0aXZlJyk7XG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCduby1zY3JvbGwnKTtcbiAgICB9KTtcbn1cblxuc2Nyb2xsVG9BbmNob3IoJGFuY2hvcnMsICRidG5OYXYsICRuYXYsICRib2R5KTtcbm9wZW5OYXYoJGJ0bk5hdiwgJG5hdiwgJGJvZHkpO1xuO1xuY29uc3QgJHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXInKTtcbmNvbnN0ICRzbGlkZUxpc3QgPSAkc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2xpc3QnKTtcbmNvbnN0ICRzbGlkZXMgPSAkc2xpZGVMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX2l0ZW0nKTtcbmNvbnN0IHNsaWRlc0xlbiA9ICRzbGlkZXMubGVuZ3RoO1xuY29uc3QgY3VycmVudFNsaWRlQ2xhc3MgPSAnc2xpZGVyX19pdGVtLS1hY3RpdmUnO1xuXG5jb25zdCAkcGFnaW5hdGlvbkxpc3QgPSAkc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3BhZ2luYXRpb24nKTtcbmNvbnN0ICRwYWdpbmF0aW9ucyA9ICRwYWdpbmF0aW9uTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX19idWxsZXQnKTtcbmNvbnN0IGN1cnJlbnRQYWdpbmF0aW9uQ2xhc3MgPSAnc2xpZGVyX19idWxsZXQtLWFjdGl2ZSc7XG5cbmxldCBjdXJyZW50U2xpZGVJbmRleCA9IDA7XG5sZXQgc3dpcGVEaXJlY3Rpb24gPSAwO1xuXG5jb25zdCBnb1RvU2xpZGUgPSAoc2xpZGVJbmRleCkgPT4ge1xuICAgICRzbGlkZXNbY3VycmVudFNsaWRlSW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoY3VycmVudFNsaWRlQ2xhc3MpO1xuXG4gICAgZm9yIChsZXQgaXRlbSBvZiAkcGFnaW5hdGlvbnMpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKGN1cnJlbnRQYWdpbmF0aW9uQ2xhc3MpO1xuICAgIH1cblxuICAgIGN1cnJlbnRTbGlkZUluZGV4ID0gc2xpZGVJbmRleCAgJSBzbGlkZXNMZW47XG4gICAgJHNsaWRlc1tjdXJyZW50U2xpZGVJbmRleF0uY2xhc3NMaXN0LmFkZChjdXJyZW50U2xpZGVDbGFzcyk7XG4gICAgJHBhZ2luYXRpb25zW2N1cnJlbnRTbGlkZUluZGV4XS5jbGFzc0xpc3QuYWRkKGN1cnJlbnRQYWdpbmF0aW9uQ2xhc3MpO1xufVxuXG5cbiRzbGlkZUxpc3Qub25kcmFnc3RhcnQgPSAoKSA9PiBmYWxzZTtcbiRzbGlkZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBzd2lwZURpcmVjdGlvbiA9IGV2ZW50LmNsaWVudFg7XG59KTtcbiRzbGlkZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgKGV2ZW50KSA9PiB7XG4gICAgKHN3aXBlRGlyZWN0aW9uIC0gZXZlbnQuY2xpZW50WCkgPj0gMCA/IGdvVG9TbGlkZShjdXJyZW50U2xpZGVJbmRleCArIDEpIDogZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZUluZGV4IC0gMSArIHNsaWRlc0xlbik7XG59KTtcblxuJHBhZ2luYXRpb25MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgbGV0IHBhZ2luYXRpb24gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNsaWRlcl9fYnVsbGV0Jyk7XG5cbiAgICBpZiAocGFnaW5hdGlvbikge1xuICAgICAgICBjdXJyZW50U2xpZGVJbmRleCA9IHBhZ2luYXRpb24uZGF0YXNldC5zbGlkZU51bWJlciAtIDE7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAkc2xpZGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoY3VycmVudFNsaWRlQ2xhc3MpO1xuICAgICAgICAgICAgJHBhZ2luYXRpb25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoY3VycmVudFBhZ2luYXRpb25DbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICAkc2xpZGVzW2N1cnJlbnRTbGlkZUluZGV4XS5jbGFzc0xpc3QuYWRkKGN1cnJlbnRTbGlkZUNsYXNzKTtcbiAgICAgICAgJHBhZ2luYXRpb25zW2N1cnJlbnRTbGlkZUluZGV4XS5jbGFzc0xpc3QuYWRkKGN1cnJlbnRQYWdpbmF0aW9uQ2xhc3MpO1xuICAgIH1cbn0pO1xuO1xuXG5cbiJdLCJmaWxlIjoiYXBwLmpzIn0=
