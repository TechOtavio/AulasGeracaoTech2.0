import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let [email, setEmail] = useState('')
  let [senha, setSenha] = useState('')
  let [errorMsg, setErrorMsg] = useState('')
  let [loading, setLoading] = useState(false)
  let navigate = useNavigate()
  let { user, setUser } = useContext(UserContext)

  const fazerLogin = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setLoading(true)
    try {
      const resposta = await fetch('http://localhost:3000/verificarLogin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      })

      const dados = await resposta.json()
      setLoading(false)

      if (resposta.ok) {
        localStorage.setItem('token', dados.token)
        localStorage.setItem('usuario', JSON.stringify(dados.usuario))
        setUser(dados.usuario)

        if (dados.usuario.tipo === 'admin') {
          navigate('/admin')
        } else if (dados.usuario.tipo === 'aluno') {
          navigate('/aluno')
        } else if (dados.usuario.tipo === 'professor') {
          navigate('/professor')
        }
      } else {
        setErrorMsg(dados.erro || 'Erro no login, tente novamente.')
      }
    } catch (error) {
      setLoading(false)
      setErrorMsg('Erro na conexão, tente novamente mais tarde.')
    }
  }

  return (
    <div
      className="container vh-100 d-flex justify-content-center align-items-center"
      style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ width: '100%', maxWidth: '420px', borderRadius: '12px' }}
      >
        <h2 className="mb-4 text-center text-primary fw-bold">Entrar</h2>

        {errorMsg && (
          <div className="alert alert-danger text-center" role="alert">
            {errorMsg}
          </div>
        )}

        <form onSubmit={fazerLogin} noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
              disabled={loading}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="senha" className="form-label fw-semibold">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              className="form-control"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              autoComplete="current-password"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 fw-semibold"
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home
