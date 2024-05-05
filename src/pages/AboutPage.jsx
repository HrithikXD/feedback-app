import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>React app for feedback</p>
            <p>Version:1.0.0</p>
            <p>
                <Link to="/">Back</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage