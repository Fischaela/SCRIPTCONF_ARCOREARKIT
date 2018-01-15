window.addEventListener('click', function () {
  var mark = document.querySelector('#mark');
  const content = `<a-entity io3d-furniture="id:aee3e802-1435-4a89-8e8b-d6057dbf3683" position="0 0 0" rotation="0 180 0" shadow></a-entity>`;
  var el = document.createElement('a-entity');

  AFRAME.scenes[0].appendChild(el);
  el.innerHTML = content;
  var position = mark.getAttribute('position');
  el.setAttribute('position', position);
});

var raycaster = document.querySelector('[ar-raycaster]');
var mark = document.querySelector('#mark');

raycaster.addEventListener('raycaster-intersection', function (evt) {
  mark.setAttribute('color', 'green');
  mark.setAttribute('position', evt.detail.intersections[0].point);
});

raycaster.addEventListener('raycaster-intersection-cleared', function (evt) {
  mark.setAttribute('color', 'red');
});
