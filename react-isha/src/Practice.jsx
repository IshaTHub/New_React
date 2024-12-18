export const Practice = () => {
  const student = [];

  return (
    <>
      <h1>{student.length && "student is not present"}</h1>
      <h1>Number of student: {student.length}</h1>
    </>
  );
};

// o/p 0
// Number of student: 0
// react does not render `false`,`null`, `undefined`,  it renders `0` and `""`in the DOM, 