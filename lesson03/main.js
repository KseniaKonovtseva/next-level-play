const lang = "ru";

if (lang == "ru") {
  console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
} else if (lang == "en") {
  console.log("Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday");
};

switch (true) {
  case lang == "ru":
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
    break;

  case lang == "en":
    console.log("Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday");
    break;
}

const arr = [];
  arr["ru"] = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
  arr["en"] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(arr[lang]);



const namePerson = "Александра";
const personIs = (namePerson == "Артем") ? console.log("директор") :
                 (namePerson == "Александр") ? console.log("преподаватель") :
                                                console.log("студент");