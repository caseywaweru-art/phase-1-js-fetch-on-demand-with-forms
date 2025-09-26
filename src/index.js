const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID").value;

    fetch(`http://localhost:3000/movies/${input}`)
      .then((response) => response.json())
      .then((data) => {
	appendData(data);
      })
  });
}

document.addEventListener('DOMContentLoaded', init);

function appendData(form) {
  const title = document.querySelector("section#movieDetails h4");
  const summary = document.querySelector("section#movieDetails p");

  title.innerText = form.title;
  summary.innerText = form.summary;
}
