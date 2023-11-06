import React from 'react';
import { useState ,useRef} from 'react';
import { FcRightUp2,FcFlashOn } from "react-icons/fc";
import '../src/App.css';
import CollegeCard from './CollegeCards';
import { BsFillMortarboardFill,BsFill1CircleFill } from "react-icons/bs";
import { AiOutlineEdit,AiOutlineDelete } from "react-icons/ai";
import clg from "./images/clg.jpg"
import gra from "./images/gra.jpg"
import std from "./images/std.jpg"
import col from "./images/col.jpg"
import bag from "./images/bag.jpg"
import john from "./images/jons.jpg"
import person from "./images/person1.jpg"
import black from "./images/black.jpg"


function App() {

  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    motherName: '',
    tenthMark: '',
    twelfthMark: '',
    address: '',
    state: '',
    city: '',
    pinCode: '',
    preferredCourses: [],
    gender: '',
    studentAchievements: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: type === 'checkbox' ? (checked ? [...prevStudent[name], value] : prevStudent[name].filter(course => course !== value)) : value,
    }));
  };

  const calculatePercentage = (marks) => {
    return marks;
  };

  const calculateTotalMarks = () => {
    return 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editIndex] = student;
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      setStudents([...students, student]);
    }
    setStudent({
      firstName: '',
      lastName: '',
      fatherName: '',
      motherName: '',
      tenthMark: '',
      twelfthMark: '',
      address: '',
      state: '',
      city: '',
      pinCode: '',
      preferredCourses: [],
      gender: '',
      studentAchievements: '',
    });
  };

  const handleEdit = (index) => {
    const studentToEdit = students[index];
    setStudent(studentToEdit);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };


  const [subjects, setSubjects] = useState([]);
  const subjectInputRef = useRef(null);

  const handleAddSubject = () => {
    setSubjects([...subjects, { name: '', marks: 0 }]);
    setTimeout(() => {
      if (subjectInputRef.current) {
        subjectInputRef.current.focus();
      }
    }, 0);
  };

  const handleInputChanges = (index, e) => {
    const { name, value } = e.target;
    const updatedSubjects = [...subjects];
    updatedSubjects[index] = {
      ...updatedSubjects[index],
      [name]: value,
    };
    setSubjects(updatedSubjects);
  };

  const handleKeyPress = (event, index) => {
    if (event.key === 'Enter') {
      if (index === subjects.length - 1) {
        // If the last subject, add a new row
        handleAddSubject();
      } else {
        // Otherwise, focus on the next input
        setTimeout(() => {
          if (subjectInputRef.current) {
            subjectInputRef.current.focus();
          }
        }, 0);
      }
    }
  };

  const collegeDetails = [
    {
      image: require("./images/bag.jpg"),
      desc: "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
      title: "Digital Art & 3D Model – a future for film company",
      Date: "26 March, 2023 -> Portage Ave.Winnipeg, Canada"
    },
    {
      image: require("./images/stand.jpg"),
      desc: "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
      title: "Conscious Discipline Summer Institute",
      Date: "20 March, 2023 -> 12/A, NewYork Sydney City"
    },
    {
      image: require("./images/stds.jpg"),
      desc: "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
      title: "Basic UI & UX Design for new development",
      Date: "22 March, 2023 -> Portage Ave.Winnipeg, Canada"
    },
    {
      image: require("./images/lap.jpg"),
      desc: "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
      title: "Digital Education Market Briefing: Minnesota 2023",
      Date: "24 March, 2023 -> NewYork Sydney City"
    },
    {
      image: require("./images/lib.jpg"),
      desc: "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
      title: "Learning Network Webinars for Music Teachers",
      Date: "28 March, 2022 -> NewYork Sydney City"
    },
    {
      image: require("./images/row.jpg"),
      desc: "Seamlessly visualize quality ellectual capital without superior collaboration and idea tically",
      title: "Next-Gen Higher Education Students Have Arrived?",
      Date: "03 March, 2022 -> 12/A NewYork Sydney City"
    },

  ];
  return (
    <div className='main-container'  id="top">
      <header className="main-header">
        <div className="logo"><BsFillMortarboardFill className='icon' />AXFORD UNIVERSITY</div>
        <nav>
          <ul className="menu">
            <div class="dropdown">
              <button class="dropbtn">Home</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">About</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">Course</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">Page</button>
              <div class="dropdown-content">
                <a href="#">Events</a>
                <a href="#">Gallery</a>
                <a href="#">Teacher</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">Blog</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">Dropdown</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </header>
      <div>

        <div>
          <div class="slider-container">

            <div class="slider">
              <div class="slides">
                <div id="slides__1" class="slide">
                  <img style={{ width: "1450px", height: "400px" }} src={gra} />
                  <a class="slide__prev" href="#slides__4" title="Next"></a>
                  <a class="slide__next" href="#slides__2" title="Next"></a>
                </div>
                <div id="slides__2" class="slide">
                  <img style={{ width: "1450px", height: "400px" }} src={clg} />
                  <a class="slide__prev" href="#slides__1" title="Prev"></a>
                  <a class="slide__next" href="#slides__3" title="Next"></a>
                </div>
                <div id="slides__3" class="slide">
                  <img style={{ width: "1450px", height: "400px" }} src={std} />
                  <a class="slide__prev" href="#slides__2" title="Prev"></a>
                  <a class="slide__next" href="#slides__4" title="Next"></a>
                </div>
                <div id="slides__4" class="slide">
                  <img style={{ width: "1450px", height: "400px" }} src={col} />
                  <a class="slide__prev" href="#slides__3" title="Prev"></a>
                  <a class="slide__next" href="#slides__1" title="Prev"></a>
                </div>
              </div>
              <div class="slider__nav">
                <a class="slider__navlink" href="#slides__1"></a>
                <a class="slider__navlink" href="#slides__2"></a>
                <a class="slider__navlink" href="#slides__3"></a>
                <a class="slider__navlink" href="#slides__4"></a>
              </div>
            </div>
          </div>
        </div>
        <div className='about'>
          <div class="flex-containers">
            <div class="box-1">
              <img src={clg} alt="Image 1" class="image-1" />
            </div>
            <div class="box-3">
              <div className='thirdbox'>
                <div className='univ-name'>
                  <h3 ><BsFillMortarboardFill />About Our University</h3>
                  <h1>A Few Words About the University</h1>
                </div>

                <p className='para'>Our community is being called to reimagine the future. As the only university where a renowned design
                  school comes together with premier colleges, we are making learning more relevant and transformational.</p>
                <p className='para1'>
                  We are proud to offer top ranige in employment services such and asser payroll and benefits administrato managemen and asistance with global business range ployment
                  employer readings from religious texts or literature are also commonly inc compliance.
                </p>
              </div>
              <div className='box2'>
                <div className='boxs'>
                  <h4 className='name-1'>Global Students</h4>
                  <p className='name-para1'> consectetur adipiscing elit sed do eiusmod tem incid idunt.</p>
                </div>
                <div className='boxs'>
                  <h4 className='name-2'>Doctoral Degrees</h4>
                  <p className='name-para-2'>consectetur adipiscing elit sed do eiusmod tem incid idunt.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="name-title">
          <h3> <BsFillMortarboardFill />Our Events</h3>
          <h1>Upcoming Events</h1>
        </div>
        <div className="college-grid">
          {collegeDetails.map((college, index) => (
            <CollegeCard
              key={index}
              title={college.title}
              description={college.desc}
              imageUrl={college.image}
              Date={college.Date}
            />
          ))}
        </div>
      </div>
      <div class="flex-container">
        <div class="box">
          <div className='text'>
            <h1 className='intro'>Our Best Features</h1>
            <p>Special wedding garments are often worn, and the ceremony is sometimes followed
              by a wedding reception. Music, poetry.</p>
          </div>
          <div className='all'>
            <div className='text1'>
              <h1>Skilled Teachers</h1>
              <p>Special wedding garments are often worn,
                and the ceremony is sttimes followed by a wedding reception. Music,
                poetry, prayers, or readings from.</p>
            </div>
            <div className='text2'>
              <h1>Affordable Courses</h1>
              <p>Special wedding garments are often worn,
                and the ceremony is sttimes followed by a wedding reception. Music,
                poetry, prayers, or readings from.</p>
            </div>
            <div className='text3'>
              <h1>Efficient & Flexible</h1>
              <p>Special wedding garments are often worn,
                and the ceremony is sttimes followed by a wedding reception. Music,
                poetry, prayers, or readings from.</p>
            </div>
          </div>
        </div>
        <div class="box">
          <img src={bag} className='box-image' />
        </div>
      </div>

      <div className='Testmonial-container'>
        <div className='testmonial-text-container'>
          <h5> <BsFillMortarboardFill />Testimonial</h5>
          <h1>What Our Alumni Says</h1>
        </div>

        <div class="testimonial-cards">
          <div class="testimonial-card">
            <div class="testimonial-text">
              <span class="quotation-symbol"><FcFlashOn /></span>
              <p>Text of the testimonial goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius nulla quis dignissim.</p>
            </div>
            <div class="testimonial-img">
              <img src={person} alt="Testimonial 1" class="circle-image" />
              <h3>Mahendra Singh Dhoni</h3>
              <p>Alumni</p>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-text">
              <span class="quotation-symbol"><FcFlashOn /></span>
              <p>Text of the testimonial goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius nulla quis dignissim.</p>
            </div>
            <div class="testimonial-img">
              <img src={john} alt="Testimonial 2" class="circle-image" />
              <h3>Virat Kohli</h3>
              <p>Alumni</p>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-text">
              <span class="quotation-symbol"><FcFlashOn /></span>
              <p>Text of the testimonial goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius nulla quis dignissim.</p>
            </div>
            <div class="testimonial-img">
              <img src={black} alt="Testimonial 3" class="circle-image" />
              <h3>Rohit Sharma</h3>
              <p>Alumni</p>
            </div>
          </div>
        </div>

        <div className='RegForm'>
          <div className='Intro'>
            <h2>Student Registertion Form</h2>
            <p>Our community is being called to reimagine the future. A
              s the only university where a renowned design
              school comes together with premier colleges, w
              e are making learning more relevant and transformational.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-column">
                <div>
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={student.firstName}
                    onChange={handleInputChange}
                    placeholder='First Name'
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={student.lastName}
                    onChange={handleInputChange}
                    placeholder='Last Name'
                    required
                  />
                </div>
                <div>
                  <label htmlFor="fatherName">Father Name:</label>
                  <input
                    type="text"
                    name="fatherName"
                    value={student.fatherName}
                    onChange={handleInputChange}
                    placeholder='Father Name'
                    required
                  />
                </div>
                <div>
                  <label htmlFor="motherName">Mother Name:</label>
                  <input
                    type="text"
                    name="motherName"
                    value={student.motherName}
                    onChange={handleInputChange}
                    placeholder='Mother Name'
                    required
                  />
                </div>
                <div>
                  <label htmlFor="tenthMark">10th Mark:</label>
                  <input
                    type="text"
                    name="tenthMark"
                    value={student.tenthMark}
                    onChange={handleInputChange}
                    placeholder='Ten Mark'
                    required
                  />
                </div>
                <div>
                  <label htmlFor="twelfthMark">12th Mark:</label>
                  <input
                    type="text"
                    name="twelfthMark"
                    value={student.twelfthMark}
                    onChange={handleInputChange}
                    placeholder='Twelfth Mark'
                    required
                  />
                </div>
              </div>

              <div className="form-column">
                <div>
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    style={{ width: "450px" }}
                    name="address"
                    value={student.address}
                    onChange={handleInputChange}
                    placeholder='Address'
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state">State:</label>
                  <select
                    name="state"
                    value={student.state}
                    onChange={handleInputChange}
                    placeholder='State'
                    required
                  >
                    <option value="">Select State</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Kerla">Kerla</option>
                    {/* Add more state options as needed */}
                  </select>
                </div>

                <div>
                  <label for="city">City:</label>
                  <select name="city"
                    value={student.city}
                    onChange={handleInputChange}
                    placeholder='City'
                    required
                  >
                    <option value="">Select City</option>
                    <option value="city1">Salem</option>
                    <option value="city2">Erode</option>
                  </select>
                </div>

                <div>
                  <label for="pinCode">Pin Code:</label>
                  <input type="text" name="pinCode"
                    value={student.pinCode}
                    onChange={handleInputChange}
                    placeholder='Pin Code'
                    required
                    style={{ width: "450px" }} />
                </div>

                <div className='prefer'>
                  <label>Preferred Courses:</label>
                  <label style={{ color: "black" }}>
                    <input
                      type="checkbox"
                      name="preferredCourses"
                      value="Java"
                      checked={student.preferredCourses.includes('Java')}
                      onChange={handleInputChange}
                    

                    />
                    Java
                  </label>
                  <label style={{ color: "black" }}>
                    <input
                      type="checkbox"
                      name="preferredCourses"
                      value="Python"
                      checked={student.preferredCourses.includes('Python')}
                      onChange={handleInputChange}

                    />
                    Python
                  </label>
                  <label style={{ color: "black" }}>
                    <input
                      type="checkbox"
                      name="preferredCourses"
                      value="C++"
                      checked={student.preferredCourses.includes('C++')}
                      onChange={handleInputChange}

                    />
                    C++
                  </label>
                  <label style={{ color: "black" }}>
                    <input
                      type="checkbox"
                      name="preferredCourses"
                      value="C++"
                      checked={student.preferredCourses.includes('PHP')}
                      onChange={handleInputChange}

                    />
                    PHP
                  </label>
                </div>

                <div className='gender'>
                  <label>Gender:</label>
                  <div class="radio-group">
                    <label style={{ color: "black" }}>
                      <input type="radio"
                        name="gender"
                        value="male"
                        checked={student.gender === 'male'}
                        onChange={handleInputChange}
                        required />
                      Male
                    </label>
                    <label style={{ color: "black" }}>
                      <input type="radio"
                        name="gender"
                        value="female"
                        checked={student.gender === 'female'}
                        onChange={handleInputChange}
                        required />
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div>
                <label for="studentAchievements">Student Achievements:</label>
                <textarea
                  style={{ width: "480%", height: "100px" }}
                  onChange={handleInputChange}
                  value={student.studentAchievements}
                  name="studentAchievements"
                  placeholder='About Your Thoughts...?'></textarea>
              </div>
            </div>
            <div className='btns'>
            <button   type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
            </div>
          </form>
          <h2 style={{color:"orangered"}}>Students Data Table</h2>
          <table className='Table'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Father Name</th>
                <th>Mother Name</th>
                <th>Tenth Mark</th>
                <th>12th Mark</th>
                <th>Address</th>
                <th>State</th>
                <th>City</th>
                <th>Pin Code</th>
                <th>Preferred Courses</th>
                <th>Gender</th>
                <th>Student Achievements</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.fatherName}</td>
                  <td>{student.motherName}</td>
                  <td>{student.tenthMark}</td>
                  <td>{student.twelfthMark}</td>
                  <td>{student.address}</td>
                  <td>{student.state}</td>
                  <td>{student.city}</td>
                  <td>{student.pinCode}</td>
                  <td>{student.preferredCourses.join(', ')}</td>
                  <td>{student.gender}</td>
                  <td>{student.studentAchievements}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="edit-button" onClick={() => handleEdit(index)}><AiOutlineEdit/></button>
                      <button className="delete-button" onClick={() => handleDelete(index)}><AiOutlineDelete/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='Subject Table'>
        <div className='btn-container'>
      <button className='btn' onClick={handleAddSubject}>Add Subject</button>
      </div>


<div className='main-table'>
      <div className='table-con'>
      <table>
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Marks</th>
            <th>Percentage</th>
            <th>Total Marks</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="name"
                  value={subject.name}
                  onChange={(e) => handleInputChanges(index, e)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  ref={index === subjects.length - 1 ? subjectInputRef : null}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="marks"
                  value={subject.marks}
                  onChange={(e) => handleInputChanges(index, e)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                />
              </td>
              <td>{((subject.marks / 100) * 100).toFixed(2)}%</td>
              <td>{subjects.reduce((total, subj) => total + Number(subj.marks), 0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>

      <div className='Main-footer'>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h2>Contact Us</h2>
              <p>Email: contact@example.com</p>
              <p>Phone: +1 123-456-7890</p>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; 2023 Your College Name
          </div>
        </footer>
      </div>

      <div className='hyper-link'>
      <a href="#top"><FcRightUp2/></a>
      </div>

    </div>

  );
}

export default App; 
