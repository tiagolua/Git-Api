import './styles.css'

//Criar os types(props description e titulos)
//verificar a possibilidade de props para perfil, seguidores, localidade, nome e foto
const UserSearch = () => {
    return (
        <div className=''>
            <h1>Busca Cep</h1>
            <div className=''>
                <form onSubmit={handleSubmit}>
                    <div className=''>
                        <input
                        type="text"
                        name="user"
                        value={formData.user}
                        className="search-input"
                        placeholder="Usuário Github"
                         />
                    <button type='submit' className='btn primary-btn search-button'>
                        Encontrar
                    </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default UserSearch;