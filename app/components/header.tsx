import Image from 'next/image'
import React from 'react'
import vector from '/app/assets/vector.png'
import patients from '/app/assets/patients.png'
import overview from '/app/assets/overview.png'
import loggedIn from '/app/assets/loggedIn.png'
import dispatch from '/app/assets/dispatch.png'
import deliveries from '/app/assets/deliveries.png'
import admin from '/app/assets/admin.png'






const Header = () => {
    return (
        <div className='header'>

            <nav style={{

            }}>

                <Image
                    src={vector}
                    alt='home_logo'
                    style={{
                        width: "43px",
                        height: "43px",
                        position: 'absolute',
                        left: "135px",
                        top: "17px"
                    }
                    } />

                <Image
                    src={overview}
                    alt='overview'
                    style={{
                        width: "93px",
                        height: "19px",
                        position: 'absolute',
                        top: "30px",
                        left: "312px",
                    }
                    } />

                <Image
                    src={deliveries}
                    alt='deliveries'
                    style={{
                        width: "95px",
                        height: "19px",
                        position: 'absolute',
                        top: "30px",
                        left: "448px",
                    }
                    } />

                <Image
                    src={patients}
                    alt='patients'
                    style={{
                        width: "85px",
                        height: "20px",
                        position: 'absolute',
                        top: "30px",
                        left: "586px",
                    }

                    } />

                <Image
                    src={dispatch}
                    alt='dispatch'
                    style={{
                        width: "141px",
                        height: "19px",
                        position: 'absolute',
                        top: "29px",
                        left: "714px",
                    }
                    } />

                <Image
                    src={admin}
                    alt='admin'
                    style={{
                        width: "70px",
                        height: "19px",
                        position: 'absolute',
                        top: "30px",
                        left: "898px",
                    }
                    } />


                <Image
                    src={loggedIn}
                    alt='loggedIn'
                    style={{
                        width: "204px",
                        height: "30px",
                        position: 'absolute',
                        top: "23px",
                        left: "1103px",
                    }
                    } />

                <div className="activated">

                </div>

            </nav>


        </div>
    )
}

export default Header