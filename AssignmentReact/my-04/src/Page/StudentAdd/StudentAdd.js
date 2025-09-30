import Header from '../../PageCompnet/Header/Header';
import './StudentAdd.css';

const StudentAdd=()=>{
    return<>
    <Header/>
    <h4>Welcome StudentAdd</h4>

    <div className='content container '>
        <div className='page-header'>
                <h2 className='STudd'>Add Students</h2>
                 <h2>
                    <span className='stud'>Student</span>
                    <span className='studd'>/Add Students</span>
                 </h2>
        </div>
    </div>

    {/*********************************************************************************************/}

    <div className='container' style={{marginLeft:'330px', width:'70%',marginTop:'20px'}}>
        <div className='card'>
            <div className='card-body'>
                <div className='row'>
                <form>
                    <div className='col-12'>
                        <h5 className='form-title'>
                            <span style={{marginLeft:'-580px'}}>Student Information</span>
                        </h5>
                    </div>
                </form>
                </div>

                <div className='row'>
                    <div className='col-12 col-sm-6'>
                        <label className='text-dark' style={{marginLeft:'-360px'}}>Location</label>
                        <input type='text' className='form-control'></input>
                    </div>

                     <div className='col-12 col-sm-6'>
                        <label className='text-dark'style={{marginLeft:'-340px'}} >Resource Name</label>
                        <input type='text' className='form-control'></input>
                    </div>
                </div>

                 <div className='row'>
                    <div className='col-12 col-sm-6'>
                        <label className='text-dark' style={{marginLeft:'-330px' ,marginTop:'10px'}}>Company Name</label>
                        <input type='text' className='form-control'></input>
                    </div>

                     <div className='col-12 col-sm-6'>
                        <label className='text-dark'style={{marginLeft:'-340px',marginTop:'10px'}} >Employee ID</label>
                        <input type='text' className='form-control'></input>
                    </div>
                </div>

                 <div className='row'>
                    <div className='col-12 col-sm-6'>
                        <label className='text-dark' style={{marginLeft:'-360px',marginTop:'10px'}}>Blood Group</label>
                        <input type='text' className='form-control'></input>
                    </div>

                     <div className='col-12 col-sm-6'>
                        <label className='text-dark'style={{marginLeft:'-340px',marginTop:'10px'}} >Course Name</label>
                        <input type='text' className='form-control'></input>
                    </div>
                </div>

                 <div className='row'>
                    <div className='col-12 col-sm-6'>
                        <label className='text-dark' style={{marginLeft:'-360px',marginTop:'10px'}}> Gov Id</label>
                        <input type='text' className='form-control'></input>
                    </div>

                     <div className='col-12 col-sm-6'>
                        <label className='text-dark'style={{marginLeft:'-340px',marginTop:'10px'}} > Training Date </label>
                        <input type='date' className='form-control'></input>
                    </div>
                </div>

                 <div className='row'>
                    <div className='col-12 col-sm-6'>
                        <label className='text-dark' style={{marginLeft:'-340px',marginTop:'10px'}}>Date Of Birth</label>
                        <input type='Date' className='form-control'></input>
                    </div>

                     <div className='col-12 col-sm-6'>
                        <label className='text-dark'style={{marginLeft:'-300px',marginTop:'10px'}} >Certification Number</label>
                        <input type='text' className='form-control'></input>
                    </div>
                </div>

                 <div className='row'>
                    <div className='col-12 col-sm-6'>
                        <label className='text-dark' style={{marginLeft:'-300px',marginTop:'10px'}}>Admission Number</label>
                        <input type='date' className='form-control'></input>
                    </div>

                     <div className='col-12 col-sm-6'>
                        <label className='text-dark'style={{marginLeft:'-340px',marginTop:'10px'}} >Valid UP to</label>
                        <input type='text' className='form-control'></input>
                    </div>
                </div>

                 <div className='row'>
                    <div className='col-12 col-sm-6'>
                        <label className='text-dark' style={{marginLeft:'-360px',marginTop:'10px'}}>Student Image</label>
                        <input type='file' className='form-control ' ></input>
                    </div>
                </div>
            </div>
             
             <div className='row'>
                <div className='col-12' style={{marginTop:'40px'}}>
                <button className='btn btn-warning'>Sumbit</button>
                </div>
             </div>
               
        </div>
    </div>

    </>
}
export default StudentAdd;