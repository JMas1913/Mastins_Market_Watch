import index from '../../../backend/controllers'

const Login = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [hyperliknk, setHyperlink] = useState('');

    console.log(index.getAllUsers())

    const submit = (e) => {
        e.preventDefault()
        if (setIsValid === true) {
            return 'Valid';
        } else if (setIsValid === false) {
            return 'Invalid';
        } else {
            return;
        }
    };


    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <label htmlFor="username">Username</label>

                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <label htmlFor="password">Password</label>
                <button
                    type="submit"
                    placeholder=""
                    id="submit"
                    value={check ? true : false}
                    onClick={check}>Login</button>
            </form>
        </div>
    )
}

export default Login