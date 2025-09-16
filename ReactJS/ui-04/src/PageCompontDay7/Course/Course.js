import React from 'react';

const Course = () => {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='card shadow'>
                        <div className='card-body bg-primary text-center text-white'>
                            <h5>Full Stack</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card shadow'>
                        <div className='card-body bg-success text-center text-white'>
                            <h5>Mean Stack</h5>
                        </div>
                    </div>
                </div>

                  <div className='col-md-3'>
                    <div className='card shadow'>
                        <div className='card-body bg-warning text-white text-center'>
                            <h5>Mern stack</h5>
                        </div>
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <div className='card shadow'>
                        <div className='card-body bg-danger text-white text-center'>
                            <h5>Data Science</h5>
                        </div>
                    </div>
                  </div>

            </div>
        </div>
    </>
  );
};

export default Course;
