function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //se tiver light mode, adcionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //sem light mode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  // pegar a tag img 

  //substituir a imagem
}
