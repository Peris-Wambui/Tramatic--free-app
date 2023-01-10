import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styled from 'styled-components'
import { faCalendarDays, faHeartCircleBolt, faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons';

export default function Icons() {
    return (
        <StyledSection>
            <div className='info'>
                <div className='icon-a'>
                    <FontAwesomeIcon icon={faCalendarDays} />
                </div>
                <div className='content'>
                    <h2>Book Your Sesssion Today</h2>
                    <p>Our online client portal makes getting started with us convenient and secure.</p>
                </div>

            </div>
            <div className='info'>

                <div className='icon-b'>
                    <FontAwesomeIcon icon={faPeopleCarryBox} />
                </div>

                <div className='content'>
                    <h2>Belong to a Community</h2>
                    <p>Be part of a group of people
                        who have the same experiences</p>
                </div>
            </div>

            <div className='info'>
                <div className='icon-c'>
                    <FontAwesomeIcon icon={faHeartCircleBolt} />
                </div>
                <div className='content'>
                    <h2>Create lasting relationships</h2>
                    <p>Implement what you learn and
                        transform the future of
                        your relationships.</p>
                </div>
            </div>
        </StyledSection>
    )
}

const StyledSection = styled.div`
    width:90%;
    height: 100%;
    margin: auto;
    margin-top: -100px;
    margin-bottom: 100px;
    display:flex;
    border-radius: 20px;
    padding: 70px 50px;
    align-content: space-between;
    background:white;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);

p{
font-size: 24px;
padding-top: 10px;
color: #43806C;
}

h2{
    color: #143E35;
}

.content{
    padding: 0 0 0 30px;
}

.icon-a{
    color:rgba(229, 148, 56, 1);
    font-size: 50px;
    align-self: center;
}

.icon-b{
    color: #143E35;
    font-size: 50px;
    align-self: center;
}

.icon-c{
    color: #8E5632;
    font-size: 50px;
    align-self: center;
}



.info{
    display: flex;
    flex: 1;
    align-content: center;
    justify-content: space-between;
}

`