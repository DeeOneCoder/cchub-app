import React from 'react'
import Image from 'next/image'
import sort from "/app/assets/sort.png"
// import icon from "/app/assets/icon.png"
import Patients from '../components/patient'

const PatientsPage = () => {
    return (
        <>
            <div className="page-nav">
                <div className="pn-text">
                    Patients
                </div>
                <button type='button' className='button'
                > + Add Patient</button>

            </div>

            <div className='divider'></div>

            <div className='page-nav search'>
                <Image src={sort}
                    alt='sortBy'
                    style={{
                        width: "161.08px",
                        //   position: "absolute",
                        height: "20px",
                        top: "213px",
                        left: "135px",
                        gap: "0px",

                    }}
                />

                <input type='text' className='inputSearch'
                    name='search'
                    placeholder='{} search by patient name, id' />
            </div>
            <Patients />

        </>
    )
}

export default PatientsPage