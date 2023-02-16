import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';
import uuid from 'react-uuid';



function Add() {

  const history=useNavigate()

  const [id,setId]=useState('');
    const [empname,setEmpname]=useState('');
    const [age,setAge]=useState('');
    const [designation,setDesignation]=useState('');
    const [salary,setSalary]=useState('0');

    const handleAdd=(e)=>{
      e.preventDefault();  /// prevent refreshing

      let ids=uuid();
      console.log(ids);

      let uniqueId = ids.slice(0,4)
      console.log(uniqueId);


      Employee.push({
        id:uniqueId,
        empname:empname,
        age:age,
        designation:designation,
        salary:salary

      })

      history('/')

    }




  return (
    <>
            <h1 className='text-primary text-center m-4'>Add Employee Management System</h1>
            <p className='p-3'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>

            <Row>
                <Col md={5}>
                    <img width={400} src='https://www.svgrepo.com/download/134525/employee.svg' />
                </Col>

                <Col md={6}>
                    <Form className='border border-3 p-4 rounded'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter Id"
                            // value={id}
                            onChange={(e)=>setId(e.target.value)}
                            required
                            />
                        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name"
                            // value={empname}
                            onChange={(e)=>setEmpname(e.target.value)}
                            required
                            />
                        
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Enter Age"
                            // value={age}
                            onChange={(e)=>setAge(e.target.value)}
                            required
                            />
                        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>DESIGNATION</Form.Label>
                            <Form.Control type="text" placeholder="Enter Designation"
                            // value={designation}
                            onChange={(e)=>setDesignation(e.target.value)}
                            required
                            />
                        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>SALARY</Form.Label>
                            <Form.Control type="text" placeholder="Enter Salary"
                            // value={salary}
                            onChange={(e)=>setSalary(e.target.value)}
                            required
                            />
                        
                        </Form.Group>

                       
                        <Button variant="primary" type="submit" onClick={(e)=>handleAdd(e)}>
                           Add
                        </Button>
                    </Form>

                </Col>
            </Row>

        </>
  )
}

export default Add