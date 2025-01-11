const container = document.querySelector(".container");
let rotateX = 0;
let rotateY = 0;

container.addEventListener("mousemove", (e) => {
  const { offsetWidth: width, offsetHeight: height } = container;
  const { offsetX: x, offsetY: y } = e;

  rotateX = (y / height - 0.5) * 90; // Adjust rotation intensity
  rotateY = (x / width - 0.5) * 90;

  container.style.setProperty("--rotateX", `${rotateX}deg`);
  container.style.setProperty("--rotateY", `${rotateY}deg`);
});

container.addEventListener("mouseleave", () => {
  container.style.setProperty("--rotateX", "0deg");
  container.style.setProperty("--rotateY", "0deg");
});
