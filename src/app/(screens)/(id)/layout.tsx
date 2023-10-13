import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navigation/NavigationBar";
import styles from "../../styles.module.css";


export default function IdLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <div className={`m-0 p-0 ${styles.hidelg}`}>
        <NavBar />
      </div>
      {children}
      <div className={`m-0 p-0 ${styles.hidelg}`}>
        <Footer />
      </div>
    </main>
  )
}