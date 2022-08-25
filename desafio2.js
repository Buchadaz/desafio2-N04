
const students = [
  {
    name: 'Matheus',
    n1: 9,
    n2: 10,
  },
  {
    name: ' Candidato2',
    n1: 4,
    n2: 7,
  },
  {
    name: ' Candidato3',
    n1: 6,
    n2: 8,
  }
];

function calc(n1, n2) {

  return ((Number(n1) + Number(n2)) / 2).toFixed(2)
}


function printStudent(student) {
  const media = calc(student.n1, student.n2);

  if (media >= 7) {

    return `Parabéns, senhor(a)  ${student.name}!!! Sua média final foi: ${media}`
  }

  else {

    return `Infelizmente, senhor(a) ${student.name}, não foi dessa vez. Sua média final foi: ${media}`
  }

}



for (let student of students) {
  let studentMessage = printStudent(student)
  alert(studentMessage)
}

