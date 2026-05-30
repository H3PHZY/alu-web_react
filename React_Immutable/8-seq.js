import { Seq } from 'immutable';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function printBestStudents(grades) {
  const result = Seq(grades)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName: capitalize(student.firstName),
      lastName: capitalize(student.lastName),
    }));

  console.log(result.toObject());
}
