import './Student_Details.module.scss'
const Student_Details =()=>{
    const stud_Id =localStorage.getItem('stud_Id');
    return<>
    <h1> This is the StudentDetails</h1>
    <p>student page :{stud_Id}</p>

    
    </>
}

export default Student_Details;