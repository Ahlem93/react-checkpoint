import React from 'react';
import {Card} from "react-bootstrap";
const LeftSide = () => {
    return (
        <div>
            <Card style={{ width: '80%',marginLeft:"20%",marginTop:"2%",border:"none" }}>
                <Card.Img variant="top" src="https://www.glassdoor.com/employers/app/uploads/sites/2/2021/02/GoogleDrive_640X469_Oddball-Interview-Questions-Recruiters-Should-Ask-02.png" />
                 <Card.Body>
                     <Card.Title>One of us?</Card.Title>
                         <Card.Text>
                            If you already have your own account,just log in.
                        </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LeftSide;
