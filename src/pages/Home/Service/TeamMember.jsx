import React, { useState } from 'react'
import anwesh from '../../../assets/anwesh.jpg'
import frenil from '../../../assets/frenil.jpg'
import viresh from '../../../assets/viresh.jpg'
import adril from '../../../assets/adril.jpg'
import hiring from '../../../assets/hiring.png'
import {
  headingAnimation,
  sectionBodyAnimation,
} from '../../../hooks/useAnimation'
import { useInView } from 'react-intersection-observer'
import TeamMemberCard from './TeamMemberCard'
const TeamMember = () => {
  const teamMembers = [
    {
      id: 1,
      img: anwesh,
      name: 'Anwesh Shetty',
      designation: 'FCA, B. Com, LL.B, ACCA',
      body: 'CA Anwesh Shetty is the Managing Partner and leads the litigation wing at ASCA LLP.  He has a comprehensive background in both accounting and law, holding qualifications as a Chartered Accountant and a LLB degree from KLSU. With a distinguished career, Shetty has established himself as a trusted advisor, educator, and practitioner in the field. His proficiency extends to international standards, having pursued studies with the Association of Chartered Certified Accountants (ACCA). Currently pursuing a PhD focusing on GST applicability within the Real Estate industry, Shetty demonstrates an unwavering commitment to advancing knowledge and practice within the profession. He brings together a unique blend of expertise in taxation, litigation, and technological innovation.',
      linkedin: 'https://www.linkedin.com/johndoe',
      instagram: 'https://www.instagram.com/johndoe',
      facebook: 'https://www.facebook.com/johndoe',
    },
    {
      id: 2,
      img: frenil,
      name: 'Frenil Dsouza',
      designation: 'ACA, B. Com, FAFD',
      body: 'With a distinguished career as a practicing Chartered Accountant, Frenil Dsouza stands at the forefront of the Audit wing in ASCA. His expertise traverses the intricate domains of statutory audit, data analytics, forensic audits, and due diligence, where he brings a blend of precision and insight to every engagement. Beyond the confines of financial analysis, Frenil is driven by a profound passion for education. Serving as a dedicated trainer, he has had the privilege of imparting his extensive knowledge of Economics to over 12,000 eager learners across diverse platforms, seamlessly integrating both online and offline mediums. His commitment to education extends beyond instruction, as evidenced by his authorship of two comprehensive academic textbooks on economics, a testament to his unwavering dedication to nurturing knowledge and empowering students.',
      linkedin: 'https://www.linkedin.com/janesmith',
      instagram: 'https://www.instagram.com/janesmith',
      facebook: 'https://www.facebook.com/janesmith',
    },
    {
      id: 3,
      img: viresh,
      name: 'Viresh Shetty',
      designation: 'Senior Tax Manager',
      body: "With a robust foundation cultivated over 8 years within a distinguished Chartered Accountant firm, Viresh Shetty brings forth a wealth of specialized experience in managing complex financial matters and delivering strategic solutions to clients. His tenure epitomizes a commitment to excellence, where he has honed his skills to navigate intricate taxation landscapes with precision and proficiency, ensuring clients' fiscal well-being. Viresh's taxation mastery is unparalleled, with comprehensive knowledge and hands-on experience in income tax filings, audits, and compliance procedures. His expertise extends to Goods and Services Tax (GST), where he provides consultation, manages registrations, and ensures compliance with GST regulations, thereby easing clients' regulatory burdens. His unwavering dedication to excellence and regulatory compliance makes him an invaluable asset to clients seeking comprehensive financial guidance and support.",
      linkedin: 'https://www.linkedin.com/alicejohnson',
      instagram: 'https://www.instagram.com/alicejohnson',
      facebook: 'https://www.facebook.com/alicejohnson',
    },
    {
      id: 4,
      img: adril,
      name: " Adril D'Silva",
      designation: 'Senior Audit Manager',
      body: "Adril Wilber D'silva, a seasoned professional with over a decade of industry experience, stands as a pillar of expertise and leadership in the field of auditing. Currently holding the esteemed position of Senior Audit Manager at ASCA, Adril has honed his skills through years of dedicated service and a commitment to excellence. As an alumnus of Mangalore University, he has cultivated a deep understanding of various audit domains, specializing in internal, concurrent, and statutory audits. His meticulous attention to detail coupled with a relentless pursuit of improvement has set him apart in the industry. Beyond his technical prowess, Adril is known for his exceptional leadership abilities, fostering team coordination and driving efficient project management practices within ASCA.",
      linkedin: 'https://www.linkedin.com/bobwilson',
      instagram: 'https://www.instagram.com/bobwilson',
      facebook: 'https://www.facebook.com/bobwilson',
    },
  ]

  const [ref, inView] = useInView()
  const [viewDiv, setViewDiv] = useState(false)
  return (
    <>
      <div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
        ref={ref}
        initial='hidden'
        animate={viewDiv && 'visible'}
        variants={sectionBodyAnimation}
      >
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            body={member.body}
            name={member.name}
            image={member.img}
            role={member.designation}
          />
        ))}
      </div>{' '}
      <section className='py-4 px-4 pt-10'>
        <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center'>
          <div className='text-center lg:text-left'>
            <button
              className='bg-green-500 hover:bg-blue-700 text-white py-1 px-2 rounded'
              style={{
                backgroundColor: '#8dce19',
                marginBottom: '10px',
              }}
            >
              One-Stop Solution
            </button>
            <h3 className='text-4xl mb-4'> Our Expertise</h3>
            <p className='text-white-600 mb-8'>
              We offer a comprehensive suite of services to empower your
              financial success.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamMember
