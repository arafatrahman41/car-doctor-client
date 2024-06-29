import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";

const Login = () => {
  const handleLogin = event => {
    event.preventDefault();

  }

  return (
    <div className="hero min-h-screen my-20">
      <div className="hero-content flex-col lg:flex-row gap-16">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold mt-8 text-center">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center mb-7">New to Car Doctors <Link className="text-orange-600 font-bold" to='/signUp'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
