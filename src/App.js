import React from 'react';
// import styled from 'styled-components';
import { Table } from 'react-bootstrap';

export default function App() {
  const person = [{
    name: 'Sam',
    age: 22,
    hobby: 'eat',
    info: [{ Apt: 23, City: 'Dallas', State: "TX" }]
  },
  {
    name: 'ram',
    age: 32,
    hobby: 'sit',
    info: [{ Apt: 44, City: 'Kansas', State: "KS" }]
  },
  {
    name: 'Bam',
    age: 42,
    hobby: 'read',
    info: [{ Apt: 11, City: 'Irving', State: "MN" }]
  }
  ];

  return (
    <>
      <Table variant="dark">
        <tbody>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Age</th>
            <th>Hobby</th>
            <th>Address</th>
          </tr>
          {
            person.map((data, key) => (
              <tr key={key + 1}>
                <td>{key}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.hobby}</td>
                <td>
                  <Table variant="dark"  >
                    <tbody>
                      {
                        data.info.map(link => (
                          <tr>
                            <td>Apt no: {link.Apt}</td>
                            <td>City: {link.City}</td>
                            <td>State: {link.State}</td>
                          </tr>
                        )
                        )}
                    </tbody>
                  </Table>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>


    </>
  )
}

