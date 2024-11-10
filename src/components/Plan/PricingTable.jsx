import React from 'react';
import './PricingTable.css';

const PricingTable = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol id="check" viewBox="0 0 16 16">
                    <title>Check</title>
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </symbol>
            </svg>

            <div className="container py-3">
                <header>
                    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h1 className="display-4 fw-normal text-body-emphasis">Pricing</h1>
                        <p className="fs-5 text-body-secondary">
                            Quickly build an effective pricing table for your potential customers with this Bootstrap example.
                            It’s built with default Bootstrap components and utilities with little customization.
                        </p>
                    </div>
                </header>

                <main>
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        {[
                            { plan: "Free", price: "$0", users: "10 users included", storage: "2 GB of storage", support: "Email support", access: "Help center access", button: "Sign up for free", btnClass: "btn-outline-primary" },
                            { plan: "Pro", price: "$15", users: "20 users included", storage: "10 GB of storage", support: "Priority email support", access: "Help center access", button: "Get started", btnClass: "btn-pink" },
                            { plan: "Enterprise", price: "$29", users: "30 users included", storage: "15 GB of storage", support: "Phone and email support", access: "Help center access", button: "Contact us", btnClass: "btn-pink", highlight: true }
                        ].map((option, idx) => (
                            <div className="col" key={idx}>
                                <div className={`card mb-4 rounded-3 shadow-sm ${option.highlight ? "border-primary" : ""}`}>
                                    <div className={`card-header py-3 ${option.highlight ? "text-bg-primary border-primary" : ""}`}>
                                        <h4 className="my-0 fw-normal">{option.plan}</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">
                                            {option.price}<small className="text-body-secondary fw-light">/mo</small>
                                        </h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>{option.users}</li>
                                            <li>{option.storage}</li>
                                            <li>{option.support}</li>
                                            <li>{option.access}</li>
                                        </ul>
                                        <button type="button" className={`w-100 btn btn-lg ${option.btnClass}`}>
                                            {option.button}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="display-6 text-center mb-4">Compare plans</h2>

                    <div className="table-responsive">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th style={{ width: "34%" }}></th>
                                    <th style={{ width: "22%" }}>Free</th>
                                    <th style={{ width: "22%" }}>Pro</th>
                                    <th style={{ width: "22%" }}>Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: "Public", free: true, pro: true, enterprise: true },
                                    { feature: "Private", free: false, pro: true, enterprise: true },
                                    { feature: "Permissions", free: true, pro: true, enterprise: true },
                                    { feature: "Sharing", free: false, pro: true, enterprise: true },
                                    { feature: "Unlimited members", free: false, pro: true, enterprise: true },
                                    { feature: "Extra security", free: false, pro: false, enterprise: true }
                                ].map((row, idx) => (
                                    <tr key={idx}>
                                        <th scope="row" className="text-start">{row.feature}</th>
                                        <td>{row.free && <svg className="bi" width="24" height="24"><use xlinkHref="#check" /></svg>}</td>
                                        <td>{row.pro && <svg className="bi" width="24" height="24"><use xlinkHref="#check" /></svg>}</td>
                                        <td>{row.enterprise && <svg className="bi" width="24" height="24"><use xlinkHref="#check" /></svg>}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    );
};

export default PricingTable;
