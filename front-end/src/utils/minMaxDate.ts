const MIN_AGE = 18;
const toDay = new Date();
const day = toDay.getDate();
const month = toDay.getMonth() + 1;
const year = toDay.getFullYear();

const maxInputDate = `${year-MIN_AGE}-${String(month)
    .padStart(2, '0')}-${String(day).padStart(2, '0')}`;

export {maxInputDate};
