import React, { useState } from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { ServiceCard } from './ServiceCard'

const CardSection = () => {
  const cardData = [
    {
      title: 'Strategic Growth & Goverance',
      smallDescription:
        'Steering organizations towards enduring success through informed decision-making and direction.',
      description:
        'Strategic Planning and Business Strategy	\n Corporate Governance\n Legal Entity Formation\n Compliance and Regulatory\n Additional Services',
    },
    {
      title: 'Audit and Assurance',
      smallDescription:
        'Ensuring financial integrity and compliance through meticulous examination and verification.',
      description:
        'Statutory Audit under Indian and International GAAP \n Internal Audit \n Agreed Upon Procedures \n Investigation and Special Audits \n Review Services',
    },
    {
      title: 'Technology and Process Optimisation',
      smallDescription:
        'Enhancing productivity and efficiency through customised, innovative tools and streamlined workflows.',
      description:
        ' Business process reengineering \n ERP implementation and optimisation \n Financial systems automation	 \n Cloud computing advisory	\n Supply chain optimisation	 \n Change management and training	 ',
    },
    {
      title: 'Goods & Services Tax',
      smallDescription:
        'Proficient handling of Goods and Services Tax compliance for businesses including Litigation.',
      description:
        'GST Registration \n GST Compliance \n GST Litigation \n Input Tax Credit \n Others',
    },
    {
      title: 'Income Tax',
      smallDescription:
        'Offering expert guidance and management for tax obligations with optimum planning. .',
      description:
        'Income Tax  \n Tax Compliance and Filing \n Tax Compliance and Filing \n Income Tax Litigation Support \n Others',
    },
    {
      title: 'Specialized Services',
      smallDescription: 'Offering services which require attention to detail. ',
      description:
        'Valuation & Due Diligence \n Start-up and Early Stage Support \n Insolvency and Debt Resolution	 \n Wealth and Legacy Planning	\n Corporate Finance	 \n Education and Training \n Labour Law	 ',
    },
  ]
  return (
    <div
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
      style={{ marginTop: '2%', marginBottom: '8%' }}
    >
      {cardData.map((data, index) => (
        <ServiceCard
          key={index}
          title={data.title}
          smallDescription={data.smallDescription}
          description={data.description}
        />
      ))}
    </div>
  )
}
export default CardSection
