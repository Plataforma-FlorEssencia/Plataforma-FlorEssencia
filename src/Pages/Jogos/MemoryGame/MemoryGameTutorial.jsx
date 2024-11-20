

function MemoryGameTutorial() {

    return (
        <div className="memory-game-container">
            <h1 className="title">Bem-vinda ao Jogo da Memória Qualidades em dobro</h1>

            <div className="line"></div>



            <div className="instrucoes">
                <div className="step">
                    <img src="/img/Carta_01.png" alt="carta" className="step-icon" />
                    <p className="step-text">Encontre os pares</p>
                </div>

                <div className="seta">→</div>

                <div className="step">
                    <img src="/img/Carta_02.png" alt="carta" className="step-icon" />
                    <p className="step-text">Discubra virtudes</p>
                </div>

                <div className="seta">→</div>

                <div className="step">
                    <img src="/img/Carta_03.png" alt="carta" className="step-icon" />
                    <p className="step-text">Agregue-as</p>
                </div>
            </div>

            <div className="bottom-left">
                <img src="/img/bottom-left.png" alt="icone" className="bottom-left-icon" />
                <p className="step-text">Utilize o mouse</p>
            </div>

            <div className="bottom-right">

            </div>
        </div>
    )
}
export default MemoryGameTutorial;