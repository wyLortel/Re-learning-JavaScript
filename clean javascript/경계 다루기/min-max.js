const MIN_VALUE = 1;
const MAX_VALUE = 100;

generateRandomNumber(MIN_VALUE, MAX_VALUE);


function isAdult(age,maxAge){
    return age >= 20 && age < maxAge;
}

setReservationDate(beginDate, endDate);


class Language {
  set current(value) {
    this._current = value;
  }

  get current() {
    return this._current;
  }
}