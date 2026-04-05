import React, { useState } from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  hasArrow?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon, label, hasArrow = true, isActive = false, onClick }: SidebarItemProps) => (
  <div className={`sidebar-item ${isActive ? 'active' : ''}`} onClick={onClick}>
    <div className="sidebar-item-content">
      {icon}
      <span>{label}</span>
    </div>
    {hasArrow && (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    )}
  </div>
);

const Dashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [currentView, setCurrentView] = useState('DASHBOARD');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { id: 'ADVISING', label: 'ADVISING', icon: '📁' },
    { id: 'MY_CLASS_SCHEDULE', label: 'MY CLASS SCHEDULE', icon: '📅' },
    { id: 'ADVISING_RULES', label: 'ADVISING RULES', icon: '📜' },
    { id: 'GRADE_REPORT', label: 'GRADE REPORT', icon: '📊' },
    { id: 'SEMESTER_DROP', label: 'SEMESTER DROP', icon: '🗑️' },
    { id: 'CURRICULUM', label: 'CURRICULUM', icon: '📚' },
    { id: 'INSTALLMENT_PAYMENT', label: 'INSTALLMENT PAYMENT', icon: '💰' },
    { id: 'MY_ACCOUNTS_LEDGER', label: 'MY ACCOUNTS LEDGER', icon: '💵' },
    { id: 'OFFERED COURSES', label: 'OFFERED COURSES', icon: '📖' },
    { id: 'DEGREE_REVIEW', label: 'DEGREE REVIEW', icon: '🎓' },
    { id: 'FACULTY EVALUATION', label: 'FACULTY EVALUATION', icon: '📝' },
    { id: 'CONVOCATION APPLICATION', label: 'CONVOCATION APPLICATION', icon: '👔' },
    { id: 'UPLOAD DOCUMENT', label: 'UPLOAD DOCUMENT', icon: '📤' },
    { id: 'DISCIPLINARY CODE', label: 'DISCIPLINARY CODE & OTHERS', icon: '⚖️' },
  ];

  const renderProfile = () => (
    <div className="profile-grid">
      <div className="profile-sidebar">
        <div className="profile-img-container">
           <img src="/profile_pic.png" alt="Profile" />
        </div>
        <div className="profile-name">Jannat Farhana</div>
        <div className="profile-stat">Student ID: 2023-2-60-126</div>
        <div className="profile-stat">Unique ID: 00923205101126</div>
        <div className="profile-stat">Program: CSE</div>
        <div className="profile-stat">Department: CSE</div>
        <div className="profile-stat">Credits completed: 85.5</div>
        <div className="profile-stat" style={{ fontWeight: 700, color: '#333' }}>CGPA: 3.10</div>
      </div>

      <div className="profile-main">
        <div className="profile-info-block">
          <div className="profile-section-title">Contact Information</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
             <span style={{ fontSize: '1.2rem' }}>📞</span>
             <div className="profile-value">1865636779</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
             <span style={{ fontSize: '1.2rem' }}>✉️</span>
             <div className="profile-value">2023-2-60-126@std.ewubd.edu</div>
          </div>
        </div>

        <div className="profile-info-block">
          <div className="profile-section-title">Present Address</div>
          <div className="profile-value">House # 18/5, Middle Basabo, Sabujbagh, Dhaka-1214</div>
        </div>

        <div className="profile-info-block">
          <div className="profile-section-title">Permanent Addres</div>
          <div className="profile-value">House # 18/5, Middle Basabo, Sabujbagh, Dhaka-1214</div>
        </div>
      </div>

      <div className="profile-extra">
        <div className="profile-section-title">Other Details</div>
        <table className="other-details-table">
          <tbody>
             {[
               { l: 'Admitted Semester:', v: 'Summer-2023' },
               { l: 'Date of Admission:', v: '24/05/2023' },
               { l: 'Date of Birth:', v: '25/11/2003' },
               { l: 'Blood Group:', v: 'O+' },
               { l: 'Marital Status:', v: 'Single' },
               { l: 'National ID:', v: '20032692004213952' },
               { l: 'Advisor:', v: 'Rasheedul Amin Tuhin(RDA)' },
               { l: 'Pending Documents:', v: 'None' },
             ].map((row, idx) => (
               <tr key={idx}>
                 <td className="label">{row.l}</td>
                 <td className="value">{row.v}</td>
               </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderDegreeReview = () => (
    <div style={{ paddingBottom: '50px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
         <h2 style={{ fontSize: '1.1rem', color: '#666', borderBottom: '1px solid #eee', display: 'inline-block', paddingBottom: '5px' }}>
           B.Sc. in Computer Science and Engineering
         </h2>
      </div>

      <div className="degree-summary-grid">
         <div className="summary-card">
            <div className="summary-card-title">Student Information</div>
            <div className="degree-input-group">
               <div className="degree-label">Student Id</div>
               <div className="degree-value">2023-2-60-126</div>
            </div>
            <div className="degree-input-group">
               <div className="degree-label">Student Name</div>
               <div className="degree-value">Jannat Farhana</div>
            </div>
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <div className="degree-input-group">
                <div className="degree-label" style={{ flex: '0 0 60px' }}>CGPA</div>
                <div className="degree-value" style={{ minWidth: '80px' }}>3.10</div>
              </div>
              <div className="degree-input-group">
                <div className="degree-label" style={{ flex: '0 0 60px' }}>Cr Atn</div>
                <div className="degree-value" style={{ minWidth: '80px' }}>95.5</div>
              </div>
              <div className="degree-input-group">
                <div className="degree-label" style={{ flex: '0 0 60px' }}>Cr Earn</div>
                <div className="degree-value" style={{ minWidth: '80px' }}>85.5</div>
              </div>
            </div>
            <div className="degree-input-group" style={{ marginTop: '5px' }}>
               <div className="degree-label">Min Credit Required</div>
               <div className="degree-value" style={{ width: '100px' }}>140</div>
            </div>
            <div className="degree-input-group">
               <div className="degree-label">Remaining Credit</div>
               <div className="degree-value" style={{ width: '100px' }}>54.5</div>
            </div>
         </div>

         <div className="summary-card">
            <div className="summary-card-title">Credits Completion Summary</div>
            <table className="mini-summary-table">
               <tbody>
                  {[
                    { label: 'Basic Science Courses', val: '11 (Out of 11)' },
                    { label: 'Mathematics and Statistics Courses', val: '15 (Out of 15)' },
                    { label: 'Compulsory Language and General Education Courses', val: '9 (Out of 9)' },
                    { label: 'Elective General Education Courses', val: '6 (Out of 9)' },
                    { label: 'Core Computer Science and Engineering Courses', val: '36.5 (Out of 62)' },
                    { label: 'Capstone Project', val: '0 (Out of 6)' },
                    { label: 'Non-major Elective Computer Science and Engineering Courses', val: '8 (Out of 8)' },
                    { label: 'Others', val: '0 (Out of 0)' },
                    { label: 'Major', val: '0 (Out of 20)' },
                  ].map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.label}</td>
                      <td>{row.val}</td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {[
        { 
          title: 'Basic Science Courses', 
          comp: 11, rem: 0,
          rows: [
            { id: 'CHE109', t: 'Engineering Chemistry-I', cr: 4, g: 'B+', f: 3.25, gp: 13, ce: 4 },
            { id: 'PHY109', t: 'Engineering Physics-I', cr: 4, g: 'B', f: 3, gp: 12, ce: 4 },
            { id: 'PHY209', t: 'Engineering Physics-II', cr: 3, g: 'B', f: 3, gp: 9, ce: 3 },
          ],
          totalGp: 34, totalCr: 11
        },
        { 
          title: 'Mathematics and Statistics Courses', 
          comp: 15, rem: 0,
          rows: [
            { id: 'MAT101', t: 'Differential & Integral Calculas', cr: 3, g: 'B', f: 3, gp: 9, ce: 3 },
            { id: 'MAT102', t: 'Differential Equations & Special Functions', cr: 3, g: 'C', f: 2.25, gp: 6.75, ce: 3 },
            { id: 'MAT104', t: 'Co-ordinate Geometry & Vector Analysis', cr: 3, g: 'B-', f: 2.75, gp: 8.25, ce: 3 },
            { id: 'MAT205', t: 'Linear Algebra & Complex Variables', cr: 3, g: 'A-', f: 3.5, gp: 10.5, ce: 3 },
            { id: 'STA102', t: 'Statistics and Probability', cr: 3, g: 'C+', f: 2.5, gp: 7.5, ce: 3 },
          ],
          totalGp: 42, totalCr: 15
        },
        { 
          title: 'Compulsory Language and General Education Courses', 
          comp: 9, rem: 0,
          rows: [
            { id: 'ENG101', t: 'Basic English', cr: 3, g: 'B', f: 3, gp: 9, ce: 3 },
            { id: 'ENG102', t: 'Composition and Communication Skills', cr: 3, g: 'B', f: 3, gp: 9, ce: 3 },
            { id: 'GEN226', t: 'Emergence of Bangladesh', cr: 3, g: 'A-', f: 3.5, gp: 10.5, ce: 3 },
          ],
          totalGp: 28.5, totalCr: 9
        },
        { 
          title: 'Elective General Education Courses', 
          comp: 6, rem: 3,
          rows: [
            { id: 'BUS231', t: 'Business Communication', cr: 3, g: 'B-', f: 2.75, gp: 8.25, ce: 3 },
            { id: 'GEN214', t: 'Introduction to Development Studies', cr: 3, g: 'B', f: 3, gp: 9, ce: 3 },
          ],
          totalGp: 17.25, totalCr: 6
        },
        { 
          title: 'Core Computer Science and Engineering Courses', 
          comp: 36.5, rem: 25.5,
          rows: [
            { id: 'CSE103', t: 'Structured Programming', cr: 4.5, g: 'C-', f: 1.7, gp: 7.65, ce: 4.5 },
            { id: 'CSE106', t: 'Discrete Mathematics', cr: 3, g: 'B+', f: 3.25, gp: 9.75, ce: 3 },
            { id: 'CSE110', t: 'Object Oriented Programming', cr: 4.5, g: 'B', f: 3, gp: 13.5, ce: 4.5 },
            { id: 'CSE200', t: 'Computer-Aided Engineering Drawing', cr: 1, g: 'B+', f: 3.25, gp: 3.25, ce: 1 },
            { id: 'CSE207', t: 'Data Structures', cr: 4, g: 'C+', f: 2.5, gp: 10, ce: 4 },
            { id: 'CSE209', t: 'Electrical Circuits', cr: 4, g: 'B', f: 3, gp: 12, ce: 4 },
            { id: 'CSE246', t: 'Algorithms', cr: 4.5, g: 'B-', f: 2.75, gp: 12.37, ce: 4.5 },
            { id: 'CSE251', t: 'Electronic Circuits', cr: 4, g: 'B-', f: 2.75, gp: 11, ce: 4 },
            { id: 'CSE325', t: 'Operating Systems', cr: 4, g: 'A-', f: 3.5, gp: 14, ce: 4 },
            { id: 'CSE360', t: 'Computer Architecture', cr: 3, g: 'C+', f: 2.5, gp: 7.5, ce: 3 },
          ],
          totalGp: 101.02, totalCr: 36.5
        },
        { 
          title: 'Non-major Elective Computer Science and Engineering Courses', 
          comp: 8, rem: 0,
          rows: [
            { id: 'CSE350', t: 'Data Communications', cr: 4, g: 'B-', f: 2.75, gp: 11, ce: 4 },
            { id: 'CSE366', t: 'Artificial Intelligence', cr: 4, g: 'B-', f: 2.75, gp: 11, ce: 4 },
          ],
          totalGp: 22, totalCr: 8
        },
      ].map((cat, i) => (
        <div key={i} className="category-section">
          <div className="category-header">
            <h3>{cat.title}</h3>
            <div className="category-subheader">{cat.title}</div>
            <div className="tag-container">
               <span className="completed-tag">Completed: {cat.comp}</span>
               <span className="remaining-tag">Remaining: {cat.rem}</span>
            </div>
          </div>
          <table className="data-table">
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>Sl.</th>
                <th>Course</th>
                <th style={{ textAlign: 'center' }}>Title</th>
                <th>Credit</th>
                <th>Grade</th>
                <th>Factor</th>
                <th>Grd Point</th>
                <th>Crd Earn</th>
              </tr>
            </thead>
            <tbody>
              {cat.rows.map((row, ri) => (
                <tr key={ri} style={{ textAlign: 'center' }}>
                  <td>{ri + 1}</td>
                  <td>{row.id}</td>
                  <td style={{ textAlign: 'center' }}>{row.t}</td>
                  <td>{row.cr}</td>
                  <td>{row.g}</td>
                  <td>{row.f}</td>
                  <td>{row.gp}</td>
                  <td>{row.ce}</td>
                </tr>
              ))}
              <tr style={{ background: '#f5f5f5', fontWeight: 700 }}>
                <td colSpan={6} style={{ textAlign: 'right' }}>Total</td>
                <td style={{ textAlign: 'center' }}>{cat.totalGp}</td>
                <td style={{ textAlign: 'center' }}>{cat.totalCr}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'PROFILE':
        return renderProfile();
      case 'DEGREE_REVIEW':
        return renderDegreeReview();
      case 'ADVISING':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              background: '#d9534f', 
              color: 'white', 
              padding: '15px', 
              borderRadius: '4px', 
              marginBottom: '30px',
              fontSize: '0.85rem',
              fontWeight: 600,
              textAlign: 'left'
            }}>
              At present enrollment/advising status is Opened(Major), course advising for Spring-2026...
            </div>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
               <button className="btn-portal" style={{ minWidth: '150px', justifyContent: 'center' }}>NEXT STEP</button>
               <button className="btn-portal" style={{ minWidth: '150px', justifyContent: 'center', background: '#5bc0de' }}>UNDECLARED</button>
               <button className="btn-portal" style={{ minWidth: '150px', justifyContent: 'center', background: '#337ab7' }}>NEW STUDENT</button>
            </div>
          </div>
        );
      case 'ADVISING_RULES':
        return (
          <div className="info-card">
            <div className="info-card-header">ADVISING RULES</div>
            <div className="info-grid">
              <div className="info-item"><b>Program Type :</b> Undergraduate</div>
              <div className="info-item"><b>Department :</b> Department of CSE</div>
              <div className="info-item"><b>Completed Credit :</b></div>
              <div className="info-item"><b>Max Courses per day :</b> 3</div>
              <div className="info-item"><b>Minimum CGPA Required :</b> 2.16</div>
              <div className="info-item"><b>Max CGPA Required :</b> 4</div>
              <div className="info-item"><b>Student ID :</b> 2023-2-60-126</div>
              <div className="info-item"><b>Unique ID :</b> 00923205101126</div>
              <div className="info-item"><b>Max Credit :</b> 15</div>
              <div className="info-item"><b>Min Credit :</b> 9</div>
              <div className="info-item"><b>Max Course :</b> 6</div>
              <div className="info-item"><b>Min Course :</b> 3</div>
              <div className="info-item"><b>Max Course Drop :</b></div>
              <div className="info-item"><b>Max Course Left at F TAB :</b> 0</div>
              <div className="info-item"><b>Max Financial AID Credit :</b></div>
              <div className="info-item"><b>Min Financial AID Credit :</b></div>
            </div>
          </div>
        );
      case 'MY_CLASS_SCHEDULE':
        return (
          <div>
            <div className="btn-group">
              <select className="select-portal">
                <option>Spring-2026</option>
              </select>
              <button className="btn-portal">Show Course!</button>
              <button className="btn-portal btn-portal-blue">Print Slip</button>
            </div>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Serial</th>
                    <th>Course</th>
                    <th>Section</th>
                    <th>Credits</th>
                    <th>Timing</th>
                    <th>Room No.</th>
                    <th>WithDraw Status</th>
                    <th>Drop Status</th>
                    <th>Faculty Initial</th>
                    <th>Faculty Name</th>
                    <th>Faculty Email</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { s: 1, c: 'CSE345 Lab', sec: 8, cr: 4, t: 'M 10:10AM-12:10PM', r: '634 (Digital System Lab)', f: 'NISHAT', fn: 'Ms. Nishat Tasnim' },
                    { s: 2, c: 'CSE345', sec: 8, cr: 4, t: 'S 10:10AM-11:40AM', r: 'AB3-901', f: 'NISHAT', fn: 'Ms. Nishat Tasnim' },
                    { s: 3, c: 'CSE345', sec: 8, cr: 4, t: 'R 10:10AM-11:40AM', r: 'AB1-601', f: 'NISHAT', fn: 'Ms. Nishat Tasnim' },
                    { s: 4, c: 'CSE405', sec: 6, cr: 4, t: 'MW 4:50PM-6:20PM', r: 'AB2-501', f: 'KHALID', fn: 'Mr. Md. Khalid Mahbub Khan' },
                    { s: 5, c: 'CSE405 Lab', sec: 6, cr: 4, t: 'T 1:30PM-3:30PM', r: '630 (Software Engineering Lab)', f: 'KHALID', fn: 'Mr. Md. Khalid Mahbub Khan' },
                    { s: 6, c: 'FIN101', sec: 13, cr: 3, t: 'MW 3:10PM-4:40PM', r: '222', f: 'HSM', fn: 'Dr. Mohammed Sawkat Hossain' },
                    { s: 7, c: 'CSE303', sec: 1, cr: 4, t: 'SR 8:30AM-10:00AM', r: 'FUB-403', f: 'DMIM', fn: 'Dr. Mohammed Manzurul Islam' },
                    { s: 8, c: 'CSE303 Lab', sec: 1, cr: 4, t: 'T 10:10AM-12:10PM', r: '437 (Cyber Security Lab)', f: 'DMIM', fn: 'Dr. Mohammed Manzurul Islam' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td>{row.s}</td>
                      <td style={{ color: '#01579b', fontWeight: 'bold' }}>{row.c}</td>
                      <td>{row.sec}</td>
                      <td>{row.cr}</td>
                      <td>{row.t}</td>
                      <td>{row.r}</td>
                      <td>No</td>
                      <td>{row.s === 6 ? 'Yes' : 'No'}</td>
                      <td>{row.f}</td>
                      <td>{row.fn}</td>
                      <td style={{ color: '#01579b' }}>{row.fn.toLowerCase().replace(/\s/g, '.')}@ewubd.edu</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'GRADE_REPORT':
        return (
          <div className="table-container" style={{ padding: '40px', background: 'white' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '15px' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>EAST WEST UNIVERSITY</div>
              <p style={{ fontSize: '0.7rem' }}>Plot No. A/2, Jaharul Islam City, Aftabnagar Dhaka 1212</p>
              <p style={{ fontSize: '0.7rem' }}>Tel: 09666775577 | E-mail: admissions@ewubd.edu</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', fontSize: '0.75rem', gap: '5px', marginBottom: '20px' }}>
              <div><b>Grade Report:</b> 6 Apr, 2026</div>
              <div style={{ textAlign: 'right' }}><b>Student's Copy</b></div>
              <div><b>EWU ID:</b> 2023-2-60-126</div>
              <div style={{ textAlign: 'right' }}>Mr. Mohammed Abul Bashar</div>
              <div><b>Unique ID:</b> 00923205101126</div>
              <div style={{ textAlign: 'right' }}>House # 18/5, Middle Basabo</div>
              <div><b>Name:</b> <b style={{ fontSize: '0.8rem' }}>Jannat Farhana</b></div>
              <div style={{ textAlign: 'right' }}>Sabujbagh, Dhaka-1214</div>
              <div><b>Degree Objective:</b> B.Sc. in Computer Science and Engineering</div>
            </div>

            <div style={{ borderBottom: '1px solid #333' }}>
               <table className="data-table" style={{ border: 'none' }}>
                  <thead style={{ background: 'transparent' }}>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <th style={{ background: '#eee' }}>Course</th>
                      <th style={{ background: '#eee' }}>Title of the Course</th>
                      <th style={{ background: '#eee' }}>cr</th>
                      <th style={{ background: '#eee' }}>grd</th>
                      <th style={{ background: '#eee' }}>gp</th>
                      <th style={{ background: '#eee' }}>gpacr</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: '#fcfcfc', borderBottom: '1px solid #ddd' }}><td colSpan={6}><b>2023 Summer</b></td></tr>
                    <tr><td>CSE103</td><td>Structured Programming</td><td>4.5</td><td>C-</td><td>7.65</td><td>4.5</td></tr>
                    <tr><td>ENG101</td><td>Basic English</td><td>3.0</td><td>R</td><td>0.00</td><td>0.0</td></tr>
                    <tr><td>MAT101</td><td>Differential & Integral Calculas</td><td>3.0</td><td>B</td><td>9.00</td><td>3.0</td></tr>
                    <tr><td colSpan={6} style={{ textAlign: 'center', background: '#f9f9f9', fontSize: '0.7rem' }}><b>CGPA: 2.22</b> &nbsp;&nbsp;&nbsp; Term GPA: 2.22</td></tr>
                    
                    <tr style={{ background: '#fcfcfc', borderBottom: '1px solid #ddd' }}><td colSpan={6}><b>2023 Fall</b></td></tr>
                    <tr><td>CHE109</td><td>Engineering Chemistry-I</td><td>4.0</td><td>B+</td><td>13.00</td><td>4.0</td></tr>
                    <tr><td>CSE106</td><td>Discrete Mathematics</td><td>3.0</td><td>R</td><td>0.00</td><td>0.0</td></tr>
                    <tr><td>ENG101</td><td>Basic English</td><td>3.0</td><td>B</td><td>9.00</td><td>3.0</td></tr>
                    <tr><td colSpan={6} style={{ textAlign: 'center', background: '#f9f9f9', fontSize: '0.7rem' }}><b>CGPA: 2.67</b> &nbsp;&nbsp;&nbsp; Term GPA: 3.14</td></tr>

                    <tr style={{ background: '#fcfcfc', borderBottom: '1px solid #ddd' }}><td colSpan={6}><b>2024 Spring</b></td></tr>
                    <tr><td>CSE106</td><td>Discrete Mathematics</td><td>3.0</td><td>B+</td><td>9.75</td><td>3.0</td></tr>
                    <tr><td>MAT104</td><td>Co-ordinate Geometry & Vector Analysis</td><td>3.0</td><td>B-</td><td>8.25</td><td>3.0</td></tr>
                    <tr><td>PHY109</td><td>Engineering Physics-I</td><td>4.0</td><td>B</td><td>12.00</td><td>4.0</td></tr>
                    <tr><td>STA102</td><td>Statistics and Probability</td><td>3.0</td><td>C+</td><td>7.50</td><td>3.0</td></tr>
                    <tr><td colSpan={6} style={{ textAlign: 'center', background: '#f9f9f9', fontSize: '0.7rem' }}><b>CGPA: 2.77</b> &nbsp;&nbsp;&nbsp; Term GPA: 2.88</td></tr>

                    <tr style={{ background: '#fcfcfc', borderBottom: '1px solid #ddd' }}><td colSpan={6}><b>2024 Summer</b></td></tr>
                    <tr><td>CSE110</td><td>Object Oriented Programming</td><td>4.5</td><td>B+</td><td>15.75</td><td>4.5</td></tr>
                    <tr><td>ENG102</td><td>Composition and Communication Skills</td><td>3.0</td><td>B+</td><td>10.50</td><td>3.0</td></tr>
                    <tr><td colSpan={6} style={{ textAlign: 'center', background: '#f9f9f9', fontSize: '0.7rem' }}><b>CGPA: 3.00</b> &nbsp;&nbsp;&nbsp; Term GPA: 3.45</td></tr>

                    <tr style={{ background: '#fcfcfc', borderBottom: '1px solid #ddd' }}><td colSpan={6}><b>2024 Fall</b></td></tr>
                    <tr><td>CSE207</td><td>Data Structures</td><td>4.0</td><td>C+</td><td>10.00</td><td>4.0</td></tr>
                    <tr><td>CSE209</td><td>Electrical Circuits</td><td>4.0</td><td>B+</td><td>13.20</td><td>4.0</td></tr>
                    <tr><td>GEN226</td><td>Emergence of Bangladesh</td><td>3.0</td><td>A-</td><td>10.50</td><td>3.0</td></tr>
                    <tr><td>MAT102</td><td>Differential Equations & Special Functions</td><td>3.0</td><td>B-</td><td>8.10</td><td>3.0</td></tr>
                    <tr><td>PHY209</td><td>Engineering Physics-II</td><td>3.0</td><td>B+</td><td>9.90</td><td>3.0</td></tr>
                    <tr><td colSpan={6} style={{ textAlign: 'center', background: '#f9f9f9', fontSize: '0.7rem' }}><b>CGPA: 3.09</b> &nbsp;&nbsp;&nbsp; Term GPA: 3.03</td></tr>

                    <tr style={{ background: '#fcfcfc', borderBottom: '1px solid #ddd' }}><td colSpan={6}><b>2025 Spring</b></td></tr>
                    <tr><td>BUS231</td><td>Business Communication</td><td>3.0</td><td>B-</td><td>8.25</td><td>3.0</td></tr>
                    <tr><td>CSE200</td><td>Computer-Aided Engineering Drawing</td><td>1.0</td><td>B+</td><td>3.25</td><td>1.0</td></tr>
                    <tr><td>CSE246</td><td>Algorithms</td><td>4.5</td><td>B-</td><td>12.37</td><td>4.5</td></tr>
                    <tr><td>CSE251</td><td>Electronic Circuits</td><td>4.0</td><td>B-</td><td>11.00</td><td>4.0</td></tr>
                    <tr><td colSpan={6} style={{ textAlign: 'center', background: '#f9f9f9', fontSize: '0.7rem' }}><b>CGPA: 2.82</b> &nbsp;&nbsp;&nbsp; Term GPA: 2.79</td></tr>

                    <tr style={{ background: '#fcfcfc', borderBottom: '1px solid #ddd' }}><td colSpan={6}><b>2025 Summer</b></td></tr>
                    <tr><td>CSE325</td><td>Operating Systems</td><td>4.0</td><td>A-</td><td>14.00</td><td>4.0</td></tr>
                    <tr><td>CSE347</td><td>Information System Analysis and Design</td><td>4.0</td><td>F</td><td>0.00</td><td>4.0</td></tr>
                    <tr><td>GEN214</td><td>Introduction to Development Studies</td><td>3.0</td><td>B</td><td>9.00</td><td>3.0</td></tr>
                    <tr><td>MAT205</td><td>Linear Algebra & Complex Variables</td><td>3.0</td><td>A-</td><td>10.50</td><td>3.0</td></tr>
                    <tr><td colSpan={6} style={{ textAlign: 'center', background: '#f9f9f9', fontSize: '0.7rem' }}><b>CGPA: 2.74</b> &nbsp;&nbsp;&nbsp; Term GPA: 2.39</td></tr>

                    <tr style={{ background: '#fcfcfc', borderBottom: '1px solid #ddd' }}><td colSpan={6}><b>2025 Fall</b></td></tr>
                    <tr><td>CSE350</td><td>Data Communications</td><td>4.0</td><td>B-</td><td>11.00</td><td>4.0</td></tr>
                    <tr><td>CSE360</td><td>Computer Architecture</td><td>3.0</td><td>C+</td><td>7.50</td><td>3.0</td></tr>
                    <tr><td colSpan={6} style={{ textAlign: 'center', background: '#f9f9f9', fontSize: '0.7rem' }}><b>CGPA: 3.10</b> &nbsp;&nbsp;&nbsp; Term GPA: 3.10</td></tr>
                  </tbody>
               </table>
            </div>

            {/* Summary Box */}
            <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', fontSize: '0.75rem', padding: '10px', border: '1px solid #333' }}>
               <div><b>Summary:</b></div>
               <div><b>CGPA: 3.10 (out of 4.00)</b></div>
               <div><b>gpacr: 89.50</b></div>
               <div><b>Credit Earned: 85.50</b></div>
            </div>
          </div>
        );
      case 'CURRICULUM':
        return (
          <div className="btn-group" style={{ justifyContent: 'center', marginTop: '50px' }}>
            <button className="btn-portal" style={{ background: '#5cb85c', borderRadius: '4px' }}>
               📖 Show My Program Curriculum
            </button>
            <button className="btn-portal" style={{ background: '#007bff', borderRadius: '4px' }}>
               📘 Show Blue Book
            </button>
          </div>
        );
      default:
        return (
          <>
            <div className="welcome-box">
              <span>Welcome to East West University Student Portal!</span>
              <span className="close-btn" onClick={() => setCurrentView('DASHBOARD')}>×</span>
            </div>
            <div style={{ 
              height: 'calc(100% - 100px)', 
              background: 'white', 
              borderRadius: '4px',
              border: '1px solid #e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999',
              fontSize: '2rem'
            }}>
              Dashboard Content Area
            </div>
          </>
        );
    }
  };

  return (
    <div className="dashboard-container" onClick={() => isDropdownOpen && setIsDropdownOpen(false)}>
      <div className="sidebar">
        <div className="sidebar-header" onClick={() => setCurrentView('DASHBOARD')} style={{ cursor: 'pointer' }}>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
             <line x1="3" y1="12" x2="21" y2="12"></line>
             <line x1="3" y1="6" x2="21" y2="6"></line>
             <line x1="3" y1="18" x2="21" y2="18"></line>
           </svg>
        </div>
        <div className="sidebar-menu">
          {menuItems.map((item) => (
            <SidebarItem 
              key={item.id} 
              label={item.label} 
              isActive={currentView === item.id}
              onClick={() => setCurrentView(item.id)}
              icon={<span>{item.icon}</span>} 
            />
          ))}
        </div>
      </div>

      <div className="main-wrapper">
        <header className="top-nav">
          <div className="top-nav-logo">
            <img src="/Logo_of_EWU.png" alt="Logo" />
            <h1>EAST WEST UNIVERSITY</h1>
          </div>
          
          <div className="top-nav-user">
            <div style={{ color: '#666', cursor: 'pointer' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <div className="user-info">
              <span>Hi, <b>Jannat Farhana</b></span>
              <div className="user-avatar" title="Options">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>

            <div className="user-dropdown">
              <div className="dropdown-item" onClick={() => setCurrentView('PROFILE')}>
                👤 View Profile
              </div>
              <div className="dropdown-item">
                🔑 Change Password
              </div>
              <div className="dropdown-item" onClick={onLogout}>
                🚪 Logout
              </div>
            </div>
          </div>
        </header>

        <main className="content-area">
          <div className="breadcrumb">
            Home / <span>{currentView.replace(/_/g, ' ')}</span>
          </div>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
