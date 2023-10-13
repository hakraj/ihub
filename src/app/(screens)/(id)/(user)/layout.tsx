import IsAuth from "../../../isAuth";


export default function IdLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <IsAuth>{children}</IsAuth>
  )
}