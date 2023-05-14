import React from 'react';
import { main, image1, image2 } from '../assets'
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import { FiShare } from 'react-icons/fi'
import { BiTimeFive } from 'react-icons/bi'
import { TbBath, TbWashMachine, TbPool } from 'react-icons/tb'
import { FaFireExtinguisher, FaRegPlusSquare, FaUserShield } from "react-icons/fa";
import { GiComb, GiAlienFire, GiRockingChair } from "react-icons/gi";
import { GoDeviceDesktop } from 'react-icons/go'
import { AiOutlineWifi, AiOutlineCar } from 'react-icons/ai'
import { CgPiano } from 'react-icons/cg'
import { RiKey2Line, RiAlarmWarningLine } from "react-icons/ri";
import { MdTableRestaurant, MdOutlineOutdoorGrill } from 'react-icons/md'
import { BsSafe2 } from 'react-icons/bs'

const Home = () => {
    return (
        <div className='mb-3'>
            <Row className='image-section'>
                <Col lg={9}>
                    <img className='main-image' src={main} />
                </Col>
                <Col lg={3}>
                    <div className='d-flex flex-column gap-2 other-images'>
                        <img src={image1} />
                        <img src={image2} />
                        <div className='last-image'>
                            <div className='image-div'>
                                <img src={image1} />
                            </div>
                            <div className='h4'>
                                <h4>+10 photos</h4>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={9} className='mt-3'>
                    <div className='d-flex justify-content-between px-3'>
                        <div>
                            <h3>Pocono Gem: Hot Tub, Grill, Fire Pit & Location</h3>
                            <p>Long Pond . Pennsylvania . United States</p>
                        </div>
                        <FiShare className='share-icon' style={{ width: '25px', height: '50px' }} />
                    </div>
                    <div className='mt-5 tab-layout'>
                        <Tabs
                            defaultActiveKey="home"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Home">
                                <div className='custom-grid'>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <TbWashMachine />
                                        </div>
                                        <p className='m-0'>Washer</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <FaFireExtinguisher />
                                        </div>
                                        <p className='m-0'>Fire extinguisher</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <TbPool />
                                        </div>
                                        <p className='m-0'>Pool</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <GiComb />
                                        </div>
                                        <p className='m-0'>Essentials</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <FaRegPlusSquare />
                                        </div>
                                        <p className='m-0'>First aid kit</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <TbBath />
                                        </div>
                                        <p className='m-0'>Hot tub</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <GoDeviceDesktop />
                                        </div>
                                        <p className='m-0'>TV</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <AiOutlineWifi />
                                        </div>
                                        <p className='m-0'>Wifi</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'></div>
                                        <p className='m-0'>Lake access</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <CgPiano />
                                        </div>
                                        <p className='m-0'>Piano</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <GiAlienFire />
                                        </div>
                                        <p className='m-0'>Fire pit</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <RiKey2Line />
                                        </div>
                                        <p className='m-0'>Self check-in</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <MdTableRestaurant />
                                        </div>
                                        <p className='m-0'>Pool table</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <GiRockingChair />
                                        </div>
                                        <p className='m-0'>Outdoor dining area</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <BsSafe2 />
                                        </div>
                                        <p className='m-0'>Lockbox</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <RiAlarmWarningLine />
                                        </div>
                                        <p className='m-0'>Smoke alarm</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <MdOutlineOutdoorGrill />
                                        </div>
                                        <p className='m-0'>BBQ grill</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <FaUserShield />
                                        </div>
                                        <p className='m-0'>Carbon monoxide alarm</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <AiOutlineCar />
                                        </div>
                                        <p className='m-0'>Free parking on premises</p>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                                <div className='custom-grid'>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <TbWashMachine />
                                        </div>
                                        <p className='m-0'>Washer</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <FaFireExtinguisher />
                                        </div>
                                        <p className='m-0'>Fire extinguisher</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <TbPool />
                                        </div>
                                        <p className='m-0'>Pool</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <GiComb />
                                        </div>
                                        <p className='m-0'>Essentials</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <FaRegPlusSquare />
                                        </div>
                                        <p className='m-0'>First aid kit</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <TbBath />
                                        </div>
                                        <p className='m-0'>Hot tub</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <GoDeviceDesktop />
                                        </div>
                                        <p className='m-0'>TV</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <AiOutlineWifi />
                                        </div>
                                        <p className='m-0'>Wifi</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'></div>
                                        <p className='m-0'>Lake access</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <CgPiano />
                                        </div>
                                        <p className='m-0'>Piano</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <GiAlienFire />
                                        </div>
                                        <p className='m-0'>Fire pit</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <RiKey2Line />
                                        </div>
                                        <p className='m-0'>Self check-in</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <MdTableRestaurant />
                                        </div>
                                        <p className='m-0'>Pool table</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <GiRockingChair />
                                        </div>
                                        <p className='m-0'>Outdoor dining area</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <BsSafe2 />
                                        </div>
                                        <p className='m-0'>Lockbox</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <RiAlarmWarningLine />
                                        </div>
                                        <p className='m-0'>Smoke alarm</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <MdOutlineOutdoorGrill />
                                        </div>
                                        <p className='m-0'>BBQ grill</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <FaUserShield />
                                        </div>
                                        <p className='m-0'>Carbon monoxide alarm</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <AiOutlineCar />
                                        </div>
                                        <p className='m-0'>Free parking on premises</p>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="contact" title="Contact">
                                <div className='custom-grid'>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <TbWashMachine />
                                        </div>
                                        <p className='m-0'>Washer</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <FaFireExtinguisher />
                                        </div>
                                        <p className='m-0'>Fire extinguisher</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <TbPool />
                                        </div>
                                        <p className='m-0'>Pool</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <GiComb />
                                        </div>
                                        <p className='m-0'>Essentials</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <FaRegPlusSquare />
                                        </div>
                                        <p className='m-0'>First aid kit</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <TbBath />
                                        </div>
                                        <p className='m-0'>Hot tub</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <GoDeviceDesktop />
                                        </div>
                                        <p className='m-0'>TV</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <AiOutlineWifi />
                                        </div>
                                        <p className='m-0'>Wifi</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'></div>
                                        <p className='m-0'>Lake access</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <CgPiano />
                                        </div>
                                        <p className='m-0'>Piano</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <GiAlienFire />
                                        </div>
                                        <p className='m-0'>Fire pit</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <RiKey2Line />
                                        </div>
                                        <p className='m-0'>Self check-in</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <MdTableRestaurant />
                                        </div>
                                        <p className='m-0'>Pool table</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <GiRockingChair />
                                        </div>
                                        <p className='m-0'>Outdoor dining area</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <BsSafe2 />
                                        </div>
                                        <p className='m-0'>Lockbox</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <RiAlarmWarningLine />
                                        </div>
                                        <p className='m-0'>Smoke alarm</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <MdOutlineOutdoorGrill />
                                        </div>
                                        <p className='m-0'>BBQ grill</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <FaUserShield />
                                        </div>
                                        <p className='m-0'>Carbon monoxide alarm</p>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <div className='icon-div'>
                                            <AiOutlineCar />
                                        </div>
                                        <p className='m-0'>Free parking on premises</p>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
                <Col lg={3} className='mt-3'>
                    <div className='property-details'>
                        <div className='px-3 head'>
                            <p>Entire home hosted by Anju</p>
                        </div>
                        <div className='px-3'>
                            <div className='d-flex justify-content-between'>
                                <p>Night</p>
                                <p className='text-brand'>$250</p>
                            </div>
                            <p className='m-0'>8 guests .</p>
                            <p className='m-0'>4 bedrooms .</p>
                            <p className='m-0'>7 Beds .</p>
                            <p className='m-0'>2.5 Baths</p>
                            <button className='btn-primary my-3 w-100'>Reserve</button>
                        </div>
                    </div>
                </Col>
            </Row>
            <h3 className='mt-5'>Where you will be</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12034.848974146442!2d-75.46296360000001!3d41.053421449999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c4f6ea056d37c7%3A0xc6093235d95a8b46!2sLong%20Pond%2C%20PA%2018334%2C%20USA!5e0!3m2!1sen!2s!4v1684083140431!5m2!1sen!2s" className='w-100' height="450" style={{ border: 'none' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <h3 className='my-4'>Thing to know</h3>
            <div className='mt-5 tab-layout'>
                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="House Rules">
                        <div className='custom-grid-2'>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>Check-in after 4:00 PM</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>No parties or events</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>No pets</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>Quiet hours</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>Checkout before 11:00 AM</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>No commercial photography</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>No commercial photography</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <TbBath />
                                </div>
                                <p className='m-0'>Self check-in with lockbox</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <TbBath />
                                </div>
                                <p className='m-0'>8 guests maximum</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <TbBath />
                                </div>
                                <p className='m-0'>No smoking</p>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="safety" title="Safety & Property">
                        <div className='custom-grid-2'>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>Check-in after 4:00 PM</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>No parties or events</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>No pets</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>Quiet hours</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>Checkout before 11:00 AM</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>No commercial photography</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>No commercial photography</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <TbBath />
                                </div>
                                <p className='m-0'>Self check-in with lockbox</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <TbBath />
                                </div>
                                <p className='m-0'>8 guests maximum</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <TbBath />
                                </div>
                                <p className='m-0'>No smoking</p>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="cancellation" title="Cancellation Policy">
                        <div className='custom-grid-2'>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>Check-in after 4:00 PM</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>No parties or events</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>No pets</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>Quiet hours</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>Checkout before 11:00 AM</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>No commercial photography</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <BiTimeFive />
                                </div>
                                <p className='m-0'>No commercial photography</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <TbBath />
                                </div>
                                <p className='m-0'>Self check-in with lockbox</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <TbBath />
                                </div>
                                <p className='m-0'>8 guests maximum</p>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <div className='icon-div'>
                                    <TbBath />
                                </div>
                                <p className='m-0'>No smoking</p>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            <div className='my-5'>
                <div className='d-flex gap-4'>
                    <div className='custom-contact'>
                        <h2>A</h2>
                    </div>
                    <div>
                        <h3 className='m-0'>Hosted by Anju</h3>
                        <span className='m-0'>Joined in May 2023</span>
                        <p className='my-3'>Identity Verified</p>
                        <button className='btn-dark'>Contact Host</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;