import { ProfileForm } from "@/components/form-component";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center text-blue-600 my-10">Welcome to My Page</h1>
        <ProfileForm/>
      </div>
    </div>
  )
}
