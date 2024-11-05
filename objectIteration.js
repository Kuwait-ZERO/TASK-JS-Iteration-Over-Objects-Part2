const students = [
  {
    id: 1,
    name: "Alice",
    courses: ["Math", "Science", "History"],
  },
  {
    id: 2,
    name: "Bob",
    courses: ["History", "English", "Math", "Art"],
  },
  {
    id: 3,
    name: "Charlie",
    courses: ["Science", "English", "Music"],
  },
  {
    id: 4,
    name: "David",
    courses: ["Math", "History", "Art", "PE"],
  },
  {
    id: 5,
    name: "Eva",
    courses: ["Science", "Math", "Music"],
  },
  {
    id: 6,
    name: "Frank",
    courses: ["English", "Art"],
  },
  {
    id: 7,
    name: "Grace",
    courses: ["Math", "Science", "English", "Music"],
  },
  {
    id: 8,
    name: "Helen",
    courses: ["History", "Art", "PE"],
  },
  {
    id: 9,
    name: "Ivy",
    courses: ["Science", "English", "Art"],
  },
  {
    id: 10,
    name: "Jack",
    courses: ["Math", "History", "Music"],
  },
];

// 1) Write a `getStudentName` function that accepts an argument of `student` object, return the student name
function getStudentName(student) {
  // returning the name property of the student object
  return student.name;
}
console.log(getStudentName(students[0]));

// 2) Write a getCourse function that accepts a student object and `courseIndex` return the course at the specified course index in the student's courses array
function getCourse(student, courseIndex) {
  // returning the course at the specified index from the students courses array
  return student.courses[courseIndex];
}
console.log(getCourse(students[4], 2)); // Outputs: Music

// 3) Write a `addCourseToStudent` function that accepts a `student` object and `course` string,
// it will add the course to the student's courses array and return the `student` object
function addCourseToStudent(student, course) {
  // to add the course i do Push for the new course into the students courses array
  student.courses.push(course);
  // returning the updated student object
  return student;
}
console.log(addCourseToStudent(students[7], "Physics"));

// 4) Write a `countCourses` function that accepts a `student object
// then returns the number of courses the student is enrolled in
function countCourses(student) {
  // Returning the length of the students courses array to see the number of courses the student is enrolled in
  return student.courses.length;
}
console.log(countCourses(students[1])); // Outputs: 4

// 5) Write a `removeCourseFromStudent` function that accepts a `student` object and `course` string,
// removes the `course` from the student's courses array,
// then returns the `student` object.
function removeCourseFromStudent(student, course) {
  // Find the index of the course in the student's courses array
  const index = student.courses.indexOf(course); // am searching for a method  to search for a specific value  in this case its indexOf is a built-in method for arrays in JavaScript.
  //  i say here If the course exists in the array, remove it
  if (index !== -1) {
    // The method returns the first index at which the specified value can be found in the array.
    student.courses.splice(index, 1); //If the value is not found, it returns -1.
  }
  // Return the updated student object
  return student;
}
console.log(removeCourseFromStudent(students[6], "Science"));

// 6) Write a `findStudentById` function that accepts a `studentId` and an array of student objects `students`
// and returns the student object with the matching id.
// It should return undefinded if a student is not found
function findStudentById(students, studentId) {
  // Use the find method to locate the student object with the matching id
  return students.find((student) => student.id === studentId); //.find() method is used to search through an array and return the first element that meets a specified condition defined in a callback function.
  // so its searches in the students array for the first student object with an id that matches studentId, returning the matching object or undefined if no match is found.
}
console.log(findStudentById(students, 10));

// 🌶️🌶️
// 7) Write a `getStudentsByCourse` function that accepts a `course` string and an array of student objects `students`,
// then returns an array of student objects who are enrolled in the specified course
function getStudentsByCourse(students, course) {
  // Filter the students array to return students who include the specified course in their courses array
  return students.filter((student) => student.courses.includes(course));
}
console.log(getStudentsByCourse(students, "Music"));

// 🌶️🌶️🌶️
// 8) Write a `listAllCourses` function that accepts an array of `students`
// then returns an array of all unique courses names across all students
function listAllCourses(students) {
  // Create an array to hold all courses
  let allCourses = [];

  // Use .map() to iterate over each student and collect their courses
  students.map((student) => {
    // For each course in the student's courses
    student.courses.forEach((course) => {
      // Check if the course is not already in the allCourses array
      if (!allCourses.includes(course)) {
        // If not, add it to the allCourses array
        allCourses.push(course);
      }
    });
  });

  // Return the array of unique courses
  return allCourses;
}

console.log(listAllCourses(students));

module.exports = {
  getStudentName,
  getCourse,
  addCourseToStudent,
  countCourses,
  listAllCourses,
  removeCourseFromStudent,
  findStudentById,
  getStudentsByCourse,
};
