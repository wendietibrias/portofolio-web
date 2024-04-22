import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceSection = () => {
    return (
        <div className="w-full py-20">
            <div className="w-[80%]  xl:w-full md:w-full  xl:px-10 sm:px-5 mx-auto">
                <div className="text-center">
                  <h5 className="text-blue-500  text-sm font-semibold">Experience</h5>
                  <h2 className="text-2xl font-bold mt-1 text-gray-800 uppercase">My Experiences</h2>
               </div>
              <div className='mt-12'>
              <VerticalTimeline>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="November 2022 - December 2022"
                    dateClassName='text-gray-700'
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title font-bold">Fullstack Web Developer Internship</h3>
                    <h4 className="vertical-timeline-element-subtitle text-sm mt-2">PT Kita Serba Digital</h4>
                    <ul className='mt-5 flex flex-col gap-y-3 list-disc'>
                        <li>
                            <span className='text-sm'>
                               Developing a web application that facilitates the creation of job seeker cards using Laravel.
                            </span>
                        </li>
                        <li>
                            <span className='text-sm'>
                               Build an integrated connection between client and server with Jquery AJAX.
                            </span>
                        </li>
                        <li>
                            <span className='text-sm'>
                              Build a Form validation logic using Laravel validation.
                            </span>
                        </li>
                    </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="October 2023 - April 2024"
                    dateClassName='text-gray-700'
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title font-bold">Backend Developer Internship</h3>
                    <h4 className="vertical-timeline-element-subtitle text-sm mt-2">Thinkspedia</h4>
                    <ul className='mt-5 flex flex-col gap-y-3 list-disc'>
                        <li>
                            <span className='text-sm'>Build an Integrated connection between client and server with Nest.js..</span>
                        </li>
                        <li>
                            <span className='text-sm'>Build an API documentation using Swagger API.</span>
                        </li>
                        <li>
                            <span className='text-sm'>
                               Build a Data Transfer Object (DTO) to validate body request from user using class-validator.
                            </span>
                        </li>
                        <li>
                            <span className='text-sm'>
                               Implement Event Driven Architecture using RabbitMQ as message broker to build a connection among the services.
                            </span>
                        </li>
                        <li>
                            <span className='text-sm'>
                               Manage user data using NOSQL Database MongoDB.
                            </span>
                        </li>
                        <li>
                            <span className='text-sm'>
                               Implement caching using Redis to improve App performance.
                            </span>
                        </li>
                        <li>
                            <span className="text-sm">
                               Perform daily minor bug fixing.
                            </span>
                        </li>
                        <li>
                            <span className='text-sm'>
                               Build Guard for endpoint protection and validating JWT token from client.
                            </span>
                        </li>
                    </ul>
                    </VerticalTimelineElement>
               </VerticalTimeline>
              </div>
            </div>
        </div>
    )
}

export default ExperienceSection;