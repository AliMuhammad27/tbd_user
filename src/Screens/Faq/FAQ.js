import React from 'react'

export default function FAQ() {
    return (
        <section>
            <div className="container-fluid" style={{ paddingLeft: "250px", marginTop: "37px", position: "relative" }}>
                <h1 style={{ color: "black" }}>Frequently Asked Questions </h1>
                <h3 style={{ fontSize: 20 }}><strong>What is the time duration for the reply to the email?</strong>

                </h3>
                <p style={{ marginTop: "10px", marginBottom: "10px" }}>We respond to emails within 24-48 hours. Please include your name, contact number, and order number in the email message to avoid delays.</p>

                <h3 style={{ fontSize: 20 }}><strong>I haven't received my order though it shows it was delivered. What do I do?</strong>

                </h3>
                <p style={{ marginTop: "10px", marginBottom: "10px" }}>Due to bad weather or heavy shipping volume, packages shipping through the economy may be delayed. Please allow us 10-15 business days after shipment for delivery. Reach out to our Customer Support if further assistance is required.</p>




                <h3 style={{ fontSize: 20 }}><strong>Can I have my order delivered to a hotel?</strong>

                </h3>
                <p style={{ marginTop: "10px", marginBottom: "10px" }}>We will ship orders to valid addresses. You will need to pay for the postage if the order is received at your provided address. We cannot change delivery addresses after the order has been processed.</p>


                <h3 style={{ fontSize: 20 }}><strong>What payment methods do you accept?</strong>

                </h3>
                <p style={{ marginTop: "10px", marginBottom: "10px" }}>We accept Cash on Delivery and online payments via Visa, American Express, MasterCard, Discover, PayPal, Venmo, Apple Pay, etc.</p>

            </div>
            <div style={{ height: "50px" }}></div>
        </section>
    )
}
