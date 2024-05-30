import { useState } from 'react'
import BottomLine from '../../components/BottomLine'

const Services = () => {
  const [hovered, setHovered] = useState(null)
  const services = [
    {
      title: 'Strategic Growth & Governance',
      services: [
        {
          id: 11,
          title: 'Strategic Planning and Business Strategy',
          services: [
            'Business Strategy and Planning',
            'Market Expansion Strategy',
            'Investment Appraisal',
            'Cost Reduction and Efficiency Improvement',
          ],
        },
        {
          id: 12,
          title: 'Corporate Governance',
          services: [
            'Corporate Governance Advisory',
            'Regulatory Compliance and Reporting',
            'Ethics and Compliance Programs',
            'Risk Management Solutions',
            'Board and Executive Advisory',
          ],
        },
        {
          id: 13,
          title: 'Legal Entity Formation',
          services: [
            'Sole Proprietorship Firm Registration',
            'Partnership Firm Registration',
            'Limited Liability Partnership (LLP) Registration',
            'Private Limited Company Registration',
            'One Person Company (OPC) Registration',
            'NGO Registration',
            'Trust Registration',
          ],
        },
        {
          id: 14,
          title: 'Compliance and Regulatory',
          services: [
            'PF ESI Registration',
            'Startup India Registration',
            'Import Export Code (IEC) Registration',
            'Income Tax Exemption (80G, 12A) Registration',
          ],
        },
        {
          id: 15,
          title: 'Additional Services',
          services: [
            'Sustainability and ESG Advisory',
            'Internal Control Systems',
            'Arbitration',
          ],
        },
      ],
    },
    {
      title: 'Audit and Assurance',
      services: [
        {
          id: 21,
          title: 'Statutory Audit under Indian and International GAAP',
          services: [
            'Indian GAAP Statutory Audit',
            'International Financial Reporting Standards (IFRS) Statutory Audit',
            'Generally Accepted Accounting Principles (GAAP) Statutory Audit',
            'Specific Industry Statutory Audits (e.g., Banking, Insurance, Manufacturing)',
          ],
        },
        {
          id: 22,
          title: 'Internal Audit',
          services: [
            'Risk-Based Internal Audit',
            'Compliance Internal Audit',
            'Operational Internal Audit',
            'Performance Internal Audit',
            'Information Systems Internal Audit',
          ],
        },
        {
          id: 23,
          title: 'Agreed Upon Procedures',
          services: [
            'Examination of Specific Accounts',
            'Verification of Compliance with Terms of a Contract',
            'Confirmation of Specific Financial Information',
            'Investigation of Financial Irregularities',
            'Verification of Regulatory Compliance',
          ],
        },
        {
          id: 24,
          title: 'Investigation and Special Audits',
          services: [
            'Forensic Audit',
            'Fraud Investigation',
            'Financial Statement Fraud Detection',
          ],
        },
        {
          id: 25,
          title: 'Review Services',
          services: [
            'Limited Review of Financial Statements',
            'Review of Internal Controls',
            'Review of Compliance with Specific Regulations',
            'Review of Corporate Governance Practices',
            'Review of Tax Compliance',
          ],
        },
      ],
    },
    {
      title: 'Technology and Process Optimisation',
      services: [
        {
          id: 31,
          title: 'Business process reengineering',
          services: [
            'Process Analysis and Optimization',
            'Workflow Automation',
            'Change Management Planning',
          ],
        },
        {
          id: 32,
          title: 'ERP Implementation and Optimization',
          services: [
            'Tally Prime Migration',
            'Zoho Books Implementation',
            'Quick Books Migration',
            'User Training and Support',
          ],
        },
        {
          id: 33,
          title: 'Financial systems automation',
          services: [
            'Business Process Automation',
            'Compliance Automation',
            'Audit Trail and Controls Implementation',
          ],
        },
        {
          id: 34,
          title: 'Cloud Computing Advisory',
          services: [
            'Cloud Migration Strategy',
            'Cloud Readiness Assessment',
            'Cloud Security Planning',
            'Cloud Cost Optimization',
          ],
        },
        {
          id: 35,
          title: 'Supply chain optimisation',
          services: [
            'Supply Chain Analysis',
            'Inventory Management Optimization',
            'Demand Forecasting and Planning',
            'Logistics and Distribution Optimization',
          ],
        },
        {
          id: 36,
          title: 'Change management and training',
          services: [
            'Change Readiness Assessment',
            'Communication and Education',
            'Training Program Development',
            'Post-Implementation Support',
          ],
        },
      ],
    },
    {
      title: 'Goods & Services Tax',
      services: [
        {
          id: 41,
          title: 'GST Registration',
          services: [
            'Regular registration',
            'Composition Scheme ',
            'Input Service Distributor ',
            'TDS and TCS ',
            'Non Resident Taxable Person',
            'Casual Taxable Person',
            'Cancellation of GST Registration',
          ],
        },
        {
          id: 42,
          title: 'Compliance',
          services: ['Monthly Returns', 'Quarterly Returns', 'Annual Returns'],
        },
        {
          id: 43,
          title: 'Litigation',
          services: [
            'Pre Show Cause Notice Assistance',
            'Post Show Cause Notice Assistance',
            'Appeals Management',
            'Representation before Tribunal and Tax authorities',
            'Writ Petition',
          ],
        },
        {
          id: 44,
          title: 'Input Tax Credit',
          services: [
            'Input Tax Credit Eligibility Assessment',
            'ITC Reconciliation:',
            'ITC Utilisation Planning',
            'ITC Compliance Review',
            'ITC Advisory Services',
          ],
        },
        {
          id: 45,
          title: 'Others',
          services: [
            'GST advisory services',
            'GST Audit and assurance	',
            'GST Refund assistance	',
            'Cross- Border GST consulting	',
            'Transaction structuring under GST	',
            'Compliance Review and Health checks	',
            'Technology Solutions for GST	',
          ],
        },
      ],
    },
    {
      title: 'Specialized Services',
      services: [
        {
          id: 51,
          title: 'Valuation & Due Diligence',
          services: [
            'Business Valuation	',
            'Financial Due Diligence	',
            'Transaction Due Diligence	',
            'Intellectual Property Valuation	',
          ],
        },
        {
          id: 52,
          title: 'Start-up and Early Stage Support',
          services: [
            ' Business Structuring and Incorporation	',
            'Financial Modeling and Projections	',
            'Fundraising Assistance (Seed Funding, Venture Capital, Angel Investment)	',
            'Regulatory Compliance Advisory	',
            'Business Plan Development	',
          ],
        },
        {
          id: 53,
          title: 'Insolvency and Debt Resolution',
          services: [
            'Insolvency Resolution Advisory	',
            'Debt Restructuring and Negotiation	',
            'Bankruptcy Filing Assistance	',
            "Creditors' Rights Representation	",
            'Liquidation and Winding-Up Services	',
          ],
        },
        {
          id: 54,
          title: 'Wealth and Legacy Planning',
          services: [
            'Estate Planning	',
            'Will Drafting and Execution	',
            'Trust Formation and Administration	',
            'Succession Planning for Family-Owned Businesses	',
            'Asset Protection Strategies	',
          ],
        },
        {
          id: 55,
          title: 'Corporate Finance',
          services: [
            'Merger and Acquisition Advisory',
            'Capital Raising (Debt and Equity)',
            'Private Equity and Venture Capital Services',
            'Financial Restructuring',
            'Strategic Financial Advisory',
          ],
        },
        {
          id: 56,
          title: 'Education and Training',
          services: [
            ' Financial Literacy Workshops',
            'Accounting and Tax Training for Business Owners',
            'Professional Development Programs for Finance Teams',
            'Seminars and Webinars on Regulatory Updates',
            'Customized Training for Specific Industries or Sectors',
          ],
        },
        {
          id: 57,
          title: 'Labour Law',
          services: [
            ' Labour Law Compliance Audit',
            'Employment Contract Drafting and Review',
            'Employee Benefit Planning',
            'Dispute Resolution and Litigation Support',
            'Labour Law Advisory Services',
          ],
        },
      ],
    },
    {
      title: 'Income Tax ',
      services: [
        {
          id: 61,
          title: 'Tax Planning and Advisory',
          services: [
            'Strategic Tax Planning',
            'Personal Tax Planning',
            'Corporate Tax Planning',
            'Tax Optimization Strategies',
            'Retirement Planning',
          ],
        },
        {
          id: 62,
          title: 'Tax Compliance and Filing',
          services: [
            'Income Tax Return (ITR) Services',
            'Tax Deduction at Source (TDS) Compliance',
            'Advance Tax Calculation and Compliance',
            'Annual Tax Compliance Review',
          ],
        },
        {
          id: 63,
          title: 'Tax Dispute Resolution',
          services: [
            'Dispute Resolution Services',
            'Tax Tribunal Representation',
          ],
        },
        {
          id: 64,
          title: 'Income Tax Litigation Support',
          services: [
            'Pre Show Cause Notice Assistance',
            'Post Show Cause Notice Assistance',
            'Appeals Management',
            'Representation before Tribunal and Tax authorities',
            'Writ Petition',
          ],
        },
        {
          id: 65,
          title: 'Others',
          services: [
            '  International Taxation Advisory',
            'Domestic and International Transfer Pricing',
            'Tax Due Diligence',
            'Cross-Border Transaction Advisory',
            'Regulatory Support under FEMA, and RBI Guidelines',
            'Disclosure of Foreign Assets',
          ],
        },
      ],
    },
  ]
  return (
    <div className='bg-black py-20 px-5 flex items-center justify-center'>
      <div>
        <p className='text-3xl  mt-10'>Services</p>
        {/* <BottomLine /> */}
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {services.map((service, i) => (
            <div key={i} className='border rounded-lg p-4 cursor-pointer'>
              <p className='text-xl  mb-4 text-[#8dce19]'>{service.title}</p>
              <ul className='list-disc ml-5'>
                {service.services.map((subService, j) => (
                  <li
                    key={j}
                    className='relative my-2'
                    onMouseEnter={() => setHovered(subService.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <p className=''>{subService.title}</p>
                    <div
                      className={`absolute  z-20 pl-10 bg-black top-0 w-[200px]  md:w-[230px] lg:w-[250px] left-[5%] md:left-[30%] lg:left-[40%]  p-2 border rounded-lg ${
                        hovered === subService.id ? 'block' : 'hidden'
                      }`}
                    >
                      <ul className='list-disc'>
                        {subService.services.map((serve, k) => (
                          <li key={k}>{serve}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
