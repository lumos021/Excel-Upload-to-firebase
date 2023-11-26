import React, { ChangeEvent, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { collection, DocumentReference, doc, writeBatch } from 'firebase/firestore';
import * as XLSX from 'xlsx';
import { db } from '../firebase';

interface Data {
    [key: string]: string | number;
}
interface FileUploadProps {
    onUploadSuccess?: () => void;
  }

  const FileUpload: React.FC<FileUploadProps> = ({ onUploadSuccess }) => {
    const [fileData, setFileData] = useState<Data[] | null>(null);

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target?.result as ArrayBuffer);
            const workbook = XLSX.read(data, { type: 'array' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            const keys = jsonData[0];
            const values = jsonData.slice(1);
            const objectsArray: Data[] = values.map((array: any[]) => {
                let obj: Data = {};
                array.forEach((value: string | number, index: number) => {
                    obj[keys[index]] = value;
                });
                return obj;
            });

            setFileData(objectsArray);
            console.log('File data:', objectsArray);
            uploadData(objectsArray);
        };

        reader.readAsArrayBuffer(file);
    };

    const uploadData = async (data: Data[]) => {
        try {
            const collectionRef = collection(db, 'excel-data');
            const batch = writeBatch(db);

            data.forEach((row) => {
                const docRef: DocumentReference = doc(collectionRef);
                batch.set(docRef, row);
            });

            await batch.commit();
            console.log('Documents written successfully!');
            if (onUploadSuccess) {
                onUploadSuccess();
              }
        } catch (e) {
            console.error('Error adding documents: ', e);
        }
    };


    return (
        <Stack spacing={2} direction="column" alignItems="center">
            <Button variant="contained" component="label">
                Upload File
                <input type="file" hidden onChange={handleFileUpload} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
            </Button>
            {fileData && <p>File uploaded successfully!</p>}
        </Stack>
    );
};

export default FileUpload;
