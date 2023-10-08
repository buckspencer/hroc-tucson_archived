import Image from 'next/image'
import React from 'react'
import screenshotExpenses from '@/images/church-background1.png'

const Info = ({ title, description, fullText, image }) => {
    return (
        <div className="bg-[#E8DDB5] rounded-lg px-6 py-6 lg:px-8">
            <Image src={screenshotExpenses} className='w-1/5 mx-auto' width={60} height={60} alt="description" />
            <h2 className="font-display text-3xl">
                {title}
            </h2>
            <div className="max-h-64 overflow-y-auto custom-scrollbar">
                <p>
                    {fullText}
                </p>
            </div>
        </div>

    )
}

export default Info