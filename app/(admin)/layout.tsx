import React from 'react'

const AdminLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
      <div className="">
        <div className="">
            {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
