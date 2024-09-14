"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // To get dynamic params
import Link from 'next/link';
import Header from '@/app/components/header';
import Image from 'next/image';
import edit from '/app/assets/edit.png'

interface Patient {
    id: number;
    hospitalId: string;
    patientName: string;
    phoneNumber: string;
    nextDate: string;
    location: string;
    status: string;
    statClass: string;
    email: string;
}

const ViewPatient: React.FC = () => {
    const { id } = useParams(); // Get the patient id from the URL
    const [patient, setPatient] = useState<Patient | null>(null); // State for the fetched patient
    const [loading, setLoading] = useState<boolean>(true); // Loading state

    const activateLink = () => {
        // const activeButton = e;
        const butt1 = document.getElementById('patientInfo');
        const butt2 = document.getElementById('deliveryInfo');
        if (butt1?.classList.contains("actinfo")) {
            butt1?.classList.remove('actinfo');
            butt2?.classList.remove('actinfo');
            butt2?.classList.add('actinfo');

        } else {
            butt1?.classList.remove('actinfo');
            butt2?.classList.remove('actinfo');
            butt1?.classList.add('actinfo');
        }

    }

    // Log the id to ensure it's correct
    console.log("Fetched patient ID from URL:", id);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const response = await fetch(`http://localhost:9000/patients/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch patient details');
                }
                const data: Patient = await response.json();
                console.log("Fetched patient data:", data);
                setPatient(data); // Set the patient data in the state
                setLoading(false); // Set loading to false
            } catch (error) {
                console.error('Error fetching patient:', error);
                setLoading(false);
            }
        };

        if (id) {
            fetchPatient(); // Fetch the patient when the id is available
        }
    }, [id]);

    if (loading) {
        return <div>Loading patient details...</div>;
    }

    if (!patient) {
        return <div>Patient not found.</div>;
    }

    return (
        <>
            <Header />
            <div className="page-nav">
                <div>
                    <Link href={"/patients"}>
                        <div className="history">Patients</div>
                    </Link>
                    <div className="pn-text1">/View Patient</div>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                    }}
                >
                    <p className="demo">
                        Patient&apos;s next delivery date is <br />
                        <span>{patient.nextDate}, in 2 days</span>
                    </p>
                    <button
                        type="button"
                        className="button"
                        style={{
                            width: "243.26px",
                            height: "52.17px",
                            marginLeft: "10px",
                            fontWeight: "500",
                        }}
                    >
                        Assign Package to Patient
                    </button>
                </div>
            </div>
            <div className="divider"></div>

            <div className="leftP">
                <p className="smallest">Patient</p>
                <p className="details active">Rider&lsquo;s Profile</p>
                <p className="details">Deliver History</p>
            </div>

            <div className="rightP">
                <div className='divider' style={{
                    border: "1px solid",
                    color: "rgba(239, 239, 239, 1)",
                    position: "relative",
                    top: "40px"
                }}></div>
            </div>
            <div>
                <div className="payment">
                    <p>Payment Status</p> <div className={patient.statClass}>{patient.status}</div>

                </div>
                <div className="right-nav">
                    <div className="p-info">
                        <button id='patientInfo' className='info' onClick={activateLink}>Patient Information</button>
                    </div>
                    <div className="d-info">
                        <button id='deliveryInfo' className='info' onClick={activateLink}>Delivery Information</button>
                    </div>
                </div>
            </div>

            <div className='toggle-info' style={{
                width: "280.94px",
                height: "25px",
                top: "325px",
                left: "485.49px",
                gap: "0px",
                opacity: "0px",
                position: "absolute"

            }}>
                <p style={{
                    fontFamily: "Gilroy",
                    fontWeight: "700",
                    fontSize: "20px",
                    marginBottom: "5px"
                }}>Patient&lsquo;s Information</p>
                <p style={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "rgba(42, 42, 42, 1)"

                }}>Personal information about patient</p>
                <div className='edit' style={{
                    color: "rgba(31, 90, 244, 1)",
                    fontWeight: "600",
                    width: "200"
                }}>
                    <Image
                        src={edit}
                        alt="edit logo"
                        style={{
                            height: "12px",
                            marginRight: "10px",

                        }}
                    /> Edit Patient&lsquo;s information</div>
            </div>

            <div className="display-toggle">
                <div className="patient-info" id='patient-info'>
                    <div className="input-d" style={{
                        width: "435px",
                        position: "absolute",
                        top: "327px",
                        left: "851px",
                        border: "1px solid black",
                        padding: "10px",
                        backgroundColor: "rgba(239, 239, 239, 1)"

                    }}>
                        <p className="label" style={{ fontSize: "14px", marginBottom: "5px" }}>
                            Hospital ID
                        </p>
                        <p className="label-detail" style={{ fontSize: "18px", fontWeight: "600" }}>
                            {patient.hospitalId}
                        </p>
                    </div>
                    <div className="input-d middle" style={{
                        width: "455px",
                        position: "absolute",
                        top: "417px",
                        left: "840px",
                        // border: "1px solid black",
                        padding: "10px",
                        justifyContent: 'space-between'
                        // backgroundColor: "rgba(239, 239, 239, 1)"

                    }}>
                        <div className='center input-d ' style={{
                            border: "1px solid black",
                            backgroundColor: "rgba(239, 239, 239, 1)",
                            padding: "10px"

                        }}>
                            <p className="label" style={{
                                fontSize: "14px", marginBottom: "5px",
                            }}>
                                First Name
                            </p>
                            <p className="label-detail" style={{ fontSize: "18px", fontWeight: "600" }}>
                                {patient.patientName.substring(0, patient.patientName.indexOf(' '))}
                            </p>
                        </div>
                        <div className='center' style={{
                            border: "1px solid black",
                            backgroundColor: "rgba(239, 239, 239, 1)",
                            padding: "10px"
                        }}>
                            <p className="label" style={{ fontSize: "14px", marginBottom: "5px" }}>
                                Last Name
                            </p>
                            <p className="label-detail" style={{ fontSize: "18px", fontWeight: "600" }}>
                                {patient.patientName.substring(patient.patientName.indexOf(' ') + 1)}
                            </p>
                        </div>
                    </div>

                    <div className="input-d middle" style={{
                        width: "455px",
                        position: "absolute",
                        top: "517px",
                        left: "840px",
                        // border: "1px solid black",
                        padding: "10px",
                        justifyContent: 'space-between'
                        // backgroundColor: "rgba(239, 239, 239, 1)"

                    }}>
                        <div className='center input-d ' style={{
                            border: "1px solid black",
                            backgroundColor: "rgba(239, 239, 239, 1)",
                            padding: "10px"

                        }}>
                            <p className="label" style={{
                                fontSize: "14px", marginBottom: "5px",
                            }}>
                                Gender
                            </p>
                            <p className="label-detail" style={{ fontSize: "18px", fontWeight: "600" }}>
                                Male
                            </p>
                        </div>
                        <div className='center' style={{
                            border: "1px solid black",
                            backgroundColor: "rgba(239, 239, 239, 1)",
                            padding: "10px"
                        }}>
                            <p className="label" style={{ fontSize: "14px", marginBottom: "5px" }}>
                                Phone Number
                            </p>
                            <p className="label-detail" style={{ fontSize: "18px", fontWeight: "600" }}>
                                {patient.phoneNumber}
                            </p>
                        </div>
                    </div>
                    <div className="input-d" style={{
                        width: "435px",
                        position: "absolute",
                        top: "627px",
                        left: "851px",
                        border: "1px solid black",
                        padding: "10px",
                        backgroundColor: "rgba(239, 239, 239, 1)"

                    }}>
                        <p className="label" style={{ fontSize: "14px", marginBottom: "5px" }}>
                            Email Address
                        </p>
                        <p className="label-detail" style={{ fontSize: "18px", fontWeight: "600" }}>
                            {patient.email}
                        </p>
                    </div>

                    <button className='button' type='button' style={{
                        position: 'absolute',
                        top: "780px",
                        left: "1100px"
                    }}>Save Changes</button>
                </div>



                <div className="delivery-info hidden" id='delivery-info'></div>

            </div>

        </>
    );
};

export default ViewPatient;
