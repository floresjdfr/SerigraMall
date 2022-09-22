import React from "react";
import { Container, Form, FormControl } from "react-bootstrap";

const Provider = ()=> {


   
    //main
    return (  
    <Container>
        <div>
            <h2>User - See providers catalog with products</h2>
            <h2>User - See providers catalog with products</h2>
            <h3>Table-Datos quemados</h3>
        </div>    
        <table  className="table table-striped"> 
            <thead> 
            <tr>
                <th scope="col">Columna 1</th>
                <th scope="col">Columna 2</th>
                <th scope="col">Columna 3</th>            
            </tr>
            <td>Texto 1</td>
            <td>Texto 2</td>
            <td>Texto 3</td>
            <button type="submit" className="btn btn-primary">
            Boton
            </button>
            <button type="submit" className="btn btn-danger">
            Boton 2
            </button>
            </thead>        
        </table>
    </Container>   
 
    );

};
export default Provider;