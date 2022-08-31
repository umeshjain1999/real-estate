import Link from 'next/link'
import { useSticky } from 'hooks'
function ProjectTab({
  projectTabs = []
}) {
  const { sticky, stickyRef } = useSticky();

  return (
    <>
      <div className={`project__tab ${sticky ? 'sticky' : ''}`} ref={stickyRef}>
        {projectTabs && projectTabs.map((data, index) => {
          if (data && data?.title && data?.data) {
            return (
              <Link href={data?.link} key={index}>
                <a className='project__tab-button'>{data?.title}</a>
              </Link>
            )
          }
        })}
      </div>
      {sticky && (
        <div
          style={{
            height: `${stickyRef.current?.clientHeight}px`
          }}
        />
      )}
    </>
  )
}

export default ProjectTab