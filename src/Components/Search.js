import React, { useContext, useState } from 'react';
import { MainContext } from '../context';
import { STUDENTS } from '../studentList';


// DO NOT CHANGE THIS FUNCTION, IT RETURNS TRUE OR FALSE ACCORDING TO GIVEN DATES
// joiningDate COMES FROM input-date, validityDate COMES FROM studentList,
function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split('-');
  const [yyyy, mm, dd] = validityDate.split('-');
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return (maxValid >= selected) && (maxValid >= today);
}

function Search() {
  const { errFunc, setStdName } = useContext(MainContext);
  const [nameStdnt, setNamestdnt] = useState("")
  const [date, setDate] = useState("")


  const buttonSearch = () => {

    if (nameStdnt && date) {

      const itemStdnt = STUDENTS.find(i => i.name.toUpperCase() === nameStdnt.toUpperCase())

      if (itemStdnt) {
        if (checkValidity(date, itemStdnt.validityDate)) {
          setStdName(itemStdnt.name)

        } else {
          errFunc(`Sorry, "${nameStdnt}" validity has expired!`)
        }
      } else {
        errFunc(`Sorry, "${nameStdnt}" is not a verified student!`)
      }
      setNamestdnt(""); setDate("");
    } else {
      alert("Please fill in the fields.")
    }
  } 

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">Student Name:
        <div>
          <input onChange={(e) => setNamestdnt(e.target.value)} value={nameStdnt} id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10" />
        </div>
      </label>
      <label htmlFor="joiningDate">Joining Date:
        <div>
          <input  onChange={(e) => setDate(e.target.value)} value={date} id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10" />
        </div>
      </label>
      <button onClick={buttonSearch} type="button" data-testid="addBtn" className="small mb-0">Add</button>
    </div>
  );
}

export default Search;
