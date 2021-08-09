import Header from './header';

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <div className="max-w-screen-xl m-auto mt-12">
        {children}
      </div>
    </div>
  )
}

export default Layout
