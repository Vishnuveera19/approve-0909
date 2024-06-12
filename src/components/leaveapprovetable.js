import React from 'react';
import { useLocation } from 'react-router-dom';
import { TableRow, TableCell } from '@mui/material';

function LeaveApproveTable09() {
  const location = useLocation();
  const data = location.state && location.state.data;
  const status = location.state && location.state.status;
  const loginBy = sessionStorage.getItem('user');
  const getCurrentDate = () => {
    const date = new Date();
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };


  return (
    <div> 
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '2px solid black', padding: '5px' }}>EMP CODE</th>
            <th style={{ border: '2px solid black', padding: '5px' }}>EMP NAME</th>
            <th style={{ border: '2px solid black', padding: '5px' }}>APPROVED BY</th>
            <th style={{ border: '2px solid black', padding: '5px' }}>LOGIN BY</th>
            <th style={{ border: '2px solid black', padding: '5px' }}>APPROVAL TYPE</th>
            <th style={{ border: '2px solid black', padding: '5px' }}>APPROVAL DATE</th>
            <th style={{ border: '2px solid black', padding: '5px' }}>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {data && (
            <TableRow sx={{ fontSize: '20px' }}>
              <TableCell sx={{ borderBottom: '4px solid black', padding: '10px' }}>{data.empCode}</TableCell>
              <TableCell sx={{ borderBottom: '4px solid black', padding: '10px' }}>{data.empName}</TableCell>
              <th style={{ borderBottom: '4px solid black', padding: '10px' }}>APPROVED BY</th>
            <th style={{ borderBottom: '4px solid black', padding: '10px' }}>{loginBy}</th>
            <th style={{ borderBottom: '4px solid black', padding: '10px' }}>{data.comments}</th>
            <th style={{ borderBottom: '4px solid black', padding: '10px' }}>{getCurrentDate()}</th>
            <th style={{ borderBottom: '4px solid black', padding: '10px' }}>{status}</th>
            {/* Add more cells for other fields as needed */}
            </TableRow>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveApproveTable09
  
