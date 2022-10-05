import React from 'react'
import OrgNavbar from './OrgNavbar'
import './Organizer.css'
import Eventjist from './Eventjist'
import OrgTable from './OrgTable'
import Card from '../Card'
function Orgcon() {
  return (
    <>
<OrgNavbar/>
<Card/>
<main>

<Eventjist/>
<OrgTable/>
</main>
</>
  )
}

export default Orgcon