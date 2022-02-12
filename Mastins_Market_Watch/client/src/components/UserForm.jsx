import React from 'react'


function UserForm(props) {
  
  const handleSubmit = (e) => {
    props.addUser(e)
    props.history.push('/userlistings')

    
  }

    const newUser = props.newUser
    return (
      <div>
      <h1>Complete the form</h1>
      <form onSubmit={ handleSubmit }>
        <input type="text" value={newUser.name} onChange={ props.handleChange} name={'name'} placeholder={'name'} />
        <input type="text" value={newUser.password} onChange={ props.handleChange} name={'password'} placeholder={'password'} />
        <button>Submit</button>
      </form>
      </div>
    );
}



export default UserForm