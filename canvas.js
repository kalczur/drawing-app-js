window.addEventListener("load", () => {
    console.clear();
    const canvas = document.querySelector(".canvas");
    const penColor = document.querySelector(".penColor");
    const minusThick = document.querySelector(".minusThick");
    const plusThick = document.querySelector(".plusThick");
    const clear = document.querySelector(".clear");
    const bgColor = document.querySelector(".canvasColor");
    const save = document.querySelector(".save");
    const ctx = canvas.getContext("2d");

    //size on start
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //varibles
    let painting = false;
    let thickSize = 5;

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
        console.log(thickSize);
        console.log(penColor.value);
        ctx.lineWidth = thickSize;
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

    const saveCanvas = () => {
        const src = canvas.toDataURL("image/png");
        const w = window.open("about:blank", "image from canvas");
        w.document.write(`<img src="${src}" alt="from canvas">`);
    };

    //events
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    clear.addEventListener("click", changeBgColor);
    bgColor.addEventListener("change", changeBgColor);
    save.addEventListener("click", saveCanvas);

    minusThick.addEventListener("click", () => {
        thickSize--;
    });
    plusThick.addEventListener("click", () => {
        thickSize++;
    });
});

window.addEventListener("resize", () => {
    const canvas = document.querySelector(".canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
