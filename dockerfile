FROM oven/bun:distroless AS base
WORKDIR /app
EXPOSE 3000

COPY . .
RUN bun install

USER bun
ENTRYPOINT [ "bun", "run", "start" ]
