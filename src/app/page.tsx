
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { FileUpload } from "@/components/ui/file-upload";
import clsx from "clsx";
import { MacbookScroll } from "@/components/ui/macBookScroll";
export default async function Home() {

  const { userId } = await auth();
  const isAuth = !!userId



  return (
    // <main className="flex min-h-screen w-screen flex-col items-center justify-start p-6 bg-gradient-to-br from-slate-200 from-10% via-teal-100 via-30% to-emerald-500 to-90">
    //   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
    //     <div className="flex flex-col items-start justify-center text-start">
    //       <div className="flex items-center">
    //         <h1 className="text-2xl mr-2">Chat with any PDF</h1>
    //         <UserButton signInUrl="" />
    //       </div>

    //       <div className="flex mt-1">
    //         {
    //           isAuth && <Button className="mt-1 flex">Go to Chats</Button>
    //         }
    //       </div>


    //       <p className="max-w-xl text-lg mt-1 text-slate-600">How magical would it be if your study material could talk with you, and answer all your douts? Well say no more. </p>
    //       <div className="w-full mt-2">
    //         {
    //           isAuth ? <FileUpload /> : <Link href="sign-in"><Button>Lets get started <LogIn strokeWidth={1} size={20} className="ml-1" /></Button></Link>
    //         }
    //       </div>

    //     </div>
    //   </div>
    // </main>

    <main className={clsx("flex min-h-screen h-screen w-screen m-0 pb-0 pt-0 bg-gradient-to-br from-slate-200 from-10% via-teal-100 via-30% to-emerald-500 to-90 md:flex-col sm:flex-col lg:flex-row sm:justify-start sm:items-start md:justify-start md:items-start md:overflow-y-scroll sm:overflow-y-scroll")}>

      <div className="lg:w-1/2 md:w-screen sm:w-screen min-h-screen flex flex-col items-center justify-center px-2">

        <div className="flex flex-col items-start justify-center text-start">
          <div className="flex items-center">
            <h1 className="text-2xl mr-2">Chat with any PDF</h1>
            <UserButton signInUrl="" />
          </div>

          <div className="flex mt-1">
            {
              isAuth && <Button className="mt-1 flex">Go to Chats</Button>
            }
          </div>


          <p className="max-w-xl text-lg mt-1 text-slate-600">How magical would it be if your study material could talk with you, and answer all your douts? Well say no more. </p>
          <div className="w-full mt-2">
            {
              isAuth ? <FileUpload /> : <Link href="sign-in"><Button>Lets get started <LogIn strokeWidth={1} size={20} className="ml-1" /></Button></Link>
            }
          </div>

        </div>
      </div>
      <div className="lg:w-1/2 md:w-full sm:w-full min-h-screen flex flex-col items-center justify-center bg-slate-950">

      </div>
    </main>
  );
}

