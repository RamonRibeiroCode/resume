import Header from "../Header"
import Footer from "../Footer"

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen p-4 bg-primary-black xl:p-[70px]">
      <div className="flex flex-col flex-1 bg-primary-blue-default border border-line-gray rounded-lg">
        <Header />

        <main className="flex flex-col flex-1">{children}</main>

        <Footer />
      </div>
    </div>
  )
}

export default Layout
