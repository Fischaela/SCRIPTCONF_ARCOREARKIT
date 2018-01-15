window.addEventListener('click', function () {
  var mark = document.querySelector('#mark');
  const content = `<a-entity io3d-furniture="id:10344b13-d981-47a0-90ac-f048ee2780a6" position="-2 0 -3.2" rotation="0 180 0"></a-entity>`;
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
