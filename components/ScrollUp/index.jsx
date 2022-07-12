import React from 'react'
import Link from 'next/link'
function ScrollUp() {
  return (
    <Link href={'#top'}>
        <a className = "divider to-the-top" title="To the top">&#8682;</a>
    </Link>
  )
}

export default ScrollUp;