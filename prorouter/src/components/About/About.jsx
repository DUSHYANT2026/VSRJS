import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src= {'./aac2.jpg'}
                          alt="ALL ABOUT CODING"
                          className='rounded-2xl'
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          All About Coding
                      </h2>
                      <p className="mt-6 text-gray-700 font-bold ">
                      Welcome to All About Coding, your ultimate resource for mastering Data Structures and Algorithms (DSA) and building a strong foundation for your career in tech.
At All About Coding, we provide comprehensive notes, curated questions, and step-by-step guides that cover every essential topic in DSA. Whether you’re a beginner just starting out or an advanced learner sharpening your skills, our resources are designed to help you learn effectively and build confidence.
But we don’t stop at just coding. We understand that college life is a journey, and excelling in placements requires more than just technical knowledge. That’s why we’ve created a detailed roadmap tailored to each year of college, outlining the skills, projects, and preparation strategies you need to succeed at every stage. From freshman year to final placements, we’ve got you covered.
                      </p>
                      <p className="mt-4 text-gray-700 font-bold">
                      What We Offer:
Comprehensive DSA Content: Notes and problem sets that make complex topics simple.
Placement-Oriented Pathways: Year-by-year plans to guide you through skill-building, internships, and placements.
Expert Insights: Tips and strategies to excel in coding interviews and land your dream job.
Community Support: A growing network of learners and experts to help you on your journey.
Join All About Coding today and take the first step toward unlocking your full potential. Together, we’ll make your coding journey successful and your placement dreams a reality.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}