import React from 'react'


export default function Home() {
  return (
    <div className="bg-dark text-white p-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-3 fw-bold">MATERIAL DONOR MUTUTAL ASSIST.</h1>
          <p className="mt-4 fs-5">
            This application is for maintaining the donor details, to track the donations and to send the donors
            timely emails. This encoragues the engagement with donors.
          </p>
        </div>
        <div className="col-md-6 position-relative">
          <img
            alt="Children learning"
            className="rounded-circle"
            height="400"
            src="/cycle.jpg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width="400"
          />
          <img
            alt="Be more"
            className="rounded-circle position-absolute bottom-0 end-0 translate-middle"
            height="200"
            src="/image.jpg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
        </div>
      </div>
    </div>

  )
}