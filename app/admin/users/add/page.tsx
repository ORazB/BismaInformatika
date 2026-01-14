// Components
import UsersAddPanel from "@/components/AdminComponents/Users/UsersAddPanel";

export default function AddUserAdmin() {
  return(
  <section className="m-28">
    <div className="container mx-auto max-w-2xl px-8">
      <h1 className="text-text mb-8 text-4xl font-semibold tracking-wide">
        Add User
      </h1>

      <UsersAddPanel />
    </div>
  </section>
  )
}