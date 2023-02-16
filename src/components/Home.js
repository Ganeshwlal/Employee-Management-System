import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt, FaUserPlus } from "react-icons/fa";




function Home() {

  const history=useNavigate()


  //DELETE
  const handleDelete=(id)=>{
// console.log(Employee.map(item=>item.id).indexOf(id));
var index = Employee.map(item=>item.id).indexOf(id); //index
Employee.splice(index,1)   //item remove
console.log(Employee);      //array position  with remaining item
history('/')

  }

  //EDIT
  const handleEdit=(id,empname,age,designation,salary)=>{
    localStorage.setItem('ID',id);
    localStorage.setItem('NAME',empname);
    localStorage.setItem('AGE',age);
    localStorage.setItem('DESIGNATION',designation);
    localStorage.setItem('SALARY',salary);
  }







  return (
    <>
      <h1 className='text-primary text-center m-4'>Employee Management System</h1>
      <p>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>
     

    <Link to={'/add'}>
    <Button variant="success"><FaUserPlus /></Button>
    </Link>

      <h3 className='my-5'>List of Employees</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Employee && Employee.length > 0 ?
              Employee.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.empname}</td>
                  <td>{item.age}</td>
                  <td>{item.designation}</td>
                  <td>{item.salary}</td>
                  <td>

                    <Link to={'/edit'}>
                    <Button onClick={()=>handleEdit(item.id,item.empname,item.age,item.designation,item.salary)} variant="success"><FaEdit /></Button>
                    </Link>

                    <Button onClick={()=>handleDelete(item.id)} variant="info"><FaTrashAlt /></Button>

                       
                  </td>
                </tr>
              )) : 'No data available'

          }

        </tbody>
      </Table>
    </>
  )
}

export default Home