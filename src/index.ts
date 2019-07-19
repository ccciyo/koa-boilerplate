import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';



const app = new Koa();


// Enable bodyParser with default options
app.use(bodyParser());

// JWT middleware -> below this line routes are only reached if JWT token is valid, secret as env variable
app.use(jwt({ secret: config.jwtSecret }));

// this routes are protected by the JWT middleware, also include middleware to respond with "Method Not Allowed - 405".
app.use(router.routes()).use(router.allowedMethods());

app.listen(config.port);

console.log(`Server running on port ${config.port}`);

