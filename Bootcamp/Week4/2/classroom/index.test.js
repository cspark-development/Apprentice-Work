const { Student, Teacher } = require("./index.js");

describe("Student", () => {
  test("should have access to name property and greet method", () => {
    const student = new Student("Joe Bloggs", "first year");
    expect(student.name).toBe("Joe Bloggs");
    expect(student.greet()).toBe("Hello, my name is Joe Bloggs.");
  });

  test("should have study method", () => {
    const student = new Student("Joe Bloggs", "first year");
    expect(student.study()).toBe("Joe Bloggs is studying for first year exams.");
  });
})

describe("Teacher", () => {
  test("should have access to name property and greet method", () => {
    const teacher = new Teacher("Joe Bloggs", "math");
    expect(teacher.name).toBe("Joe Bloggs");
    expect(teacher.greet()).toBe("Hello, my name is Joe Bloggs.");
  });

  test("teacher method check", () => {
    const teacher = new Teacher("Joe Bloggs", "math");
    expect(teacher.teach()).toBe("Joe Bloggs is teaching math.");
  });
})
