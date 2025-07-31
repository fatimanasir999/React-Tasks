import React from 'react'; 
import Header from './components/Header';
import TeacherCard from './components/TeacherCard';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header /> 
      <div style={{ padding: '20px' }}>
        <h3>Teacher 1:</h3>
        <TeacherCard name="Mufaza" sub="Programming" exp="5 years" school="LGS" img= "https://t4.ftcdn.net/jpg/06/44/10/27/360_F_644102790_xU44JCmu0oJdc1dyUiVBbxEXhOu76XuM.jpg" /> 
      </div>
      <div style={{ padding: '20px' }}>
        <h3>Teacher 2:</h3>
        <TeacherCard name="Zainab" sub="English" exp="3 years" school="AIC" img="https://thumbs.dreamstime.com/b/reference-image-351878539.jpg"/>
      </div>
      <div style={{ padding: '20px' }}>
        <h3>Teacher 3:</h3>
        <TeacherCard name="Meerab" sub="Arts" exp="4  years" school="Beacon House" img ="https://thumbs.dreamstime.com/b/charming-d-animated-female-teacher-character-presentation-cheerful-ready-to-present-holds-marker-notebook-dressed-357823021.jpg " />
      </div>
      <Footer />
    </div> 
  );
}

export default App;