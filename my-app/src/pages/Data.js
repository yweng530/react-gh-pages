// import {
//   ChakraProvider,
//   Box,
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   TableContainer,
// } from '@chakra-ui/react';

// import React from 'react';

// function Data() {
//   return (
//     <ChakraProvider>
//       <Box>
//         <Table>
//             <TableCaption>UIUC 2016 On-Campus Computer Science Enrollment</TableCaption>
//             <Thead>
//                 <Tr>
//                     <Th>Dept</Th>
//                     <Th>Degr</Th>
//                     <Th>Major Code</Th>
//                 </Tr>
//             </Thead>
//         </Table>
//       </Box>
//     </ChakraProvider>
//   )
// }

// export default Data

import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  ChakraProvider,
} from '@chakra-ui/react';

const enrollmentData = [
  {
    dept: 434,
    degr: 'BS',
    major_code: 112,
    major_name: 'Computer Science',
    conc_code: '',
    concentration: '',
    fresh: 77,
    sopho: 218,
    junior: 301,
    senior: 474,
    ndeg_ugrad: 0,
    total_ugrad: 1070,
    grad_I: 0,
    grad_II: 0,
    ndeg_grad: 0,
    total_grad: 0,
    prof: 0,
    total_students: 1070,
    program_code: '10KP0112BS',
  },
  {
    dept: 434,
    degr: 'BS',
    major_code: 112,
    major_name: 'Computer Science',
    conc_code: 1854,
    concentration: 'CS:BS/MS Program',
    fresh: 0,
    sopho: 0,
    junior: 0,
    senior: 23,
    ndeg_ugrad: 0,
    total_ugrad: 23,
    grad_I: 0,
    grad_II: 0,
    ndeg_grad: 0,
    total_grad: 0,
    prof: 0,
    total_students: 23,
    program_code: '10KP1854BS',
  },
  {
    dept: 434,
    degr: 'BS',
    major_code: 112,
    major_name: 'Computer Science',
    conc_code: 5458,
    concentration: 'BS/MCS Computer Science',
    fresh: 0,
    sopho: 0,
    junior: 0,
    senior: 12,
    ndeg_ugrad: 0,
    total_ugrad: 12,
    grad_I: 0,
    grad_II: 0,
    ndeg_grad: 0,
    total_grad: 0,
    prof: 0,
    total_students: 12,
    program_code: '10KP5458BS',
  },
  {
    dept: 434,
    degr: 'MCS',
    major_code: 112,
    major_name: 'Computer Science',
    conc_code: '',
    concentration: '',
    fresh: 0,
    sopho: 0,
    junior: 0,
    senior: 0,
    ndeg_ugrad: 0,
    total_ugrad: 0,
    grad_I: 64,
    grad_II: 0,
    ndeg_grad: 0,
    total_grad: 64,
    prof: 0,
    total_students: 64,
    program_code: '10KS0112MCS',
  },
  {
    dept: 434,
    degr: 'MCS',
    major_code: 112,
    major_name: 'Computer Science',
    conc_code: '',
    concentration: '',
    fresh: 0,
    sopho: 0,
    junior: 0,
    senior: 0,
    ndeg_ugrad: 0,
    total_ugrad: 0,
    grad_I: 1,
    grad_II: 0,
    ndeg_grad: 0,
    total_grad: 1,
    prof: 0,
    total_students: 1,
    program_code: '10KS0112MCSU',
  },
  {
    dept: 434,
    degr: 'MCS',
    major_code: 112,
    major_name: 'Computer Science',
    conc_code: '',
    concentration: '',
    fresh: 0,
    sopho: 0,
    junior: 0,
    senior: 0,
    ndeg_ugrad: 0,
    total_ugrad: 0,
    grad_I: 125,
    grad_II: 0,
    ndeg_grad: 0,
    total_grad: 125,
    prof: 0,
    total_students: 125,
    program_code: '10KS0112MCSU',
  },
  {
    dept: 434,
    degr: 'MCS',
    major_code: 112,
    major_name: 'Computer Science',
    conc_code: 5458,
    concentration: 'BS/MCS Computer Science',
    fresh: 0,
    sopho: 0,
    junior: 0,
    senior: 0,
    ndeg_ugrad: 0,
    total_ugrad: 0,
    grad_I: 14,
    grad_II: 0,
    ndeg_grad: 0,
    total_grad: 14,
    prof: 0,
    total_students: 14,
    program_code: '10KS5458MCS',
  },
  {
    dept: 434,
    degr: 'MS',
    major_code: 112,
    major_name: 'Computer Science',
    conc_code: '',
    concentration: '',
    fresh: 0,
    sopho: 0,
    junior: 0,
    senior: 0,
    ndeg_ugrad: 0,
    total_ugrad: 0,
    grad_I: 98,
    grad_II: 0,
    ndeg_grad: 0,
    total_grad: 98,
    prof: 0,
    total_students: 98,
    program_code: '10KS0112MS',
  },
  {
    dept: 434,
    degr: 'MS',
    major_code: 112,
    major_name: 'Computer Science',
    conc_code: 1854,
    concentration: 'CS:BS/MS Program',
    fresh: 0,
    sopho: 0,
    junior: 0,
    senior: 0,
    ndeg_ugrad: 0,
    total_ugrad: 0,
    grad_I: 21,
    grad_II: 0,
    ndeg_grad: 0,
    total_grad: 21,
    prof: 0,
    total_students: 21,
    program_code: '10KS1854MS',
  },
  {
    dept: 434,
    degr: 'MS',
    major_code: 4026,
    major_name: 'Bioinformatics',
    conc_code: 4028,
    concentration: 'Computer Science',
    fresh: 0,
    sopho: 0,
    junior: 0,
    senior: 0,
    ndeg_ugrad: 0,
    total_ugrad: 0,
    grad_I: 5,
    grad_II: 0,
    ndeg_grad: 0,
    total_grad: 5,
    prof: 0,
    total_students: 5,
    program_code: '10KS4028MS',
  },
  {
    dept: 434,
    degr: 'PHD',
    major_code: 112,
    major_name: 'Computer Science',
    conc_code: '',
    concentration: '',
    fresh: 0,
    sopho: 0,
    junior: 0,
    senior: 0,
    ndeg_ugrad: 0,
    total_ugrad: 0,
    grad_I: 0,
    grad_II: 319,
    ndeg_grad: 0,
    total_grad: 319,
    prof: 0,
    total_students: 319,
    program_code: '10KS0112PHD',
  },
  {
    dept: 434,
    degr: 'PHD',
    major_code: 112,
    major_name: 'Computer Science',
    conc_code: 5511,
    concentration: 'Computational Sci & Engr',
    fresh: 0,
    sopho: 0,
    junior: 0,
    senior: 0,
    ndeg_ugrad: 0,
    total_ugrad: 0,
    grad_I: 0,
    grad_II: 1,
    ndeg_grad: 0,
    total_grad: 1,
    prof: 0,
    total_students: 1,
    program_code: '10KS0112PHD',
  },
];

