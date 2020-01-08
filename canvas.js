
window.addEventListener("load", () => {
  console.clear();
  const canvas = document.querySelector("#canvas");
  const penColor = document.querySelector("#penColor");
  const thick = document.querySelector("#thick");
  const clear = document.querySelector("#clear");
  const bgColor = document.querySelector("#bgColor");
  const save = document.querySelector("#save");
  const ham = document.querySelector("#ham");
  const col = document.querySelector("#toolKit .col");
  const btn = document.querySelector("#toolKit .btn");
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
    ctx.lineCap = "round";
    ctx.strokeStyle = penColor.value;

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  };
  const changeBgColor = () => {
    ctx.fillStyle = bgColor.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  const saveCanvas = () => {
    const src = canvas.toDataURL("image/png");
    const w = window.open('about:blank','image from canvas');
    w.document.write(`<img src="${src}" alt="from canvas">`);
  };
  const showList = () => {
    btn.style.display = "block";
    col.style.display = "block";
  };

  //events
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
  clear.addEventListener("click", clearCanvas);
  bgColor.addEventListener("change", changeBgColor);
  save.addEventListener("click", saveCanvas);
  ham.addEventListener("click", showList);

  console.log(ctx);
});

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight - window.innerHeight / 9;
  canvas.width = window.innerWidth;
});
