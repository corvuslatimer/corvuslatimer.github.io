(function () {
  const canvas = document.createElement('canvas');
  canvas.id = 'feather-canvas';
  Object.assign(canvas.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: '0',
  });
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');
  let feathers = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function spawnFeather() {
    feathers.push({
      x: Math.random() * canvas.width,
      y: -40,
      size: Math.random() * 18 + 10,
      speed: Math.random() * 0.6 + 0.3,
      drift: Math.random() * 0.4 - 0.2,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.01,
      opacity: Math.random() * 0.25 + 0.04,
    });
  }

  function drawFeather(f) {
    ctx.save();
    ctx.translate(f.x, f.y);
    ctx.rotate(f.rotation);
    ctx.globalAlpha = f.opacity;
    ctx.strokeStyle = '#c9a84c';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -f.size);
    ctx.bezierCurveTo(f.size * 0.5, -f.size * 0.5, f.size * 0.4, f.size * 0.3, 0, f.size);
    ctx.bezierCurveTo(-f.size * 0.4, f.size * 0.3, -f.size * 0.5, -f.size * 0.5, 0, -f.size);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, -f.size);
    ctx.lineTo(0, f.size);
    ctx.stroke();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < 0.015) spawnFeather();
    feathers = feathers.filter(f => f.y < canvas.height + 60);
    feathers.forEach(f => {
      f.y += f.speed;
      f.x += f.drift;
      f.rotation += f.rotSpeed;
      drawFeather(f);
    });
    requestAnimationFrame(animate);
  }
  animate();
})();
