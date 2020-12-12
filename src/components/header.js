import * as React from 'react';
import { Card } from "./card";
import MiroPic from "../images/MiroPic.jpg";

export const Header = () => {
    return (
        <div className=" text-center p-8">
            <Card image={MiroPic}/>
        </div>  
    );
}