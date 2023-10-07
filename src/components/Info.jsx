import Image from 'next/image'
import React from 'react'

const Info = ({ title, description, fullText, image }) => {
    return (
        <div className="bg-[#E8DDB5] rounded-lg px-6 py-6 lg:px-8">
            <Image src={image} className='w-1/5 mx-auto' />
            <h2 className="font-display text-3xl">
                {title}
            </h2>
            <p>
                {fullText}
            </p>

        </div>
    )
}

export default Info