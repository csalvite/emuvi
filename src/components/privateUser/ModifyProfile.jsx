import ChangePassword from "./ChangePassword";

function ModifyProfile({privateUser}) {

  const birthday = new Date(privateUser.birthday).toLocaleDateString();

  return (
    <div className='user-profile'>
      <h2>Editar Perfil</h2>
        <p>Nombre de usuario: {privateUser.username}</p>
        <p>Email: {privateUser.email}</p>
        <p>Ciudad: {privateUser.city}</p>
        <p>Provincia: {privateUser.province}</p>
        <p>Código Postal: {privateUser.postalCode}</p>
        <ChangePassword privateUser={privateUser} />
    </div>
  )
}

export { ModifyProfile };
