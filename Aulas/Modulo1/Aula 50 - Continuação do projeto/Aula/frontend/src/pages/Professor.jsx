import React, { useState } from 'react';

const Professor = () => {
  const professor = JSON.parse(localStorage.getItem('usuario'));
  const token = localStorage.getItem('token'); // pega token do localStorage

  const [tela, setTela] = useState();
  const [turmaSelecionada, setTurmaSelecionada] = useState(false);
  const [turma, setTurma] = useState('');
  const [alunos, setAlunos] = useState([]);
  const [frequencia, setFrequencia] = useState({});
  const [notas, setNotas] = useState({});

  const handleFrequenciaChange = (alunoId, valor) => {
    setFrequencia((prev) => ({ ...prev, [alunoId]: valor }));
  };

  const handleNotaChange = (alunoId, valor) => {
    setNotas((prev) => ({ ...prev, [alunoId]: valor }));
  };

  async function validandoTurma() {
    if (!turma.trim()) {
      alert('Informe uma turma válida!');
      return;
    }
    const id_prof = professor.id;
    const resp = await fetch(`http://localhost:3000/verificarTurma/${id_prof}/${turma}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const resultado = await resp.json();

    if (resp.ok && resultado.ok) {
      setTurmaSelecionada(true);
    } else {
      alert(resultado.msg || 'Erro ao verificar a turma');
    }
  }

  async function lancarNotas() {
    const id_prof = professor.id;
    const resp = await fetch(`http://localhost:3000/trazerAlunos/${id_prof}/${turma}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const dados = await resp.json();
    setAlunos(dados);
    setTela('notas');
  }

  async function lancarFrequencia() {
    const id_prof = professor.id;
    const resp = await fetch(`http://localhost:3000/trazerAlunos/${id_prof}/${turma}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const dados = await resp.json();
    setAlunos(dados);
    setTela('freq');
  }

  async function salvarFrequencia() {
    const corpo = {
      id_professor: professor.id,
      id_turma: turma,
      frequencias: Object.entries(frequencia).map(([id_aluno, status]) => ({
        id_aluno: Number(id_aluno),
        status,
      })),
    };

    const resp = await fetch('http://localhost:3000/lancarFrequencia', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(corpo),
    });

    const resultado = await resp.json();
    alert(resultado.msg || (resp.ok ? 'Frequência salva!' : 'Erro ao salvar.'));
  }

  async function salvarNotas() {
    const corpo = {
      id_professor: professor.id,
      id_turma: turma,
      notas: Object.entries(notas).map(([id_aluno, nota]) => ({
        id_aluno: Number(id_aluno),
        nota: Number(nota),
      })),
    };

    const resp = await fetch('http://localhost:3000/lancarNotas', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(corpo),
    });

    const resultado = await resp.json();
    alert(resultado.msg || (resp.ok ? 'Notas salvas!' : 'Erro ao salvar.'));
  }

  // Estilos CSS em JS para facilitar a manutenção
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: 800,
      margin: '40px auto',
      padding: 20,
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
      boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    },
    header: {
      textAlign: 'center',
      color: '#333',
      marginBottom: 30,
    },
    inputGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: 10,
      marginBottom: 20,
    },
    input: {
      padding: '8px 12px',
      fontSize: 16,
      borderRadius: 5,
      border: '1.5px solid #ccc',
      width: '150px',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    inputFocus: {
      borderColor: '#007BFF',
    },
    btn: {
      padding: '10px 20px',
      fontSize: 16,
      borderRadius: 5,
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      color: '#fff',
    },
    btnDark: {
      backgroundColor: '#343a40',
    },
    btnDarkHover: {
      backgroundColor: '#23272b',
    },
    btnPrimary: {
      backgroundColor: '#007BFF',
    },
    btnPrimaryHover: {
      backgroundColor: '#0056b3',
    },
    btnSuccess: {
      backgroundColor: '#28a745',
    },
    btnSuccessHover: {
      backgroundColor: '#1e7e34',
    },
    optionsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: 20,
      marginBottom: 30,
    },
    listItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: '10px 20px',
      marginBottom: 10,
      borderRadius: 6,
      boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
    },
    select: {
      padding: '6px 10px',
      borderRadius: 5,
      border: '1px solid #ccc',
      fontSize: 16,
    },
    inputNota: {
      width: 80,
      padding: '6px 8px',
      fontSize: 16,
      borderRadius: 5,
      border: '1px solid #ccc',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Painel do Professor</h1>

      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h3>Selecione Sua turma</h3>
        <div style={styles.inputGroup}>
          <input
            style={styles.input}
            onChange={(e) => setTurma(e.target.value)}
            value={turma}
            type="text"
            id="turma"
            name="turma"
            placeholder="Ex: 3A"
          />
          <button
            style={{ ...styles.btn, ...styles.btnDark }}
            onClick={validandoTurma}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#23272b')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#343a40')}
          >
            Selecionar
          </button>
        </div>

        {turmaSelecionada && (
          <div style={styles.optionsContainer}>
            <button
              style={{ ...styles.btn, ...styles.btnPrimary }}
              onClick={lancarNotas}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0056b3')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#007BFF')}
            >
              Lançar Notas
            </button>
            <button
              style={{ ...styles.btn, ...styles.btnSuccess }}
              onClick={lancarFrequencia}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#1e7e34')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#28a745')}
            >
              Lançar Frequência
            </button>
          </div>
        )}
      </div>

      {!tela && (
        <div style={{ textAlign: 'center', color: '#666' }}>
          Selecione uma opção acima para começar.
        </div>
      )}

      {tela === 'freq' && (
        <div>
          <h2 style={{ marginBottom: 20, color: '#333' }}>Lançamento de frequência</h2>
          {alunos.length === 0 && <p>Nenhum aluno encontrado nesta turma.</p>}
          {alunos.map((aluno) => (
            <div key={aluno.id} style={styles.listItem}>
              <div>{aluno.nome}</div>
              <select
                style={styles.select}
                value={frequencia[aluno.id] || ''}
                onChange={(e) => handleFrequenciaChange(aluno.id, e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="Presente">Presente</option>
                <option value="Falta">Falta</option>
              </select>
            </div>
          ))}
          <button
            onClick={salvarFrequencia}
            style={{ ...styles.btn, ...styles.btnSuccess, width: '100%', marginTop: 20 }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#1e7e34')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#28a745')}
          >
            Salvar Frequência
          </button>
        </div>
      )}

      {tela === 'notas' && (
        <div>
          <h2 style={{ marginBottom: 20, color: '#333' }}>Lançamento de notas</h2>
          {alunos.length === 0 && <p>Nenhum aluno encontrado nesta turma.</p>}
          {alunos.map((usuario) => (
            <div key={usuario.id} style={styles.listItem}>
              <div>{usuario.nome}</div>
              <input
                type="number"
                min={0}
                max={10}
                step={0.1}
                style={styles.inputNota}
                value={notas[usuario.id] || ''}
                onChange={(e) => handleNotaChange(usuario.id, e.target.value)}
                placeholder="0.0"
              />
            </div>
          ))}
          <button
            onClick={salvarNotas}
            style={{ ...styles.btn, ...styles.btnPrimary, width: '100%', marginTop: 20 }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0056b3')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#007BFF')}
          >
            Salvar Notas
          </button>
        </div>
      )}
    </div>
  );
};

export default Professor;
