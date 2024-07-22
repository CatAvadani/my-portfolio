'use client';
import { experiencesData } from '@/data';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BorderBeam } from './ui/Boarder';
import Underline from './ui/Underline';

const Experience = () => {
  return (
    <div id='experience'>
      <h1 className='text-2xl font-bold text-center'>Experience</h1>
      <Underline className=' mb-16' />
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className='vertical-timeline-element--work '
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              visible={true}
              contentArrowStyle={{
                borderRight: '0.4rem solid rgba(255, 255, 255, 0.15)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
              }}
            >
              <BorderBeam />

              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-4 !font-normal text-gray-700 dark:text-white/75'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
