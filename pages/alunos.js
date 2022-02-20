import AlunosPage from "../src/components/AlunosCard/AlunosPage"
import { createServer } from "miragejs"
import api from '../services/api'

export default function dashboard({ Component, pageProps }) {

// MIRAGEJS Mock
createServer({
  routes() {
    this.namespace = "api"

    this.get("/alunos", () => {
      return {
        userData: [
          { id: 1, name: "Lucas Alves", birthYear: '2000', birthDay: '27', birthMonth: '08', isActive: true, userPlano: 'VIP', isMatriculado: true, isAdimplente: true, lastVisitToGym: '/Epoch/ 1645111592' },
          { id: 2, name: "Luiz Nunes", birthYear: '1986', birthDay: '17', birthMonth: '02', isActive: false, userPlano: 'Basico', isMatriculado: true, isAdimplente: false, lastVisitToGym: '/Epoch/ 1641828392' },
          { id: 3, name: "Fausto Silva", birthYear: '1997', birthDay: '22', birthMonth: '12', isActive: true, userPlano: 'Funcionario', isMatriculado: true, isAdimplente: true, lastVisitToGym: '/Epoch/ 1645025192' },
        ],
      }
    })
  },
})

  return (
    <>
      <AlunosPage />
    </>
  )
}