function Data() {
  return (
    <ChakraProvider>
    <Table variant="striped" colorScheme="teal">
      <TableCaption>UIUC 2016 On-Campus Computer Science Enrollment Data</TableCaption>
      <Thead>
        <Tr>
          <Th>Dept</Th>
          <Th>Degr</Th>
          <Th>Major Code</Th>
          <Th>Major Name</Th>
          <Th>Conc Code</Th>
          <Th>Concentration Name (if any)</Th>
          <Th>FRESHMAN</Th>
          <Th>SOPHOMORE</Th>
          <Th>JUNIOR</Th>
          <Th>SENIOR</Th>
          <Th>NDEG UGRAD</Th>
          <Th>TOTAL UGRAD</Th>
          <Th>GRAD I (master)</Th>
          <Th>GRAD II (doctoral)</Th>
          <Th>NDEG GRAD</Th>
          <Th>TOTAL GRAD</Th>
          <Th>PROFESSIONAL</Th>
          <Th>TOTAL STUDENTS</Th>
          <Th>Academic Program Code</Th>
        </Tr>
      </Thead>
      <Tbody>
        {enrollmentData.map((data, index) => (
          <Tr key={index}>
            <Td>{data.dept}</Td>
            <Td>{data.degr}</Td>
            <Td>{data.major_code}</Td>
            <Td>{data.major_name}</Td>
            <Td>{data.conc_code}</Td>
            <Td>{data.concentration}</Td>
            <Td>{data.fresh}</Td>
            <Td>{data.sopho}</Td>
            <Td>{data.junior}</Td>
            <Td>{data.senior}</Td>
            <Td>{data.ndeg_ugrad}</Td>
            <Td>{data.total_ugrad}</Td>
            <Td>{data.grad_I}</Td>
            <Td>{data.grad_II}</Td>
            <Td>{data.ndeg_grad}</Td>
            <Td>{data.total_grad}</Td>
            <Td>{data.prof}</Td>
            <Td>{data.total_students}</Td>
            <Td>{data.program_code}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    </ChakraProvider>
  );
}

export default Data;