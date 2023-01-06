import React from 'react'
import data from '../data'

function HighlightsPanel() {
  return (
    <div className='highlights-panel-container'>
      <div className='panel-wrapper'>
        <div className='panel-header'>
          <p>How Can I Help You?</p>
          <p>
            Our work then targeted, best practices outcomes social innovation
            synergy. Venture philanthropy, revolutionary inclusive policymaker
            relief. User-centered program areas scale.
          </p>
        </div>

        <div className='panel-body'>
          {data.map((item) => {
            return (
              <div className='panel-body-container' key={item.id}>
                <div className='panel-body-header'>
                  <p>{item.title}</p>
                  {item.icon}
                </div>

                <div className='panel-body-detail'>
                  <p>{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HighlightsPanel
