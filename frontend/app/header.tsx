import Link from 'next/link'

const Header = () => {
  return (

    <div className="flex bg-slate-900 items-center justify-between p-12">
      <div>
        <h2 className="uppercase text-white font-medium">Todo.</h2>
      </div>
      <article className="flex items-center text-center mr-3">
        <Link href={"/"} className="text-xl text-white hover:scale-110 duration-200 ">Home</Link>
        <div className="ml-4"></div>
        <Link href={"/profile"} className="text-xl text-white hover:scale-110 duration-200">Profile</Link>
        {/* <LogoutBtn /> */}
      </article>
    </div>
  )
}

export default Header;