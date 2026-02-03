
import Menu from './Menu'
function SideBar() {
  return (
    <div className='w-[20vw] h-screen bg-red-400 flex flex-col gap-y-20 p-2'>
      <h1 className='text-3xl font-bold'>Logo</h1>
      <Menu />
    </div>
  )
}

export default SideBar
