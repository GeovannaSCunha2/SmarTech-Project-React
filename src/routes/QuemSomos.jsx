import img1 from '../assets/img/fiap.png'
import '../assets/Styles/mainPages.css'

export default function QS() {
  return (
    <>
      <main>
          <section>
              <h1>Quem Somos</h1>

              <p>A <b>SmarTech</b> é uma start up focada na implementação da sustentabilidade no cotidiano do usuário. Utilizamos da tecnologia para implementação de grandes projetos na cidade de São Paulo.</p>
              <p>Além disso, a SmarTech foi criada por um grupo de alunos da turma de Engenharia de Software da Empresa FIAP.</p>

              <img src={img1} alt="Unidade FIAP" width="100%"/>

          </section>
      </main>

    </>
  )
}