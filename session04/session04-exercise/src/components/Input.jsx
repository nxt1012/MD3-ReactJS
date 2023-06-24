import { MDBBtn, MDBInputGroup } from 'mdbreact'
import React from 'react'

export default function Input() {
  return (
    <div>
        <MDBInputGroup
          material
          containerClassName="mb-3 mt-0"
          hint="Recipient's username"
          append={
            <MDBBtn
              color="secondary"
              className="m-0 px-3 py-2 z-depth-0"
            >
              BUTTON
            </MDBBtn>
          }
        />
    </div>
  )
}
