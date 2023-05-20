
const Blogs = () => {
    return (
        <div >
            <h3 className="text-3xl text-cyan-600 font-extrabold text-center my-6">Blogs</h3>
            <div className="p-4 my-4 border border-cyan-400 rounded-lg bg-cyan-100">
                <h3 className="font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p>
                    An access token is a credential granted to a client application after successful authentication, allowing it to access specific resources or perform actions on behalf of a user. It is short-lived and has an expiration time. A refresh token is also issued alongside the access token and has a longer lifespan. When the access token expires, the refresh token can be used to obtain a new access token without requiring the user to reauthenticate. Access tokens can be stored in memory or secure storage mechanisms like sessionStorage, while refresh tokens should be stored in HTTP-only secure cookies or secure storage mechanisms like localStorage, following security best practices such as encryption and HTTPS communication.</p>
            </div>
            
        </div>
    );
};

export default Blogs;