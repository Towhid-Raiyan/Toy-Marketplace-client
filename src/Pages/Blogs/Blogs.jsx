
const Blogs = () => {
    return (
        <div >
            <h3 className="text-3xl text-cyan-600 font-extrabold text-center my-6">Blogs</h3>
            <div className="p-4 my-4 border border-cyan-400 rounded-lg bg-cyan-100">
                <h3 className="font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p>
                    An access token is a credential granted to a client application after successful authentication, allowing it to access specific resources or perform actions on behalf of a user. It is short-lived and has an expiration time. A refresh token is also issued alongside the access token and has a longer lifespan. When the access token expires, the refresh token can be used to obtain a new access token without requiring the user to reauthenticate. Access tokens can be stored in memory or secure storage mechanisms like sessionStorage, while refresh tokens should be stored in HTTP-only secure cookies or secure storage mechanisms like localStorage, following security best practices such as encryption and HTTPS communication.</p>
            </div>
            <div className="p-4 my-4 border border-cyan-400 rounded-lg bg-cyan-100">
                <h3 className="font-bold">Compare SQL and NoSQL databases?</h3>
                <p>
                    SQL and NoSQL databases differ in their data models, scalability, query language, schema flexibility, and use cases. SQL databases have a structured schema, use SQL as a query language, and are vertically scalable. They are ideal for complex querying, transactions, and relational data. NoSQL databases have flexible schemas, use various data models, and are horizontally scalable. They excel in handling large amounts of data, high write loads, and unstructured or evolving data. Use NoSQL for web applications, real-time data, and scenarios where flexibility is essential.</p>
            </div>
            <div className="p-4 my-4 border border-cyan-400 rounded-lg bg-cyan-100">
                <h3 className="font-bold">What is express js? What is Next JS?</h3>
                <p>
                    Express.js is a popular web application framework for Node.js. It is minimalistic and unopinionated, providing a set of flexible and lightweight features to build web applications and APIs. Express.js simplifies the process of creating server-side applications by providing a robust set of tools and middleware for routing, handling HTTP requests and responses, managing sessions, and integrating with databases. It allows developers to build scalable and modular applications with ease due to its simplicity and extensive ecosystem of plugins and middleware. <br />

                    Nest.js, on the other hand, is a progressive and opinionated web application framework for Node.js that is built with TypeScript. It is designed to enhance developer productivity and maintainability by applying object-oriented programming, functional programming, and reactive programming principles. Nest.js leverages decorators, dependency injection, and modular architecture to create highly testable and scalable applications. It provides a layered architecture, which allows developers to separate concerns and organize code into modules, controllers, services, and providers. Nest.js also offers built-in support for features like routing, validation, authentication, caching, and WebSockets.</p>
            </div>
            <div className="p-4 my-4 border border-cyan-400 rounded-lg bg-cyan-100">
                <h3 className="font-bold">What is MongoDB aggregate and how does it work?</h3>
                <p>
                    In MongoDB, the aggregate function performs advanced data analysis and aggregation operations on a collection of documents. It uses a pipeline framework with stages that process and transform the data. Each stage applies specific operations like filtering, grouping, sorting, and calculating aggregate values. The documents flow from one stage to the next, allowing us to perform complex data analysis and derive meaningful insights from our data efficiently.</p>
            </div>
        </div>
    );
};

export default Blogs;