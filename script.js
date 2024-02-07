const rootElement = document.querySelector("#root")


books.forEach((book, index) => 
  rootElement.insertAdjacentHTML("beforeend", `
  <div class="book">
  <h2 class="sub">${book.sub}</h2>
          <p class="title">${book.title}</p>
          <div class="text">${book.text}</div>
          <div class="number">${index +1}</div>
          <div class="readmore">read more</div>
      </div>
  `))
