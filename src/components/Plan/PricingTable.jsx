import React from 'react';

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
                        <h1 className="display-4 fw-normal text-body-emphasis">Planos Floressência</h1>
                        <p className="fs-5 text-body-secondary">
                            Escolha o plano que melhor se adapta à sua jornada de autoconhecimento e fortalecimento profissional.
                        </p>
                    </div>
                </header>

                <main>
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        {[
                            { plan: "Essencial", price: "Gratuito", sessions: "Jornada gamificada", resources: "Reflexões diárias", support: "Diários da trilha de jogos", button: "Começar gratuitamente", btnClass: "btn-outline" },
                            { plan: "Avançado", price: "R$29,90", sessions: "Artigos e conteúdos personalizados ilimitados", resources: "Temas exclusivos de escrita", support: "Criação ilimitada de notas pessoais", button: "Assinar agora", btnClass: "btn-pink" },
                            { plan: "Profissional", price: "R$299", sessions: "Tudo dos planos anteriores ", resources: "mais", support: "2 meses gratuitos de desconto", button: "Entrar em contato", btnClass: "btn-pink", highlight: true }
                        ].map((option, idx) => (
                            <div className="col" key={idx}>
                                <div className={`cards mb-4 rounded-3 shadow-sm ${option.highlight ? "border" : ""}`}>
                                    <div className={`card-header py-3 ${option.highlight ? "text-bg border" : ""}`}>
                                        <h4 className="my-0 fw-normal">{option.plan}</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">
                                            {option.price}<small className="text-body-secondary fw-light">/mês</small>
                                        </h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>{option.sessions}</li>
                                            <li>{option.resources}</li>
                                            <li>{option.support}</li>
                                        </ul>
                                        <button type="button" className={`w-100 btn btn-lg ${option.btnClass}`}>
                                            {option.button}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="display-6 text-center mb-4">Comparar Planos</h2>

                    <div className="table-responsive">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th style={{ width: "34%" }}></th>
                                    <th style={{ width: "22%" }}>Essencial</th>
                                    <th style={{ width: "22%" }}>Avançado</th>
                                    <th style={{ width: "22%" }}>Profissional</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: "Acesso a Artigos Ilimitados", essencial: false, avancado: true, profissional: true },
                                    { feature: "Jornada Gamificada", essencial: true, avancado: true, profissional: true },
                                    { feature: "Reflexões diárias", essencial: true, avancado: true, profissional: true },
                                    { feature: "Diários da trilha de jogos", essencial: true, avancado: true, profissional: true },
                                    { feature: "Criação Ilimitada de Notas Pessoais", essencial: false, avancado: true, profissional: true }
                                ].map((row, idx) => (
                                    <tr key={idx}>
                                        <th scope="row" className="text-start">{row.feature}</th>
                                        <td>{row.essencial && <svg className="bi" width="24" height="24"><use xlinkHref="#check" /></svg>}</td>
                                        <td>{row.avancado && <svg className="bi" width="24" height="24"><use xlinkHref="#check" /></svg>}</td>
                                        <td>{row.profissional && <svg className="bi" width="24" height="24"><use xlinkHref="#check" /></svg>}</td>
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