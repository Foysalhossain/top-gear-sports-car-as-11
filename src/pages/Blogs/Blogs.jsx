

const Blogs = () => {
    return (
        <div>
            <h2 className="text-4xl text-center font-bold my-8">Blogs</h2>
            <div>
                <div className="my-6">
                    <h1 className="text-2xl font-semibold my-2">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <p>
                        <h3 className="font-semibold">Access token and refresh token </h3>
                        A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.

                        <h3 className="font-semibold my-2">How do they work and where should we store them on the client-side</h3>
                        This assumes that my client application knows about the refresh token, because I need it to request a new access token if no user credentials (e.g. email/password) are present.

                        My question: Where do I store the refresh token in my client-side application? There are lots of questions/answers about this topic on SO, but regarding the refresh token the answer are not clear.

                        Access token and refresh token should not be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie (even though there is CSRF) and I need it for most of my requests to the Resource Server anyway.

                        But what about the refresh token? I cannot store it in a cookie, because it would be send with every request to my Resource Server as well which makes it vulnerable to CSRF too and it would send expose both access/refresh token with an identical attack vector.
                    </p>
                </div>

                <div className="my-6">
                    <h1 className="text-2xl font-semibold my-2">Compare SQL and NoSQL databases?</h1>
                    <p>
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </p>
                </div>

                <div className="my-6">
                    <h1 className="text-2xl font-semibold my-2">What is express js?</h1>
                    <p>
                        Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.

                        Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks
                    </p>
                </div>
                <div className="my-6">
                    <h1 className="text-2xl font-semibold my-2">What is Nest JS?</h1>
                    <p>
                        Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
                    </p>
                </div>
                <div className="my-6">
                    <h1 className="text-2xl font-semibold my-2">What is MongoDB aggregate and how does it work?</h1>
                    <p>
                        MongoDB aggregation framework is a powerful tool that allows you to perform advanced data processing and analysis operations on MongoDB collections. It provides a flexible and efficient way to aggregate, transform, and analyze data within the database. <br /> <br />

                        The aggregation framework works by processing data through a pipeline of stages. Each stage takes the output of the previous stage as its input and applies a specific operation or transformation to the data. The result is then passed to the next stage in the pipeline.

                        By combining these stages in a pipeline, you can perform complex data operations and aggregations within the database, reducing the need for multiple round trips to the client application. <br /> <br />

                        The aggregation framework supports expressive and versatile operations, allowing you to compute statistics, create reports, generate summaries, and extract valuable insights from your data efficiently and in a scalable manner.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;