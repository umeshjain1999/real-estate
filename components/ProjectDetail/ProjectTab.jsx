import Link from 'next/link'

function ProjectTab({
  projectTabs = []
}) {

  return (
    <div className="project__tab">
      {projectTabs && projectTabs.map((data,index) => {
        if(data && data?.title && data?.data){
          return (
            <Link href={data?.link} key={index}>
              <a className='project__tab-button'>{data?.title}</a>
            </Link>
          )
        }
      })}
    </div>
  )
}

export default ProjectTab