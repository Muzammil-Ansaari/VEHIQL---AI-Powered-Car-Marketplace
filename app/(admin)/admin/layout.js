import { getAdmin } from '@/actions/admin';
import Header from '@/components/Header';
import { notFound } from 'next/navigation';
import React from 'react'

const AdminRoute = async () => {
    const admin = await getAdmin();
    if(!admin.authorized) {
        return notFound();
    }

  return (
    <div className='h-full'>
        <Header isAdminPage={true} />
    </div>
  )
}

export default AdminRoute