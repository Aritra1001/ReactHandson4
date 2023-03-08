import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './components.css'

export default function Student() {
  return (
    <>
      <Navbar/>
      <h2 className='stu_text'>
        Student Details
      </h2>
      <button type='button' className='add_btn'>Add new student</button>

      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>23</td>
            <td>MERN</td>
            <td>October</td>
            <td><Link>Edit</Link></td>
          </tr>
          <tr>
            <td>Doe</td>
            <td>25</td>
            <td>MERN</td>
            <td>November</td>
            <td><Link>Edit</Link></td>
          </tr>
          <tr>
            <td>Biden</td>
            <td>27</td>
            <td>MERN</td>
            <td>October</td>
            <td><Link>Edit</Link></td>
          </tr>
          <tr>
            <td>Barar</td>
            <td>26</td>
            <td>MERN</td>
            <td>September</td>
            <td><Link>Edit</Link></td>
          </tr>
          <tr>
            <td>Christ</td>
            <td>23</td>
            <td>MERN</td>
            <td>November</td>
            <td><Link>Edit</Link></td>
          </tr>
          <tr>
            <td>Elliot</td>
            <td>24</td>
            <td>MERN</td>
            <td>November</td>
            <td><Link>Edit</Link></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
