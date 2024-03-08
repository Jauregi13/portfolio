import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar } from './../../components/Navbar/Navbar'
import { Landing } from './../../components/Landing/Landing'
import { Skills } from './../../components/Skills/Skills'
import { headerData } from '../../data/headerData'
import { Education } from '../../components/Education/Education'
import { Experience } from '../../components/Experience/Experience'
import { Projects } from '../../components/Projects/Projects'
import { Contacts } from '../../components/Contacts/Contacts'
import { About } from '../../components/About/About'

export const Main = () => {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Skills />
            <Education />  
            <Experience />          
            <Projects />
            { /*<Achievement /> */}
            {/* <Blog /> */}
            <Contacts />
            {/* <Footer /> */}
        </div>
    )
}
