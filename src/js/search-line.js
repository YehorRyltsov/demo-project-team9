const formEl = document.querySelector("");
const formWarning = document.querySelector("")

formEl.addEventListener("submit", submitFormEvtHandler);

function submitFormEvtHandler (evt){
  evt.preventDefault();
  const page = 1;

  const inputValue = formEl.value.replace(/\s+/g, ' ').trim();

  if (inputValue.length <= 1) {
    return (formWarning.textContent =
      'No matches found for your query. Enter the correct movie name.');
  }
}


