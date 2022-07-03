import React from 'react'
import Image from 'next/image';

function Feature() {
  return (
    <div className='partners__feat'>
      <div className="partners__feat__left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac ut enim mauris laoreet commodo adipiscing fringilla sollicitudin. Nunc blandit a facilisis elementum. Consequat amet venenatis ornare sed at euismod est. Velit etiam enim sed cursus. Id adipiscing nibh eu sem. Sapien orci dui quis nisl faucibus nulla augue nisi. Amet dui viverra at ut quis eros amet. Porttitor tellus lorem ultrices lectus sit pharetra faucibus at. Aenean placerat a tempor cras felis gravida a, quis nisl.
        In pretium convallis blandit cras risus cursus. Malesuada amet aliquet pharetra, nec bibendum. Tristique maecenas sit nisl sollicitudin placerat. Pellentesque cursus netus pharetra vitae risus diam tristique lorem molestie. Volutpat ultricies sollicitudin commodo viverra neque duis in. Risus nascetur tincidunt at dui egestas mattis faucibus nulla nisl. Senectus arcu eget diam ipsum eu et amet hendrerit in.
      </div>
      <div className="partners__feat__right">
      <Image
        src={'/assets/images/feature.png'}
        alt="Buildings"
        width={400}
        height={670}
      />
      </div>
    </div>
  )
}

export default Feature;