import Link from 'next/link'
function ProjectTab() {

  return (
    <div className="project__tab">
      {arr && arr.map((data,index) => {
        return (
        <Link href={data?.link} key={index}>
          <a className='project__tab-button'>{data?.title}</a>
        </Link>
        )
      })}
    </div>
  )
}

const arr = [
  {
    title : "Overview",
    link : "#project-overview"
  },
  {
    title : "Highlights",
    link : "#project-highlights"
  },
  {
    title : "About Project",
    link : "#project-about"
  },
  {
    title : "Floor Plan & Price",
    link : "#project-plan-price"
  },
  {
    title : "Amenities",
    link : "#project-amenities"
  },
  {
    title : "Locality",
    link : "#project-locality"
  },
  {
    title : "About Developers",
    link : "#project-developers"
  },
]

export default ProjectTab