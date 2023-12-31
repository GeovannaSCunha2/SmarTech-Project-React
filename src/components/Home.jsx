import TrocaBanner from './Banner'
import '../assets/Styles/Principal.css'

export default function Home() {
  return (
    <>
        <main>
            <section> 
              <h1>Mapeamento Inteligente</h1>
              <p>
                  O mapeamento inteligente é uma plataforma criada pela SmarTech juntamente com a IBM para conscientização e melhoria dos transportes públicos elétricos e sustentáveis de São Paulo.
              </p>
              <p className="paragrafo">
                  Serão disponibilizadas as linhas de transporte sustentáveis no estado, a qual o usuário poderá avaliar a qualidade do transporte em tempo real e fornecer seu FeedBack. Sua opinião é importante para a melhoria da qualidade de vida e do produto e implementação de novas propostas.
              </p>
              <TrocaBanner />
            </section>
        </main>
    </>

  )
}