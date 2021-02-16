import React from 'react'
import Head from 'next/head'
import { FooterMenu } from '../components/FooterMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { FaqItem } from '../components/FaqItem'
import { DhwCard } from '../components/DhwCard'

export default function Home() {


  return (
    <div className="font-lato ">
      <Head>
        <title>Idaho Vaccination Registration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <div className="flex justify-between bg-dhwBlack bg-opacity-90 h-16 px-3">
          <img className="w-12 self-center" src="/idaho-mtn-logo.svg" alt="mountain logo" />
          <div className="self-center text-sm text-white tracking-widest flex hover:text-gray-400 hover:shadow-sm cursor-pointer">
            <span>Langauges</span>
            <svg className="w-4 ml-1 self-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg></div>
        </div>
      </nav>

      <section className=" flex flex-col bg-no-repeat bg-cover bg-center px-10 mb-28 pt-2 pb-20 w-screen"
        style={{ backgroundImage: 'linear-gradient(180deg, rgba(9,36,93,0.25) 0%, #FFFFFF 100%), url(/covid_splash.jpg)' }}>
        
        <div className="z-10">

        <img src="/idhw-logo.png" className="w-44 mb-40" />
        <h2 className="text-5xl font-bold w-2/3 pb-6">Idaho's COVID-19 Vaccine Registration</h2>
        <div className="text-2xl w-4/5">
          COVID-19 vaccination is one of the most improtant tools to end the pandemic. Use our tool to sign up and be contracted by a provider when a vaccine is available for you.
        </div>
        </div>
      </section>

      <main className=" mx-1 sm:mx-5">




        <div className="flex flex-col space-y-5 sm:space-y-0 sm:space-x-0 sm:flex-row sm:space-x-5 flex-auto ">
          <DhwCard
            imageUrl="/nathan-anderson-GM5Yn5XRVqA-unsplash.jpg"
            alt="Family Image"
            ctaText="Sign Up"
            highlightColor="secondary"
          />
          <DhwCard
            imageUrl="/ani-kolleshi-7jjnJ-QA9fY-unsplash.jpg"
            alt="doctor wearing facemask"
            ctaText="Register"
            highlightColor="tertiary"
          />
        </div>
        <section className="my-36">
          <h2 className="text-3xl font-bold">FAQs</h2>
          <div className="bg-tertiary h-1 w-11 mt-3">&nbsp;</div>
          <div className="flex flex-col space-y-5 pt-6">
            <FaqItem question="Why should I register?" answer="Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.  Non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl." />
            <FaqItem question="How will I know when my vaccine is ready?" answer="Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.  Non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl." />
            <FaqItem question="How long will it take to obtain my vaccine?" answer="Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.  Non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl." />
          </div>
        </section>
      </main>


      <footer className="bg-dhwBlack text-white py-5  w-screen flex flex-col space-y-10 sm:space-y-0 sm:flex-row sm:space-x-24">

        <div className="flex flex-row sm:hidden justify-center">
          <img src="/idhw-logo.png" />
        </div>
        <div className="flex flex-row space-x-8 justify-center order-last sm:order-first sm:justify-start sm:w-28 sm:flex-col sm:space-y-7 sm:space-x-0 flex-shrink-0 flex-grow-0 ">
          <img src="/idhw-logo.png" className="hidden sm:inline" />
          <img src="/idaho-mtn-logo.svg" className="w-24" />
          <img src="usa-idaho-map.svg" className="w-24" />
        </div>

        <div className="flex flex-col sm:w-full">
          <section className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-16">
            <FooterMenu title="About Us" items={[
              { title: 'Non-Discrimination' },
              { title: 'Language Assistance' },
              { title: 'Public Records Request' },
              { title: 'Careers with IDHW' },
              { title: 'Contact Us' },
              { title: 'Site Map' }
            ]} />
            <FooterMenu title="Crisis Services" items={[
              { title: 'Report Child Abuse' },
              { title: 'Report Fraud' }
            ]} />
            <FooterMenu title="Related" items={[
              { title: 'Idaho Careline' },
              { title: 'Idaho.gov', url: "https://idaho.gov" }
            ]} />
          </section>
          <section className="flex flex-row space-x-3 items-center justify-center pt-16 sm:justify-start">
            <FontAwesomeIcon icon={faFacebookSquare} className="w-7" />
            <FontAwesomeIcon icon={faInstagramSquare} className="w-7" />
            <FontAwesomeIcon icon={faTwitterSquare} className="w-7" />
            <FontAwesomeIcon icon={faYoutubeSquare} className="w-7" />
            <FontAwesomeIcon icon={faLinkedinIn} className="w-7" />
          </section>
          <section className="flex flex-col space-y-10 items-center w-full sm:flex-row md:justify-between pt-4 sm:space-y-0">
            <ul className="flex flex-col space-y-0.5 items-center sm:space-y-0 sm:flex-row sm:space-x-12  ">
              <li><a>Accessibility</a></li>
              <li><a>Cybersecurity</a></li>
              <li><a>Privacy</a></li>
              <li><a>Security</a></li>
            </ul>
            {/* <div className="whitespace-nowrap">This site is powerered by <a href="#">CiviServ</a></div> */}
          </section>
        </div>

      </footer>

    </div>

  )
}
