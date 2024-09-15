"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link to navigate
import Image from 'next/image';
import p from "/app/assets/p.png";

interface Patient {
  id: number;
  hospitalId: string;
  patientName: string;
  phoneNumber: string;
  nextDate: string;
  location: string;
  status: string;
  statClass: string;
}

const Patients: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:9000/patients', { cache: "no-store" });
        const data: Patient[] = await response.json();
        setPatients(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching patients:', error);
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) {
    return (
      <div style={{
        position: "absolute",
        left: "25%",
        right: "25%",
        width: "50%",
        height: "50%",
        backgroundColor: "white"
      }}>Loading...</div>
    );
  }

  return (
    <div className='table-layout'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Hospital ID</th>
            <th>Patient&lsquo;s Name</th>
            <th>Phone Number</th>
            <th>Next Delivery Date</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className='plain'>{patient.hospitalId}</td>
              <td className='plain'>{patient.patientName}</td>
              <td className='plain'>{patient.phoneNumber}</td>
              <td className='plain'>{patient.nextDate}</td>
              <td className='plain'>{patient.location}</td>
              <td className={patient.statClass}>{patient.status}</td>
              <td>
                {/* Pass the patient ID as a query parameter */}
                <Link href={`/view-patients/${patient.id}`}>
                  <button type="button" className='view'>View</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <div className='pSum'>
          You are viewing 10 out of 87 deliveries
        </div>
        <Image src={p} alt='pagination control' />
      </div>
    </div>
  );
};

export default Patients;
