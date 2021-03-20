import React, { Component } from 'react';
import mockJson from '../../mock/list.json';
export default class ListComponent extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {


        return (
            <div className="listComp">
                <h1 style={{ textAlign: 'center' }}> List table</h1>
                <div style={{ marginLeft: '30%', marginTop: '5%' }}>

                    <div class="searchbox" style={{ marginLeft: "50%" }}>
                    </div>
                    <table class="searchable sortable">
                        <thead>
                            <tr>
                                <th>Customer Id</th>
                                <th>Name</th>
                                <th>Mobile No</th>
                                <th>Gender</th>
                                <th>Age</th>

                            </tr>
                        </thead>


                        {
                            mockJson.map((item) => {
                                return (

                                    <tbody>

                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.mobno}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.age}</td>
                                        </tr>
                                    </tbody> 
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        )
    }
}