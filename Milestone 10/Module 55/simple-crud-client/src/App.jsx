import './App.css'

function App() {

  const handleAddUser = (e) => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const user = {name, email};
      console.log(user);
      e.target.reset();

      fetch('http://localhost:5000/users', {
        method: 'post',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' placeholder='name' />
        <input type="email" name='email' placeholder='email' />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App
