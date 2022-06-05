/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

export default function Contact() {
    return (
        <div>
                <h2 class="text-center">Contact Us</h2>

<div class="container">
  <div class="row">
    <div class="col-md-6 map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.38704996006!2d73.73344037929347!3d19.9909492962968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651917613391!5m2!1sen!2sin"
        width="450"
        height="550"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="col-md-6">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Your Name</label
          >
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"
            >Your Address</label
          >
          <input type="text" class="form-control" />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"
            >Your Mobile
          </label>
          <input type="number" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"
            >Message
          </label>

          <textarea
            class="form-label"
            name="Message"
            id=""
            cols="70"
            rows="5"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>
        </div>
    )
}
