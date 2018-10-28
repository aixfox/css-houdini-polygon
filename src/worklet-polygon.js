registerPaint('polygon', class Polygon {
  static get inputProperties() {
    return [
      '--edge',
      '--stroke',
    ]
  }

  paint(ctx, paintSize, properties) {
    const edge = +properties.get('--edge').toString().trim();
    const stroke = properties.get('--stroke').toString().trim() || 'blue';

    if (Number.isNaN(edge) || edge < 3) {
      throw '--edge should be number which >= 3';
    }

    const { width, height } = paintSize;
    const origin = { x: width / 2, y: height / 2 };
    const radius = Math.min(width, height) / 2;

    ctx.beginPath();
    for (let i = 0; i < edge; i++) {
      const [x, y] = [
        origin.x + radius * Math.cos(2 * Math.PI * i / edge),
        origin.y + radius * Math.sin(2 * Math.PI * i / edge),
      ];

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();

    ctx.strokeStyle = stroke;
    ctx.stroke();
  }
})
