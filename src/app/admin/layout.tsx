import { getCurrentUser } from "@/services/session";
import NotAlowedPage from "../(auth)/unauthorized/page";

interface Props {
  children: React.ReactNode;
}

export default async function AdminLayout({ children }: Props) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    /* @ts-expect-error Server Component */
    return <NotAlowedPage message="You must be logged in." />
  }

  if (currentUser?.role !== "admin") {
    /* @ts-expect-error Server Component */
    return <NotAlowedPage message="Only admin role allowed." />
  }

  return (
    <div className="flex justify-center flex-grow w-full">{children}</div>
  )
}
