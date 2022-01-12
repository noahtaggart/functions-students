const student1 = {
    name: "Olivia",
    grade:14,
}

const addMathGrade = (student1) => {
    student1.math = "B"
    return student1
}

let result = addMathGrade(student1)

const addHistoryGrade = (student1) => {
    student1.history = "C"
    return student1
}
result = addHistoryGrade(student1)

const addScienceGrade = (student1) => {
    student1.science = 'A'
    return student1
}
result = addScienceGrade(student1)
console.log(student1)
