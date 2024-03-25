import Image from 'next/image'
import React from 'react'
import images from '../../../../public/images/20240227_163829.jpg'
function Dashboard() {
    return (
        <div>
            Dashboard
            <Image src={images} alt='SoorajXcode' />
        </div>
    )
}

export default Dashboard