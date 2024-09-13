import React from 'react'
import Link from 'next/link'


const ViewPatients = () => {
    return (
        <>
            <div className="page-nav">
                <div>
                    <Link href={"/patients"}>
                        <div className='history'>
                            Patients
                        </div></Link>
                    <div className='pn-text1'
                    >
                        /View Patients
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center'
                }}>
                    <p className='demo'>
                        Patient&lsquo;s next delivery date is <br />
                        {/* <span> {patient.nextDate}, in 2 days</span> */}
                        <span> 14th November 2020, in 2 days</span>
                    </p><button type='button' className='button'
                        style={{
                            width: "243.26px",
                            height: "52.17px",
                            marginLeft: "10px",
                            fontWeight: '500',
                        }}>Assign Package to Patient</button>
                </div>
            </div>
            <div className='divider'></div>



        </>
    )
}

export default ViewPatients