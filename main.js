let scene = document.querySelector('a-scene');
let raycaster = document.querySelector('[ar-raycaster]');
let mark = document.querySelector('#intersection');

raycaster.addEventListener('raycaster-intersection', function (e) {
  mark.setAttribute('position', e.detail.intersections[0].point);
  mark.setAttribute('visible', true);
});

raycaster.addEventListener('raycaster-intersection-cleared', function (e) {
  mark.setAttribute('visible', false);
});

window.addEventListener('click', function () {
  let furniture = document.querySelector('[io3d-furniture]');
  let position = mark.getAttribute('position');
  furniture.setAttribute('position', position);
  furniture.setAttribute('visible', true);
});
