import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { DataGrid } from '@mui/x-data-grid';

interface DataRow {
  id: string;
  [key: string]: string | number;
}

const DataTable: React.FC = () => {
    const [rows, setRows] = useState<DataRow[]>([]);
  
    useEffect(() => {
      const fetchData = () => {
        const collectionRef = collection(db, 'excel-data');
        onSnapshot(collectionRef, (snapshot) => {
          const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setRows(data);
        });
      };
  
      fetchData();
    }, []);

  if (rows.length === 0) {
    return <p>No data uploaded yet. Maybe it's out for lunch? 🍔🍟</p>;
  }

  // Create columns based on the keys in the data
  const columns = Object.keys(rows[0]).map((key) => ({
    field: key,
    headerName: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the key
    width: 130,
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default DataTable;
