import { SignedIn } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button';
import { ArrowLeft, CarFront, Heart } from 'lucide-react';

const Header = async ({ isAdminPage = false }) => {
  const isAdmin = false;
  return <header className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
    <nav className='flex items-center justify-between mx-auto py-2 px-4'>
      <Link href={isAdminPage ? "/admin" : "/"} className='flex'>
        <Image src={"/logo.png"} alt='Vehiql Logo' width={200} height={60} className='h-12 w-auto object-contain' />

        {isAdminPage && (
          <span className='text-sm font-extralight'>Admin</span>
        )}
      </Link>

      <div className='flex items-center space-x-4'>
        {isAdminPage ? (
          <Link href={"/saved-cars"}>
            <Button variant={"outline"} className={"flex items-center gap-2"}>
              <ArrowLeft size={18} />
              <span>Back to App</span>
            </Button>
          </Link>
        ) : (
          <SignedIn>
            <Link href={"/saved-cars"}>
              <Button>
                <Heart size={18} />
                <span className='hidden md:inline'>Saved Cars</span>
              </Button>
            </Link>

            {!isAdmin ? (<Link href={"/reservations"}>
              <Button variant={"outline"}>
                <CarFront size={18} />
                <span className='hidden md:inline'>My Reservations</span>
              </Button>
            </Link>) :

              (<Link href={"/admin"}>
                <Button variant={"outline"}>
                  <CarFront size={18} />
                  <span className='hidden md:inline'>Admin Portal</span>
                </Button>
              </Link>)}
          </SignedIn>
        )}

        
      </div>
    </nav>
  </header>
}

export default Header