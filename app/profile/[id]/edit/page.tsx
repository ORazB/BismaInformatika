import prisma from "@/lib/prisma";
// Components
import ProfileEditForm from "@/components/ProfileComponents/ProfileEditForm";

export default async function EditProfile({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;
  // Fetch User Data
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  return (
    <section className="m-24">
      <div className="container mx-auto max-w-2xl px-8">
        <h1 className="text-text mb-8 text-4xl font-semibold tracking-wide">
          Edit User
        </h1>

        <ProfileEditForm params={await params} username={user?.username} email={user?.email} address={user?.address} phoneNumber={user?.phoneNumber} role={user?.role} />
      </div>
    </section>
  );
}
