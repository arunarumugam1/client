import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

export function Certificate(){


    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3'>&nbsp;</div>
                <div className='col-lg-6'>
                    <div className='text-center mt-5'>
                        <h4>Certificate</h4>
                        <div className='text-left mt-4'>

                            <label>Type :</label>
                            <input type='text' name='certificate_type' id='certificate_type' className='form-control' placeholder='Enter the Name pdf the Certificate' />

                            <label>File :</label>
                            <input type='file' name='certificate_file' id='certificate_file' className='form-control'/><br/>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>&nbsp;</div>
            </div>
            <div className='text-center  mt-3'>
            <button type='submit' name='data_submit' id='data_submit' className='btn btn-primary' value='submit'>Submit</button> 
            <Link to='/dashboard'>
            <button type='button ' className='btn btn-danger ml-2 '> Back</button>
            </Link>
            </div>
        </div>
        </>
    )
}