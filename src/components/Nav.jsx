import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <div className="flex py-8">
      <ul className="flex flex-row mx-auto gap-5">
        <li className="border-2 px-4 py-2 rounded-md hover:bg-blue-100 transition">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="border-2 px-4 py-2 rounded-md hover:bg-blue-100 transition">
          <Link to={'/transition'}>Transition</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav