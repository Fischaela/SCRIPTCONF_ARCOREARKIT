let scene = document.querySelector('a-scene');
let raycaster = document.querySelector('[ar-raycaster]');
let mark = document.querySelector('#intersection');

raycaster.addEventListener('click', function () {
  const content = `<a-entity io3d-furniture="id:aee3e802-1435-4a89-8e8b-d6057dbf3683" shadow="cast:true"></a-entity>`;
  content.setAttribute('position', raycaster.components.cursor.intersection.point);
  scene.appendChild(content);
});

raycaster.addEventListener('raycaster-intersection', function (e) {
  mark.setAttribute('position', e.detail.intersections[0].point);
  mark.setAttribute('visible', true);
});

raycaster.addEventListener('raycaster-intersection-cleared', function () {
  mark.setAttribute('visible', false);
});
