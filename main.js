window.addEventListener('click', function () {
  var mark = document.querySelector('#mark');
  const content = `<a-entity class="sun" obj-model="obj: #sun-obj;mtl: #sun-mtl" scale="0.1 0.1 0.1"></a-entity>`;
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
