const Blog = () => {
    return (
        <div className="text-gray-300 min-h-screen ">
            <h1 className="font-semibold text-xl my-4">1 .What is an access token and refresh token?</h1>
            <p>An access token is a credential used to authenticate and authorize a user to access protected resources in a system. It is typically a short-lived token that is issued by an authentication server after a successful login. The access token is included in each request made to the server to access protected resources.</p>

            <p>A refresh token is a long-lived token that is used to obtain a new access token when the current access token expires. It is securely stored on the client-side and sent to the authentication server when needed. The server validates the refresh token and issues a new access token, allowing the user to continue accessing protected resources without the need to re-authenticate.</p>

            <h1 className="font-semibold text-xl my-4">2. Compare SQL and NoSQL databases</h1>
            <p>SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems.</p>

            <p>SQL databases are based on the relational model, where data is organized into tables with.They use SQL for querying and manipulating data and  suitable for complex transactions and structured data.</p>

            <p>NoSQL databases, on the other hand, offer a flexible schema and store data in various formats like key-value pairs, documents, graphs, or columnar structures. They are horizontally scalable, handle large amounts of unstructured data, and provide high performance and scalability. NoSQL databases sacrifice some of the ACID properties in favor of scalability and flexibility.</p>

            <h1 className="font-semibold text-xl my-4">3. What is Express.js?</h1>
            <p>Express.js is a fast and minimalist web application framework for Node.js. It provides a set of robust features for building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and response generation.</p>

            <p>With Express.js, developers can create server-side applications in JavaScript, define routes for handling specific endpoints, implement middleware functions for request processing, and manage HTTP methods like GET, POST, PUT, DELETE, etc. Express.js is widely used and has a large ecosystem of plugins and extensions, making it a popular choice for building web applications with Node.js.</p>

            <h1 className="font-semibold text-xl my-4">4. What is Nest.js?</h1>
            <p>Nest.js is a progressive TypeScript framework for building scalable and efficient server-side applications. It is built on top of Express.js and provides a modular and structured approach to application development. Nest.js follows the architectural patterns of Angular, making it familiar for developers transitioning from frontend to backend development.</p>

            <p>Nest.js leverages TypeScript features like decorators, dependency injection, and strong typing to create maintainable and scalable code. It supports various transport layers, including HTTP, WebSockets, and microservices. Nest.js also provides built-in support for database integration, authentication, caching, and other common backend features.</p>

            <h1>What is MongoDB aggregate and how does it work?</h1>
            <p>MongoDBs aggregation framework is a powerful tool for performing advanced data processing operations on documents within a collection. It allows for data transformation, filtering, grouping, sorting, and other operations to be performed in a single query.</p>

            <p>The aggregation framework works by chaining together multiple stages, each of which performs a specific operation on the input data. These stages can include $match for filtering documents, $group for grouping documents based on specific fields, $sort for sorting the output, $project for reshaping the documents, and many more.</p>

            <p>Each stage in the aggregation pipeline takes the input from the previous stage, processes it, and passes the result to the next stage. This allows for complex data manipulations and analytics to be performed efficiently in a single
                </p>
        </div>
    );
};

export default Blog;