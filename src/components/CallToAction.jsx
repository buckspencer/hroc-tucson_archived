"use client"
import { useState, useEffect } from 'react'


export function CallToAction() {
  const [calendarData, setCalendarData] = useState({});
  const [focusSaint, setFocusSaint] = useState(false);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [currentReadingIndex, setCurrentReadingIndex] = useState(0);
  const [currentSaintIndex, setCurrentSaintIndex] = useState(0);


  const handleReadingClick = (index) => {
    setCurrentReadingIndex(index);
    setFocusSaint(false);
  };

  const handleSaintClick = (index) => {
    setCurrentSaintIndex(index);
    setFocusSaint(true);
  };


  useEffect(() => {
    const apiUrl = "https://orthocal.info/api/gregorian/";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCalendarData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section
      id="calendar"
      className="relative overflow-hidden py-6"
    >
      <div className="overflow-hidden bg-[#E8DDB5] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start">
            <div className="px-6 md:px-0 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-red-600">{calendarData.titles}</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Daily Reading</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Today&apos;s Saints: {calendarData.summary_title}
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Fast: {calendarData.fast_level_desc}
                </p>
                <dl className="mt-10 max-w-xl space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">

                  {calendarData.readings.map((reading, index) => (
                    <div key={index} className="relative">
                      <dt
                        className="inline font-semibold text-gray-900"
                        onClick={() => handleReadingClick(index)} // Set the onClick handler
                        style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate it's clickable
                      >
                        {reading.display}
                      </dt>{' '}
                    </div>
                  ))}
                </dl>
                <dl className="my-8 max-w-xl space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                  Lives of Saints
                  {calendarData.stories.map((story, index) => (
                    <div key={index} className="relative">
                      <dt className="inline font-semibold text-gray-900"
                        onClick={() => handleSaintClick(index)} // Set the onClick handler
                        style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate it's clickable
                      >
                        {story.title}
                      </dt>{' '}
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0">
              <div className="relative isolate bg-white px-8 py-8 mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 lg:mx-0 lg:max-w-none">
                <div
                  className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-red-100 opacity-20 ring-1 ring-inset ring-white"
                  aria-hidden="true"
                />
                {focusSaint ? (
                  <div className="text-base mx-auto leading-7 text-gray-700 lg:max-w-lg">
                    <h1 className="mt-2 mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {calendarData.stories[currentSaintIndex]?.title}
                    </h1>
                    <div className="max-w-xl">
                      <div dangerouslySetInnerHTML={{ __html: calendarData.stories[currentSaintIndex]?.story }}></div>
                    </div>
                  </div>
                ) : (
                  <div className="text-base mx-auto leading-7 text-gray-700 lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-red-600">{calendarData.readings[currentReadingIndex]?.source}</p>
                    <h1 className="mt-2 m text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {calendarData.readings[currentReadingIndex]?.display}
                    </h1>
                    <div className="max-w-xl">
                      {calendarData.readings[currentReadingIndex]?.passage.map((passage, index) => (
                        <p key={index} className='mt-2'>{passage.chapter}:{passage.verse} {passage.content}</p>
                      ))}
                    </div>
                  </div>
                )}
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}
