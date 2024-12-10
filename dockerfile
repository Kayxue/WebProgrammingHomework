FROM oven/bun:1 AS base
WORKDIR /app
EXPOSE 3000/tcp

COPY . .
RUN bun install

USER bun
ENTRYPOINT [ "bun", "run", "start" ]
