function getElements(){
    const result = {};

    result.title = document.querySelector(".title")
    result.text = document.querySelector(".text")
    result.valy = document.querySelector(".value")

    return result;
}


function getElements() {
  return {
    cat: document.querySelector('#cat'),
    dog: document.querySelector('#dog'),
  };
}


function getDateParts(date) {
  let parts = {};
  parts.year = date.getFullYear();
  parts.month = date.getMonth() + 1;
  parts.day = date.getDate();
  return parts;
}