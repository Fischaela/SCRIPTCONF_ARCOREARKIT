var scene = document.querySelector('a-scene');
var raycaster = document.querySelector('[ar-raycaster]');
var mark = document.querySelector('#intersection');
var debug = document.querySelector('#debug');

window.addEventListener('click', function () {
  var content = `<a-entity io3d-furniture="id:aee3e802-1435-4a89-8e8b-d6057dbf3683" shadow="cast:true"></a-entity>`;
  content.setAttribute('position', raycaster.components.cursor.intersection.point);
  scene.appendChild(content);
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
