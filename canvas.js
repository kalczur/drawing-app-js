window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const color = document.querySelector("#color");
  const thick = document.querySelector("#thick");
  const clear = document.querySelector("#clear");
  const ctx = canvas.getContext("2d");

  //size on start
  canvas.height = window.innerHeight - window.innerHeight / 9;
  canvas.width = window.innerWidth;

  //varibles
  let painting = false;

  const startPosition = e => {
    painting = true;
    draw(e);
  };
  const finishedPosition = () => {
    painting = false;
    ctx.beginPath();
  };
  const draw = e => {
    if (!painting) return;

    ctx.lineWidth = thick.value;
    ctx.lineCap = "round"; //dodaj do wybou
    ctx.strokeStyle = color.value;

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  };
  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  //events
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
  clear.addEventListener("click", clearCanvas);
});

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight - window.innerHeight / 9;
  canvas.width = window.innerWidth;
});
