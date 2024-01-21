# fastify-throttle-additional-error-log

## Steps to reproduce

Install dependencies

```bash
npm ci
```

Start the application

```bash
node index.mjs
```

Navigate to http://localhost:3000 and once the page is completely loaded, look at the node terminal output to observe the additional line with `{"level": "50", ...}`