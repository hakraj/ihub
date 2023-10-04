import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navigation/NavigationBar";
import styles from "../../styles.module.css"


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <div className={`${styles.hidelg}`}>
        <NavBar />
      </div>
      {children}
      <div className={`${styles.hidelg}`}>
        <Footer />
      </div>
    </main>


  )
}