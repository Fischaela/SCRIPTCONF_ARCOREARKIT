var scene = document.querySelector('a-scene');
var raycaster = document.querySelector('[ar-raycaster]');
var mark = document.querySelector('#intersection');
var debug = document.querySelector('#debug');

window.addEventListener('click', function () {
  let content = `<a-entity io3d-furniture="id:cc71c2ff-a01c-459c-aadb-e9ff8d398212"></a-entity>`;
  let el = document.createElement('a-entity');
  let position = mark.getAttribute('position');

  debug.innerHTML = 'CLICK' +  JSON.stringify(raycaster.components.cursor.intersection.point);
  AFRAME.scenes[0].appendChild(el);
  el.innerHTML = content;  el.setAttribute('position', position);
});

raycaster.addEventListener('raycaster-intersection', function (e) {
  debug.innerHTML = 'INTERSECTION' + JSON.stringify(e.detail.intersections[0].point);
  mark.setAttribute('position', e.detail.intersections[0].point);
  mark.setAttribute('color', 'green');
});

raycaster.addEventListener('raycaster-intersection-cleared', function (e) {
  debug.innerHTML = 'CLEARED' + JSON.stringify(e.detail.intersections[0].point);
  mark.setAttribute('color', 'red');
});
