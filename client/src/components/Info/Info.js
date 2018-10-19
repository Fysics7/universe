import React from 'react';
import { Table } from 'reactstrap';
import "./Info.css";

export default class Info extends React.Component {
  render() {
    return (
      <Table className="table">
        <thead>
          <tr>
            <th>Game Number</th>
            <th>Number of Planets Visited (Within Allowed Time)</th>
            <th>Number of Artifacts Found</th>
            <th>Crew Members Lost</th>
            <th>Enemies Defeated</th>
            <th>Game Won</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>5</td>
            <td>2 out of 6</td>
            <td>3</td>
            <td>3</td>
            <td>No</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>8</td>
            <td>4 out of 6</td>
            <td>2</td>
            <td>4</td>
            <td>No</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>3</td>
            <td>2 out of 6</td>
            <td>3</td>
            <td>4</td>
            <td>No</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}