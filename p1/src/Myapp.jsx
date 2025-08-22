import React, { Component } from 'react';
import './Myapp.css';
class Myapp extends Component {
    render() {
        return (
            <div className='myInfo'>
                <img className='photo' src='/DAIWIK ID CARD.jpg' alt='photo' />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <label className='mystyle'>KL University</label>
                <br></br>
                <br></br>
                <table>
                    <tr>
                        <td><label>Name: </label></td>
                        <td><label>GORLE DAIWIK NAIDU</label></td>
                    </tr>
                    <tr>
                        <td><label>Program: </label></td>
                        <td><label>B.Tech</label></td>
                    </tr>
                    <tr>
                        <td><label>Department: </label></td>
                        <td><label>C.S.E</label></td>
                    </tr>
                    <tr>
                        <td><label>Id No: </label></td>
                        <td><label>2400032751</label></td>
                    </tr>
                    <tr>
                        <td> <label>Mobile No: </label></td>
                        <td><label>9398440160</label></td>
                    </tr>
                    <tr>
                        <td><label>Course: </label></td>
                        <td><label>Front End Development Frameworks</label></td>
                    </tr>
                </table>

            </div>
        );
    }
}

export default Myapp;

